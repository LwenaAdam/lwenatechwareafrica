import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Mail, Phone, Globe, Clock, CheckCircle2, Linkedin, Github, Twitter } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Team - TechWare Africa',
  description: 'Meet our talented team of developers, designers, and support specialists ready to help your business succeed.',
}

export default function TeamPage() {
  const teamMembers = [
    {
      name: 'Lwena Adam',
      role: 'Founder & CEO | Full Stack Developer',
      image: '/images/team/good.jpg',
      bio: 'Visionary founder and lead software architect with deep expertise in building enterprise-grade SaaS products, cloud platforms, web, mobile, and backend systems across Africa and globally.',
      availability: [
        { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM EAT' },
        { day: 'Weekend', hours: 'By appointment' },
      ],
      email: 'lwena027@gmail.com',
      whatsapp: '+255678364343',
      linkedin: 'https://www.linkedin.com/in/lwenaadam',
      github: 'https://github.com/LwenaAdam',
      twitter: 'https://x.com/lwena_27',
      portfolio: 'https://lwena.techwareafrica.tech',
      specialties: ['Full Stack Development', 'System Architecture', 'Project Management', 'SaaS Design'],
    },
    {
      name: 'Fathiya Seif Mohammed',
      role: 'Database Administrator & Head of Customer Support',
      image: null,
      bio: 'Expert database architect with deep knowledge in PostgreSQL optimization, data management, and customer success strategies.',
      availability: [
        { day: 'Always Available', hours: '24/7 Support' },
      ],
      email: 'fathiya@techwareafrica.tech',
      whatsapp: '+255 675 540 929',
      linkedin: 'https://www.linkedin.com/in/fathiya-seif-a3401b379/',
      portfolio: 'https://fathiyaseif.techwareafrica.tech',
      specialties: ['Database Design', 'Customer Support', 'Data Optimization', 'Query Performance'],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center text-secondary hover:text-secondary/80 mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Meet Our Team
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            A dedicated group of professionals committed to delivering world-class software solutions and exceptional support to our clients.
          </p>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {teamMembers.map((member, index) => (
              <div key={index} className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-3 gap-12 items-start">
                  {/* Image Container */}
                  <div className="md:col-span-1">
                    <div className="relative rounded-2xl h-80 overflow-hidden shadow-lg border-2 border-primary/20 sticky top-4 bg-gradient-to-br from-primary to-secondary">
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover object-top hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 320px"
                          priority={index === 0}
                        />
                      ) : (
                        <div className="h-full flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                              <span className="text-6xl">👤</span>
                            </div>
                            <p className="text-white/80">Photo coming soon</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-2">
                    <h2 className="text-3xl font-bold text-primary mb-2">{member.name}</h2>
                    <p className="text-2xl text-secondary font-semibold mb-4">{member.role}</p>

                    {/* Bio */}
                    <p className="text-lg text-muted mb-8 leading-relaxed">{member.bio}</p>

                    {/* Availability */}
                    <div className="bg-blue-50 rounded-lg p-6 mb-8 border border-blue-200">
                      <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                        <Clock className="w-5 h-5" />
                        Availability
                      </h3>
                      <div className="space-y-3">
                        {member.availability.map((slot, i) => (
                          <div key={i} className="flex justify-between items-center">
                            <span className="font-semibold text-primary">{slot.day}</span>
                            <span className="text-muted">{slot.hours}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Specialties */}
                    <div className="mb-8">
                      <h3 className="text-lg font-bold text-primary mb-4">Specialties</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {member.specialties.map((specialty, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-muted">{specialty}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                      <h3 className="text-lg font-bold text-primary mb-4">Get In Touch</h3>
                      <div className="space-y-3">
                        {member.email && (
                          <a 
                            href={`mailto:${member.email}`}
                            className="flex items-center gap-3 text-muted hover:text-primary transition-colors"
                          >
                            <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                            <div>
                              <p className="text-xs text-muted/70">Email</p>
                              <p className="font-medium">{member.email}</p>
                            </div>
                          </a>
                        )}
                        {member.whatsapp && (
                          <a 
                            href={`https://wa.me/${member.whatsapp.replace(/\D/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-muted hover:text-primary transition-colors"
                          >
                            <Phone className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <div>
                              <p className="text-xs text-muted/70">WhatsApp</p>
                              <p className="font-medium">{member.whatsapp}</p>
                            </div>
                          </a>
                        )}
                        {member.linkedin && (
                          <a 
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-muted hover:text-primary transition-colors"
                          >
                            <Linkedin className="w-5 h-5 text-[#0077B5] flex-shrink-0" />
                            <div>
                              <p className="text-xs text-muted/70">LinkedIn</p>
                              <p className="font-medium">Connect on LinkedIn</p>
                            </div>
                          </a>
                        )}
                        {'github' in member && member.github && (
                          <a 
                            href={member.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-muted hover:text-primary transition-colors"
                          >
                            <Github className="w-5 h-5 text-gray-800 flex-shrink-0" />
                            <div>
                              <p className="text-xs text-muted/70">GitHub</p>
                              <p className="font-medium">GitHub Profile</p>
                            </div>
                          </a>
                        )}
                        {'twitter' in member && member.twitter && (
                          <a 
                            href={member.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-muted hover:text-primary transition-colors"
                          >
                            <Twitter className="w-5 h-5 text-[#1DA1F2] flex-shrink-0" />
                            <div>
                              <p className="text-xs text-muted/70">X (Twitter)</p>
                              <p className="font-medium">@lwena_27</p>
                            </div>
                          </a>
                        )}
                        {member.portfolio && member.portfolio !== '#' && (
                          <a 
                            href={member.portfolio.startsWith('http') ? member.portfolio : `https://${member.portfolio}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-muted hover:text-primary transition-colors"
                          >
                            <Globe className="w-5 h-5 text-secondary flex-shrink-0" />
                            <div>
                              <p className="text-xs text-muted/70">Portfolio</p>
                              <p className="font-medium">View Online</p>
                            </div>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {index < teamMembers.length - 1 && (
                  <hr className="my-16 border-gray-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Contact our team today to discuss your project, ask questions, or schedule a consultation.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-white text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
