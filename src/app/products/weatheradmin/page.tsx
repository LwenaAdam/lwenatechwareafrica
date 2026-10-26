import { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft,
  CheckCircle2,
  CloudRain,
  Activity,
  BarChart2,
  Radio,
  Bell,
  ShieldCheck,
  Cpu,
  ArrowRight
} from 'lucide-react'

const productSchema = {
  "@context": "https://schema.org",
  "@type": ["Product", "SoftwareApplication"],
  "name": "Weather Admin Suite",
  "applicationCategory": "WeatherAnalyticsApplication",
  "operatingSystem": "Web, Cloud, IoT API",
  "description": "Professional weather station telemetry and climate data analytics platform with real-time monitoring, sensor integrations, automated alerts, and meteorological reporting.",
  "brand": {
    "@type": "Brand",
    "name": "TechWareAfrica"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://www.techwareafrica.tech/products/weatheradmin",
    "priceCurrency": "USD",
    "price": "0",
    "validFrom": "2025-01-01",
    "priceValidUntil": "2026-12-31",
    "availability": "https://schema.org/InStock",
    "description": "Free pilot consultation and demo for institutions and enterprises",
    "shippingDetails": {
      "@type": "OfferShippingDetails",
      "shippingRate": {
        "@type": "MonetaryAmount",
        "value": "0",
        "currency": "USD"
      },
      "shippingDestination": {
        "@type": "DefinedRegion",
        "addressCountry": "TZ"
      },
      "deliveryTime": {
        "@type": "ShippingDeliveryTime",
        "handlingTime": {
          "@type": "QuantitativeValue",
          "minValue": 0,
          "maxValue": 0,
          "unitCode": "DAY"
        },
        "transitTime": {
          "@type": "QuantitativeValue",
          "minValue": 0,
          "maxValue": 0,
          "unitCode": "DAY"
        }
      }
    },
    "hasMerchantReturnPolicy": {
      "@type": "MerchantReturnPolicy",
      "applicableCountry": "TZ",
      "returnPolicyCategory": "https://schema.org/MerchantReturnNotPermitted",
      "merchantReturnDays": 0
    }
  }
}

export const metadata: Metadata = {
  title: 'Weather Admin Suite — Real-Time Climate Telemetry & Station Management',
  description: 'Enterprise weather station management platform. Real-time telemetry data collection, forecasting models, historical environmental analytics, and automated threshold alerts.',
  alternates: {
    canonical: 'https://www.techwareafrica.tech/products/weatheradmin',
  },
  openGraph: {
    title: 'Weather Admin Suite — Real-Time Climate Telemetry & Station Management',
    description: 'Enterprise climate monitoring and automated telemetry alerts for commercial agriculture, aviation, and research stations in Africa.',
    url: 'https://www.techwareafrica.tech/products/weatheradmin',
    siteName: 'TechWareAfrica',
  },
}

export default function WeatherAdminPage() {
  const capabilities = [
    'Real-Time Telemetry Ingestion - Stream atmospheric data from hardware sensors via MQTT, LoRaWAN, and REST APIs.',
    'Automated Threshold Alerts - SMS, email, and webhook alerts for severe wind, precipitation, and extreme temperature events.',
    'Historical Climate Modeling - Analyze seasonal patterns, precipitation trends, and longitudinal weather history.',
    'Multi-Station Network - Monitor and calibrate geographically distributed sensor arrays across agriculture and research sites.',
    'Data Export & Compliance - Export verified meteorological observations in CSV, JSON, and standard meteorological formats.',
    'Offline Buffer & Sync - On-device edge buffering ensures zero data loss during remote connectivity outages.'
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Header */}
      <section className="bg-gradient-to-br from-[#232F3E] to-[#1a242e] text-white py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <Link href="/products" className="inline-flex items-center text-[#FF9900] hover:text-[#e68a00] mb-6 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-purple-500/20 text-purple-400 rounded-xl">
              <CloudRain className="w-8 h-8" />
            </div>
            <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full border border-green-500/30">
              Enterprise Ready
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold font-heading mb-4">
            Weather Admin Suite
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
            Professional meteorological data management, IoT sensor telemetry, and predictive forecasting for agriculture, maritime, and scientific research in Africa.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center bg-[#FF9900] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e68a00] transition-colors"
            >
              Request Enterprise Demo <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="p-3 bg-purple-50 text-purple-600 rounded-lg w-fit mb-4">
                <Radio className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-[#232F3E] mb-2">Sensor Integration</h3>
              <p className="text-gray-600 text-sm">
                Connects seamlessly with Campbell Scientific, Davis Instruments, Arduino, and custom ESP32 climate sensors.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-lg w-fit mb-4">
                <BarChart2 className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-[#232F3E] mb-2">Predictive Telemetry</h3>
              <p className="text-gray-600 text-sm">
                Statistical anomaly detection and localized hyper-local forecast models tailored to micro-climates.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="p-3 bg-green-50 text-green-600 rounded-lg w-fit mb-4">
                <Bell className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-[#232F3E] mb-2">Instant Threshold Alerts</h3>
              <p className="text-gray-600 text-sm">
                Integrated with SMS Gateway Pro to dispatch mission-critical frost, storm, or flood alerts to field engineers.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12 mb-12">
            <h2 className="text-2xl font-bold text-[#232F3E] mb-6">Core Capabilities & Technical Architecture</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {capabilities.map((cap, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm leading-relaxed">{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Box */}
          <div className="bg-gradient-to-r from-[#232F3E] to-[#1a242e] text-white rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Deploy Weather Admin for Your Station Network</h3>
              <p className="text-gray-300 text-sm max-w-xl">
                Whether managing 2 remote agricultural stations or a nationwide environmental observation network, we engineer end-to-end telemetry solutions.
              </p>
            </div>
            <Link
              href="/contact"
              className="bg-[#FF9900] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e68a00] transition-colors whitespace-nowrap"
            >
              Contact Our Engineers
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
