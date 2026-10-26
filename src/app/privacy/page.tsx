import { Metadata } from 'next'
import Link from 'next/link'
import { Shield, Lock, Eye, FileText, CheckCircle2, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy | TechWareAfrica',
  description: 'Learn how TechWareAfrica collects, uses, protects, and handles your personal information when using our software solutions and services.',
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | TechWareAfrica',
    description: 'TechWareAfrica Privacy Policy and data protection practices.',
    url: 'https://www.techwareafrica.tech/privacy',
  },
}

export default function PrivacyPolicyPage() {
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
              <Shield className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-bold font-heading">
                Privacy Policy
              </h1>
              <p className="text-sm text-gray-300 mt-1">Last Updated: {lastUpdated}</p>
            </div>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed mt-4">
            At TechWareAfrica, we are committed to safeguarding your privacy and protecting the personal and operational data you entrust to us.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12 space-y-10 text-gray-700 leading-relaxed">
            
            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-bold text-[#232F3E] mb-4 flex items-center gap-2">
                <Eye className="w-6 h-6 text-[#FF9900]" /> 1. Information We Collect
              </h2>
              <p className="mb-4">
                We collect information to provide better services, build reliable products, and communicate with you effectively:
              </p>
              <ul className="space-y-2 pl-4">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Contact Information:</strong> Name, business name, email address, phone/WhatsApp number when you request a demo, register, or submit a contact form.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Account & Service Data:</strong> Login credentials, organization settings, transaction records, and configuration preferences for our SaaS applications.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Technical Data:</strong> IP address, browser type, device information, and interaction logs collected automatically to ensure system uptime and security.</span>
                </li>
              </ul>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-bold text-[#232F3E] mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6 text-[#FF9900]" /> 2. How We Use Your Information
              </h2>
              <p className="mb-4">
                TechWareAfrica uses collected data strictly for legitimate operational purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To deliver, maintain, and enhance our software platforms (e.g. InventoryMaster, SMS Gateway Pro, SmartMenu).</li>
                <li>To process transactions, manage account subscriptions, and authenticate authorized access.</li>
                <li>To communicate product updates, security alerts, service announcements, and respond to support inquiries.</li>
                <li>To prevent fraud, address technical errors, and ensure compliance with applicable data regulations.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-bold text-[#232F3E] mb-4 flex items-center gap-2">
                <Lock className="w-6 h-6 text-[#FF9900]" /> 3. Data Protection & Security
              </h2>
              <p>
                We implement industry-standard encryption (TLS/SSL in transit and AES encryption at rest), strict role-based access control, and continuous monitoring to guard against unauthorized access, disclosure, or alteration of your data.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-bold text-[#232F3E] mb-4">4. Sharing of Information</h2>
              <p className="mb-4">
                <strong>We never sell, rent, or trade your personal information to third parties.</strong> We only share information with trusted third-party service providers (such as hosting, database management, and communications infrastructure) solely to the extent necessary to power our applications under confidentiality obligations.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl font-bold text-[#232F3E] mb-4">5. Your Rights & Choices</h2>
              <p className="mb-4">
                You have the right to access, correct, export, or request the deletion of your personal data at any time. If you wish to exercise any of these rights, please contact our support team.
              </p>
            </div>

            {/* Contact Box */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-[#232F3E] mb-2">Have questions about our Privacy Policy?</h3>
              <p className="text-gray-600 mb-4">
                Our team is available to address any privacy inquiries or data requests.
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
