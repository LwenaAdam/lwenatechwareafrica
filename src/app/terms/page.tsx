import { Metadata } from 'next'
import Link from 'next/link'
import { FileText, CheckCircle2, AlertCircle, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service | TechWareAfrica',
  description: 'Read the terms and conditions governing the use of TechWareAfrica software products, websites, and development services.',
  alternates: {
    canonical: '/terms',
  },
  openGraph: {
    title: 'Terms of Service | TechWareAfrica',
    description: 'Terms and conditions for TechWareAfrica platforms and services.',
    url: 'https://www.techwareafrica.tech/terms',
  },
}

export default function TermsOfServicePage() {
  const lastUpdated = 'October 26, 2026'

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <section className="bg-gradient-to-br from-[#232F3E] to-[#1a242e] text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/" className="inline-flex items-center text-[#FF9900] hover:text-[#e68a00] mb-6 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-[#FF9900]/20 rounded-xl text-[#FF9900]">
              <FileText className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-bold font-heading">
                Terms of Service
              </h1>
              <p className="text-sm text-gray-300 mt-1">Last Updated: {lastUpdated}</p>
            </div>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed mt-4">
            These Terms of Service govern your access to and use of TechWareAfrica websites, applications, and custom engineering services.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12 space-y-10 text-gray-700 leading-relaxed">
            
            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-bold text-[#232F3E] mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing or using any product, API, or service provided by TechWareAfrica, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-bold text-[#232F3E] mb-4">2. Services and Software Solutions</h2>
              <p className="mb-4">
                TechWareAfrica provides SaaS platforms (including InventoryMaster, SMS Gateway Pro, and SmartMenu) as well as custom web, mobile, and cloud software development. We grant you a limited, non-exclusive, non-transferable license to access our platforms in accordance with your chosen subscription plan.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-bold text-[#232F3E] mb-4">3. User Accounts and Security</h2>
              <p className="mb-4">
                When you create an account, you agree to:
              </p>
              <ul className="space-y-2 pl-4">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Provide accurate, current, and complete registration information.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Maintain the confidentiality of your login credentials.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Notify us promptly of any unauthorized access or security breach.</span>
                </li>
              </ul>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-bold text-[#232F3E] mb-4 flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-[#FF9900]" /> 4. Acceptable Use Policy
              </h2>
              <p className="mb-4">
                You agree not to use TechWareAfrica systems for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Sending unsolicited spam messages, phishing, or abusive SMS campaigns via our gateway tools.</li>
                <li>Attempting to probe, scan, or compromise our infrastructure or reverse engineer proprietary source code.</li>
                <li>Violating any applicable local, national, or international laws and regulations.</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl font-bold text-[#232F3E] mb-4">5. Intellectual Property</h2>
              <p>
                All trademarks, logos, system code, software designs, and proprietary features developed by TechWareAfrica remain the exclusive intellectual property of TechWareAfrica. Clients retain ownership of their proprietary business data uploaded into our platforms.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-2xl font-bold text-[#232F3E] mb-4">6. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, TechWareAfrica shall not be liable for any indirect, incidental, or consequential damages resulting from downtime, data loss, or service interruption beyond our direct control.
              </p>
            </div>

            {/* Contact Box */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-[#232F3E] mb-2">Questions regarding our Terms?</h3>
              <p className="text-gray-600 mb-4">
                Contact our legal and administrative team directly:
              </p>
              <div className="flex flex-wrap gap-4 text-sm font-medium">
                <a href="mailto:techwareafrican@gmail.com" className="text-[#FF9900] hover:underline">
                  Email: techwareafrican@gmail.com
                </a>
                <span className="text-gray-400">|</span>
                <Link href="/contact" className="text-[#232F3E] hover:underline">
                  Contact Us Page
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
