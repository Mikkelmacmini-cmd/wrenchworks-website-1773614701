import type { Metadata } from "next"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Contact & Schedule Service | AutoTrek Service Center",
  description: "Schedule auto repair in Littleton, CO. Call AutoTrek Service Center at (303) 328-3356. Open Monday–Friday, 9:00 AM–5:00 PM.",
  alternates: { canonical: "/contact" },
}

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0f1a0f] py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tight mb-4">
            Let&apos;s Get Your<br />
            <span style={{ color: "#c0392b" }}>Car Fixed.</span>
          </h1>
          <p className="text-white/70 text-lg">Call or send us a message — we respond same day.</p>
        </div>
      </section>

      {/* Split layout */}
      <section className="py-0">
        <div className="grid md:grid-cols-2 min-h-[600px]">
          {/* Left — dark info panel */}
          <div className="bg-[#0f1a0f] p-10 md:p-16 flex flex-col justify-center">
            <h2 className="text-2xl font-black text-white mb-8">Find Us</h2>

            <div className="space-y-6">
              <div>
                <p className="text-[#2d6a2d] text-xs font-bold uppercase tracking-widest mb-1">Address</p>
                <p className="text-white font-semibold">{siteConfig.address}</p>
              </div>

              <div>
                <p className="text-[#2d6a2d] text-xs font-bold uppercase tracking-widest mb-1">Phone</p>
                <a href={siteConfig.phoneHref} className="text-white font-bold text-2xl hover:text-[#c0392b] transition-colors">
                  {siteConfig.phoneDisplay}
                </a>
              </div>

              <div>
                <p className="text-[#2d6a2d] text-xs font-bold uppercase tracking-widest mb-1">Hours</p>
                <p className="text-white font-semibold">{siteConfig.hours}</p>
              </div>

              <div>
                <p className="text-[#2d6a2d] text-xs font-bold uppercase tracking-widest mb-1">Certification</p>
                <div className="flex items-center gap-2">
                  <span className="text-white font-semibold">NAPA AutoCare Center</span>
                  <span className="bg-[#2d6a2d] text-white text-xs px-2 py-0.5 rounded-full font-bold">Certified</span>
                </div>
              </div>
            </div>

            {/* Map embed */}
            <div className="mt-8 rounded-xl overflow-hidden border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3075.5707442494795!2d-104.98765402375868!3d39.56928550678116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c839b6e73ec17%3A0xe6e27082d266b0cb!2sAutoTrek%20Member%20Service!5e0!3m2!1sen!2sus!4v1773708898576!5m2!1sen!2sus"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AutoTrek Service Center map"
              />
            </div>

            <a
              href={siteConfig.phoneHref}
              className="mt-8 w-full inline-flex items-center justify-center gap-2 bg-[#D32F2F] hover:bg-[#b71c1c] text-white font-bold px-6 py-4 rounded-full transition-all hover:-translate-y-0.5 text-lg"
            >
              Call Now: {siteConfig.phoneDisplay}
            </a>
          </div>

          {/* Right — contact form */}
          <div className="bg-white p-10 md:p-16 flex flex-col justify-center">
            <h2 className="text-2xl font-black text-gray-900 mb-2">Send a Message</h2>
            <p className="text-gray-500 mb-8">We&apos;ll get back to you quickly — usually same day.</p>

            <form action="/thank-you" method="get" className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">First Name</label>
                  <input
                    required
                    type="text"
                    name="first_name"
                    className="w-full border-2 border-gray-200 focus:border-[#2d6a2d] rounded-xl px-4 py-3 text-gray-900 outline-none transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1.5">Last Name</label>
                  <input
                    type="text"
                    name="last_name"
                    className="w-full border-2 border-gray-200 focus:border-[#2d6a2d] rounded-xl px-4 py-3 text-gray-900 outline-none transition-colors"
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full border-2 border-gray-200 focus:border-[#2d6a2d] rounded-xl px-4 py-3 text-gray-900 outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Phone <span className="text-[#c0392b]">*</span></label>
                <input
                  required
                  type="tel"
                  name="phone"
                  className="w-full border-2 border-gray-200 focus:border-[#2d6a2d] rounded-xl px-4 py-3 text-gray-900 outline-none transition-colors"
                  placeholder="(303) 555-1234"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Vehicle (Year / Make / Model)</label>
                <input
                  type="text"
                  name="vehicle"
                  className="w-full border-2 border-gray-200 focus:border-[#2d6a2d] rounded-xl px-4 py-3 text-gray-900 outline-none transition-colors"
                  placeholder="2019 Toyota Camry"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">How can we help?</label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full border-2 border-gray-200 focus:border-[#2d6a2d] rounded-xl px-4 py-3 text-gray-900 outline-none transition-colors resize-none"
                  placeholder="Describe the issue or service needed..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#D32F2F] hover:bg-[#b71c1c] text-white font-bold py-4 rounded-full text-lg transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                Send Message →
              </button>

              <p className="text-xs text-gray-400 text-center">
                Or call us directly at <a href={siteConfig.phoneHref} className="text-[#c0392b] font-semibold">{siteConfig.phoneDisplay}</a>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
