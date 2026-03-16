import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { services, siteConfig } from "@/lib/site"
import { ScrollReveal } from "@/components/ScrollReveal"

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = services.find((s) => s.slug === params.slug)
  if (!service) return {}
  return {
    title: `${service.name} in Littleton, CO | AutoTrek Service Center`,
    description: `Need ${service.name} in Littleton, CO? AutoTrek Service Center provides expert, NAPA-backed service. Call ${siteConfig.phoneDisplay} for a quote.`,
    alternates: { canonical: `/services/${service.slug}` },
  }
}

const SERVICE_IMAGES: Record<string, string> = {
  "ac-service-repair-littleton-co": "/images/hero-c.png",
  "brake-repair-service-littleton-co": "/images/mechanic-2.jpg",
  "ev-hybrid-repair-littleton-co": "/images/hero-b.png",
  "check-engine-light-diagnostics-littleton-co": "/images/engine-work.jpg",
  "oil-fluid-changes-littleton-co": "/images/mechanic-1.jpg",
  "steering-suspension-littleton-co": "/images/mechanic-2.jpg",
  "transmission-repair-littleton-co": "/images/engine-work.jpg",
  "timing-belt-repair-littleton-co": "/images/engine-work.jpg",
}

function getServiceImage(slug: string): string {
  return SERVICE_IMAGES[slug] || "/images/mechanic-1.jpg"
}

export default function ServiceDetail({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug)
  if (!service) notFound()

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3)
  const heroImage = getServiceImage(service.slug)

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    areaServed: "Littleton, CO",
    provider: { "@type": "AutoRepair", name: siteConfig.name },
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#0f1a0f] py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={heroImage} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/50 text-sm mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white">{service.name}</span>
          </nav>

          <div className="inline-flex items-center gap-2 bg-[#2d6a2d] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mb-6">
            Littleton, CO
          </div>

          <h1 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tight mb-6">
            {service.name}<br />
            <span style={{ color: "#c0392b" }}>in Littleton, CO</span>
          </h1>

          <p className="text-white/70 text-xl max-w-2xl leading-relaxed mb-8">
            {service.short} Backed by the NAPA 36-Month/36,000-Mile warranty.
          </p>

          <a
            href={siteConfig.phoneHref}
            className="inline-flex items-center gap-2 bg-[#c0392b] hover:bg-[#a93226] text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:-translate-y-0.5"
          >
            Call to Schedule: {siteConfig.phoneDisplay}
          </a>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid md:grid-cols-3 gap-16">
            {/* Main content */}
            <div className="md:col-span-2 space-y-10">
              <ScrollReveal>
                <div>
                  <h2 className="text-3xl font-black tracking-tight mb-4">
                    Expert {service.name}
                    <br />
                    <span style={{ color: "#2d6a2d" }}>Without the Dealership Markup.</span>
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {service.short} At AutoTrek Service Center, we provide accurate diagnostics, transparent recommendations, and dependable workmanship backed by our 36-month/36,000-mile NAPA warranty.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="bg-[#f8faf8] rounded-2xl border border-gray-100 p-8">
                  <h3 className="text-xl font-black mb-4">Why Choose AutoTrek?</h3>
                  <ul className="space-y-3">
                    {[
                      "NAPA AutoCare Center — certified quality and parts",
                      "Domestic, Foreign, EV & Hybrid expertise",
                      "Written quote before any work begins — no surprises",
                      "36-Month/36,000-Mile NAPA warranty on qualifying repairs",
                      "Serving Littleton, Highlands Ranch, Englewood, Lakewood & Centennial",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-gray-700">
                        <span className="text-[#2d6a2d] font-bold mt-0.5">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div>
                  <h3 className="text-xl font-black mb-4">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    <div className="border-b border-gray-100 pb-4">
                      <p className="font-bold text-gray-900 mb-1">How soon can I schedule?</p>
                      <p className="text-gray-600">Call us for current availability. We often have same-week openings and can work with your schedule.</p>
                    </div>
                    <div className="border-b border-gray-100 pb-4">
                      <p className="font-bold text-gray-900 mb-1">Do you provide a warranty?</p>
                      <p className="text-gray-600">Yes — qualifying repairs include our NAPA 36-Month/36,000-Mile warranty, honored at over 14,000 locations nationwide.</p>
                    </div>
                    <div className="border-b border-gray-100 pb-4">
                      <p className="font-bold text-gray-900 mb-1">Do I need to approve the repair first?</p>
                      <p className="text-gray-600">Always. We give you a written quote and nothing gets started until you say go. No pressure, no surprises.</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <ScrollReveal direction="right">
                <div className="bg-[#0f1a0f] rounded-2xl p-6 text-white sticky top-24">
                  <h3 className="font-black text-lg mb-4">Schedule Service</h3>
                  <div className="space-y-3 text-sm text-white/70 mb-6">
                    <p>📍 {siteConfig.address}</p>
                    <p>🕐 {siteConfig.hours}</p>
                    <p>🏅 NAPA AutoCare Certified</p>
                  </div>
                  <a
                    href={siteConfig.phoneHref}
                    className="block w-full text-center bg-[#c0392b] hover:bg-[#a93226] text-white font-bold py-4 rounded-full transition-all hover:-translate-y-0.5 mb-3"
                  >
                    Call {siteConfig.phoneDisplay}
                  </a>
                  <Link
                    href="/contact"
                    className="block w-full text-center border-2 border-[#2d6a2d] hover:bg-[#2d6a2d] text-white font-bold py-4 rounded-full transition-all"
                  >
                    Send Message
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="bg-[#f8faf8] py-16">
        <div className="mx-auto max-w-6xl px-4">
          <ScrollReveal>
            <h3 className="text-2xl font-black mb-8">Related Services</h3>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-4">
            {related.map((r, i) => (
              <ScrollReveal key={r.slug} delay={i * 0.08}>
                <Link
                  href={`/services/${r.slug}`}
                  className="group block bg-white rounded-2xl border border-gray-100 p-5 hover:-translate-y-1 transition-all hover:shadow-lg"
                >
                  <h4 className="font-bold text-gray-900 mb-1 group-hover:text-[#2d6a2d] transition-colors">{r.name}</h4>
                  <p className="text-sm text-gray-500">{r.short}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </div>
  )
}
