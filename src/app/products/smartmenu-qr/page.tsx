import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  ArrowLeft,
  CheckCircle2,
  ExternalLink,
  QrCode,
  Utensils,
  Smartphone,
  Sparkles,
  Clock,
  ShieldCheck,
  BarChart3,
  Globe,
  Zap,
  Check,
  Star
} from 'lucide-react'

const productSchema = {
  "@context": "https://schema.org",
  "@type": ["Product", "SoftwareApplication"],
  "name": "SmartMenu QR SaaS",
  "applicationCategory": "RestaurantManagementApplication",
  "operatingSystem": "Web, iOS, Android, Cloud",
  "description": "Cloud-native Contactless Digital QR Restaurant Menu & Order Management System. Instant QR code menus, live kitchen tracking, and customer feedback analytics for modern hospitality in Africa.",
  "image": "https://techwareafrica.tech/images/smartmenu/smartmenu-preview.png",
  "url": "https://smartmenu.techwareafrica.tech",
  "brand": {
    "@type": "Brand",
    "name": "TechWareAfrica"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://smartmenu.techwareafrica.tech",
    "priceCurrency": "USD",
    "price": "0",
    "availability": "https://schema.org/InStock",
    "description": "Free Starter Plan & 14-day Pro Trial for Restaurants"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "18"
  }
}

export const metadata: Metadata = {
  title: 'SmartMenu QR — Cloud Digital Menu & Contactless Restaurant Ordering SaaS',
  description: 'Transform restaurant dining with SmartMenu QR. Instant QR code menus, real-time kitchen tracking, daily menu specials, and customer feedback analytics.',
  openGraph: {
    title: 'SmartMenu QR — Cloud Digital Menu & Contactless Restaurant Ordering SaaS',
    description: 'Transform restaurant dining with SmartMenu QR. Instant QR code menus, real-time kitchen tracking, daily menu specials, and customer feedback analytics.',
    url: 'https://www.techwareafrica.tech/products/smartmenu-qr',
    siteName: 'TechWareAfrica',
    images: ['/images/smartmenu/smartmenu-preview.png']
  },
  alternates: {
    canonical: 'https://www.techwareafrica.tech/products/smartmenu-qr'
  }
}

export default function SmartMenuQRPage() {
  const features = [
    'Dynamic QR Code Generation - Unique QR codes for every dining table and VIP room',
    'Zero App Download - Guests scan and browse immediately on Chrome, Safari, or any phone',
    'Real-time Daily Menu & 86 Items - Mark out-of-stock items in 1 click to avoid kitchen confusion',
    'Live Kitchen Order Tracking - Orders flow seamlessly from table to kitchen display (KDS)',
    'Guest Feedback Loop - Collect ratings and private feedback before guests leave negative reviews',
    'Bilingual Ready - Full English and Swahili interface for local and international diners',
    'Sales & Table Analytics - Identify bestsellers, peak ordering hours, and revenue per table',
    'Multi-Tenant Architecture - Enterprise data isolation, role-based staff permissions'
  ]

  const benefits = [
    { title: 'Eliminate Re-Printing Costs', desc: 'No more worn-out paper menus or costly reprints when updating prices or dishes.', icon: Zap },
    { title: 'Faster Table Turnover', desc: 'Guests order immediately upon sitting down, cutting average ordering wait time by 15 minutes.', icon: Clock },
    { title: 'Boost Average Order Value', desc: 'High-resolution dish photos and smart add-ons increase average basket size by 20–25%.', icon: BarChart3 },
    { title: 'Protect Guest Health & Hygiene', desc: '100% contactless digital menus enhance sanitation and guest safety standards.', icon: ShieldCheck }
  ]

  const techStack = [
    { category: 'Frontend', tech: 'React 18, Vite, Vanilla CSS, Responsive PWA' },
    { category: 'Backend API', tech: 'Spring Boot 3, Java 21 LTS, Spring Security' },
    { category: 'Database', tech: 'PostgreSQL 16 (Relational, ACID Compliant)' },
    { category: 'Documentation', tech: 'OpenAPI 3.0, Swagger UI' },
    { category: 'Infrastructure', tech: 'Docker, Nginx Reverse Proxy, Cloudflare, SSL' }
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <Link href="/products" className="inline-flex items-center text-secondary hover:text-secondary/80 mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Link>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              Production Ready SaaS
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              SmartMenu QR <br />
              <span className="text-secondary">Digital Menu & Contactless Ordering</span>
            </h1>

            <p className="text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
              Empower your restaurant, cafe, or hotel with intelligent QR dining. Guests scan, browse vibrant visual menus, and order directly from their phone. Zero app installs required.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="https://smartmenu.techwareafrica.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-primary font-bold rounded-lg shadow-lg hover:bg-secondary/90 transition-all text-lg"
              >
                Launch SmartMenu App
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>

              <a
                href="https://smartmenu.techwareafrica.tech/customer-menu?table=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 transition-all text-lg"
              >
                Try Customer Live Demo
                <QrCode className="ml-2 h-5 w-5" />
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm text-gray-300">
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-400" /> Free Trial Available
              </span>
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-400" /> Multi-Tenant Architecture
              </span>
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-400" /> Instant Activation
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Value Metrics Section */}
      <section className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="text-4xl font-extrabold text-primary mb-2">0 sec</div>
              <div className="text-gray-600 font-medium">Guest Wait to View Menu</div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="text-4xl font-extrabold text-primary mb-2">+22%</div>
              <div className="text-gray-600 font-medium">Average Order Size</div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="text-4xl font-extrabold text-primary mb-2">100%</div>
              <div className="text-gray-600 font-medium">Paper Menu Printing Saved</div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="text-4xl font-extrabold text-primary mb-2">4.9 ★</div>
              <div className="text-gray-600 font-medium">Guest Satisfaction Score</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything Your Hospitality Business Needs
            </h2>
            <p className="text-lg text-gray-600">
              Built specifically for East African and Pan-African restaurants, lounges, beach resorts, and hotels needing reliable, high-speed ordering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 p-5 rounded-xl border border-gray-100 bg-white hover:border-primary/20 hover:shadow-md transition-all">
                <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-800 font-medium leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Restaurant Owners Choose SmartMenu
            </h2>
            <p className="text-lg text-gray-600">
              Increase revenue, delight your guests, and run a streamlined kitchen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Built on Modern Enterprise Technology
            </h2>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <table className="w-full text-left border-collapse">
                <tbody>
                  {techStack.map((item, index) => (
                    <tr key={index} className="border-b border-gray-100 last:border-0 hover:bg-gray-50/50">
                      <td className="py-4 px-6 font-semibold text-gray-900 w-1/3">{item.category}</td>
                      <td className="py-4 px-6 text-gray-600">{item.tech}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Ready to Modernize Your Dining Experience?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Get started in under 5 minutes. Generate your first QR code and start taking orders today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://smartmenu.techwareafrica.tech/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-primary font-bold rounded-lg shadow-xl hover:bg-secondary/90 transition-all text-lg"
            >
              Register Your Restaurant Free
              <ArrowLeft className="ml-2 h-5 w-5 rotate-180" />
            </a>
            <a
              href="https://api-smartmenu.techwareafrica.tech/swagger-ui.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 transition-all text-lg"
            >
              Developer API & Swagger
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
