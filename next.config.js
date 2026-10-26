/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/lwena.techwareafrica.tech',
        destination: 'https://lwena.techwareafrica.tech',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
