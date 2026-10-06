#!/usr/bin/env node

const path = require('path');
const fs = require('fs');
const sharp = require('sharp');

function createIco(pngBuffers) {
  const count = pngBuffers.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  let offset = headerSize + count * dirEntrySize;

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);

  const dirEntries = [];
  for (const item of pngBuffers) {
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(item.width >= 256 ? 0 : item.width, 0);
    entry.writeUInt8(item.height >= 256 ? 0 : item.height, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(item.buffer.length, 8);
    entry.writeUInt32LE(offset, 12);
    dirEntries.push(entry);
    offset += item.buffer.length;
  }

  return Buffer.concat([header, ...dirEntries, ...pngBuffers.map((b) => b.buffer)]);
}

async function generateFavicons() {
  const sourcePath = path.join(__dirname, '../public/images/Brand&LandingPage/logoal-removebg-preview.png');
  const publicDir = path.join(__dirname, '../public');
  const appDir = path.join(__dirname, '../src/app');

  if (!fs.existsSync(sourcePath)) {
    console.error('Source logo not found at:', sourcePath);
    process.exit(1);
  }

  console.log('🌟 Reading source logo from:', sourcePath);

  // Extract emblem (T/W mark) from logo
  // Bounding box: left: 182, top: 28, width: 245, height: 233
  const emblemRaw = sharp(sourcePath).extract({ left: 182, top: 28, width: 245, height: 233 });

  // Base canvas size for high-res generation
  const baseSize = 512;
  const padding = 76;
  const emblemTargetSize = baseSize - padding * 2;

  // Resize emblem to emblemTargetSize
  const resizedEmblemBuf = await emblemRaw
    .resize(emblemTargetSize, emblemTargetSize, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .toBuffer();

  // Create tinted vibrant emblem buffers:
  // 1. TechWare vibrant secondary orange (#FF9900)
  const { data, info } = await sharp(resizedEmblemBuf).raw().toBuffer({ resolveWithObject: true });
  
  const orangeData = Buffer.alloc(data.length);
  for (let i = 0; i < data.length; i += 4) {
    const alpha = data[i + 3];
    orangeData[i] = 255;     // R: FF
    orangeData[i + 1] = 153; // G: 99
    orangeData[i + 2] = 0;   // B: 00
    orangeData[i + 3] = alpha;
  }
  const orangeEmblemBuf = await sharp(orangeData, { raw: info }).png().toBuffer();

  // Background: Branded deep navy squircle (#232F3E) with subtle golden/orange highlight border
  const cornerRadius = 112;
  const bgSvg = Buffer.from(
    '<svg width="' + baseSize + '" height="' + baseSize + '" viewBox="0 0 ' + baseSize + ' ' + baseSize + '" xmlns="http://www.w3.org/2000/svg">' +
    '  <defs>' +
    '    <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="100%">' +
    '      <stop offset="0%" stop-color="#2A3849"/>' +
    '      <stop offset="100%" stop-color="#1A242E"/>' +
    '    </linearGradient>' +
    '  </defs>' +
    '  <rect width="' + baseSize + '" height="' + baseSize + '" rx="' + cornerRadius + '" ry="' + cornerRadius + '" fill="url(#brandGrad)"/>' +
    '  <rect x="10" y="10" width="' + (baseSize - 20) + '" height="' + (baseSize - 20) + '" rx="' + (cornerRadius - 6) + '" ry="' + (cornerRadius - 6) + '" fill="none" stroke="#FF9900" stroke-width="12" stroke-opacity="0.85"/>' +
    '</svg>'
  );

  // Master 512x512 branded icon
  const masterIcon512 = await sharp(bgSvg)
    .composite([{ input: orangeEmblemBuf, left: padding, top: padding }])
    .png()
    .toBuffer();

  console.log('✅ Generated master branded 512x512 icon');

  // Save sizes
  const outputs = [
    { dir: publicDir, name: 'android-chrome-512x512.png', size: 512 },
    { dir: publicDir, name: 'android-chrome-192x192.png', size: 192 },
    { dir: publicDir, name: 'apple-touch-icon.png', size: 180 },
    { dir: publicDir, name: 'favicon-32x32.png', size: 32 },
    { dir: publicDir, name: 'favicon-16x16.png', size: 16 },
    { dir: appDir, name: 'icon.png', size: 192 },
    { dir: appDir, name: 'apple-icon.png', size: 180 },
  ];

  for (const item of outputs) {
    const dest = path.join(item.dir, item.name);
    await sharp(masterIcon512)
      .resize(item.size, item.size)
      .png()
      .toFile(dest);
    console.log(`Saved: ${item.name} (${item.size}x${item.size})`);
  }

  // Generate multi-size favicon.ico (16x16, 32x32, 48x48)
  const icoSizes = [16, 32, 48];
  const icoPngBuffers = [];
  for (const s of icoSizes) {
    const buf = await sharp(masterIcon512).resize(s, s).png().toBuffer();
    icoPngBuffers.push({ width: s, height: s, buffer: buf });
  }

  const icoBuffer = createIco(icoPngBuffers);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(appDir, 'favicon.ico'), icoBuffer);
  console.log('Saved: public/favicon.ico and src/app/favicon.ico');

  // Generate web manifest
  const webmanifest = {
    name: 'TechWareAfrica',
    short_name: 'TechWare',
    description: 'World-Class Software Solutions from Africa for the Global Market',
    start_url: '/',
    display: 'standalone',
    background_color: '#232F3E',
    theme_color: '#232F3E',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };

  fs.writeFileSync(
    path.join(publicDir, 'site.webmanifest'),
    JSON.stringify(webmanifest, null, 2)
  );
  console.log('Saved: public/site.webmanifest');
  console.log('🎉 Favicon build completed successfully!');
}

generateFavicons().catch((err) => {
  console.error('Error generating favicons:', err);
  process.exit(1);
});
