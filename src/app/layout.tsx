import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#232F3E',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: 'TechWareAfrica | World-Class Software Solutions from Africa',
    template: '%s | TechWareAfrica'
  },
  description: 'Professional software development company delivering world-class SaaS solutions, mobile apps, and enterprise systems. Built in Africa for the global market.',
  keywords: [
    'software company Africa',
    'web development Tanzania',
    'SaaS solutions Africa',
    'mobile app development',
    'enterprise software Africa',
    'inventory management system',
    'SMS gateway',
    'restaurant management system',
  ],
  authors: [{ name: 'TechWareAfrica' }],
  creator: 'TechWareAfrica',
  publisher: 'TechWareAfrica',
  // canonical site base used to build absolute URLs (keeps Open Graph and canonical links consistent)
  metadataBase: new URL('https://techwareafrica.tech'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://techwareafrica.tech',
    title: 'TechWareAfrica | World-Class Software Solutions from Africa',
    description: 'Professional software development company delivering world-class solutions built in Africa for the global market.',
    siteName: 'TechWareAfrica',
    images: [
      {
        url: '/images/Brand&LandingPage/og-techwareafrica.png',
        width: 1080,
        height: 1080,
        alt: 'TechWareAfrica - World-Class Software Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TechWareAfrica | World-Class Software Solutions',
    description: 'Professional software development company from Africa.',
    images: ['/images/Brand&LandingPage/og-techwareafrica.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "TechWareAfrica",
  "url": "https://techwareafrica.tech",
  "logo": "https://techwareafrica.tech/images/Brand%26LandingPage/logoal-removebg-preview.png",
  "description": "Professional software development company delivering world-class SaaS solutions, mobile apps, and enterprise systems.",
  "email": "techwareafrican@gmail.com",
  "telephone": "+255683274343",
  "areaServed": "Worldwide",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Dar es Salaam",
    "addressCountry": "TZ"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -6.7403176,
    "longitude": 39.1557962
  },
  "hasMap": "https://www.google.com/maps/place/TECHWAREAFRICA/@-6.7403176,39.1557962,17z/",
  "sameAs": [
    "https://github.com/LWENA27",
    "https://www.linkedin.com/in/lwena-adam-b55944322/",
    "https://www.tiktok.com/@techwareafrica"
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
