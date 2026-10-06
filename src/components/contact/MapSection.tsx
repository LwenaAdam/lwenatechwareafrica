'use client'

import { useState } from 'react'
import { MapPin, Navigation, ExternalLink, Copy, Check, Phone, Mail, Clock, Compass } from 'lucide-react'

export function MapSection() {
  const [copied, setCopied] = useState(false)

  const businessAddress = 'TECHWAREAFRICA, Dar es Salaam, Tanzania'
  const googleMapsUrl = 'https://www.google.com/maps/place/TECHWAREAFRICA/@-6.7403176,39.1557962,17z/'
  const directionsUrl = 'https://www.google.com/maps/dir//TECHWAREAFRICA/@-6.7403176,39.1557962,17z/'

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(businessAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      // Fallback if clipboard API is not available
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
  }

  return (
    <section id="map" className="py-20 bg-gradient-to-b from-white to-[#F8F9FA] relative scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF9900]/10 border border-[#FF9900]/25 text-[#232F3E] text-xs font-semibold tracking-wide uppercase mb-4">
            <Compass className="w-4 h-4 text-[#FF9900]" />
            <span>Our Location</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#232F3E] tracking-tight mb-4">
            Visit TechWare Africa
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            Headquartered in Dar es Salaam, Tanzania. We welcome clients, partners, and innovators to connect with us in person or collaborate worldwide.
          </p>
        </div>

        {/* Map & Card Container */}
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="grid lg:grid-cols-12">
            {/* Business Info Column */}
            <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between bg-[#232F3E] text-white">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#FF9900] text-[#232F3E]">
                    Headquarters
                  </span>
                  <span className="text-xs text-gray-300 font-mono">
                    -6.7403° S, 39.1558° E
                  </span>
                </div>

                <h3 className="text-2xl font-bold tracking-tight mb-2 text-white">
                  TECHWAREAFRICA
                </h3>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  Enterprise software development, SaaS products, and digital engineering from East Africa to the globe.
                </p>

                <div className="space-y-4 pt-4 border-t border-white/10">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 text-[#FF9900]" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Address</h4>
                      <p className="text-white text-sm font-medium">TECHWAREAFRICA</p>
                      <p className="text-gray-300 text-sm">Dar es Salaam, Tanzania</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Clock className="w-4 h-4 text-[#FF9900]" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Office Hours</h4>
                      <p className="text-white text-sm">Monday – Friday: 8:00 AM – 6:00 PM CAT</p>
                      <p className="text-gray-400 text-xs">24/7 Digital Support Available</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Phone className="w-4 h-4 text-[#FF9900]" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Direct Call / WhatsApp</h4>
                      <a 
                        href="tel:+255683274343" 
                        className="text-white hover:text-[#FF9900] text-sm transition-colors"
                      >
                        +255 683 274 343
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Mail className="w-4 h-4 text-[#FF9900]" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Email</h4>
                      <a 
                        href="mailto:techwareafrican@gmail.com" 
                        className="text-white hover:text-[#FF9900] text-sm transition-colors"
                      >
                        techwareafrican@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#FF9900] hover:bg-[#e68a00] text-[#232F3E] font-semibold text-xs transition-colors shadow-sm"
                    title="Get Directions on Google Maps"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions</span>
                  </a>

                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium text-xs transition-colors"
                    title="Open in Google Maps"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open in Maps</span>
                  </a>
                </div>

                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white text-xs transition-colors border border-white/10"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-medium">Address Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Google Map Column */}
            <div className="lg:col-span-7 relative min-h-[420px] lg:min-h-[540px] bg-gray-100">
              <iframe
                title="TechWare Africa Office Location - Dar es Salaam"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.241914624915!2d39.15579617499492!3d-6.740317593255982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4f003a5abf5d%3A0xbb9b6a8a3d397081!2sTECHWAREAFRICA!5e0!3m2!1sen!2stz!4v1791278148622!5m2!1sen!2stz"
                className="w-full h-full min-h-[420px] lg:min-h-[540px] border-0"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
