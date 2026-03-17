import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { services, siteConfig } from "@/lib/site"
import { serviceContent } from "@/lib/service-content"
import { ScrollReveal } from "@/components/ScrollReveal"

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = services.find((s) => s.slug === params.slug)
  if (!service) return {}
  return {
    title: `${service.name} in Littleton, CO | AutoTrek Service Center`,
    description: `Need ${service.name} in Littleton, CO? AutoTrek Service Center — ASE-certified technicians, honest pricing, full inspection every visit. Call ${siteConfig.phoneDisplay}.`,
    alternates: { canonical: `/services/${service.slug}` },
  }
}

const SERVICE_IMAGES: Record<string, string> = {
  "ac-service-repair-littleton-co": "/images/hero-c.png",
  "brake-repair-service-littleton-co": "/images/mechanic-2.jpg",
  "check-engine-light-diagnostics-littleton-co": "/images/check-engine-light.jpg",
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

  const content = serviceContent[service.slug]
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3)
  const heroImage = getServiceImage(service.slug)

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    areaServed: "Littleton, CO",
    provider: {
      "@type": "AutoRepair",
      name: siteConfig.name,
      address: { "@type": "PostalAddress", streetAddress: "8161 S Grant Way", addressLocality: "Littleton", addressRegion: "CO", postalCode: "80122" },
      telephone: siteConfig.phoneDisplay,
    },
  }

  const faqSchema = content ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map(f => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a }
    }))
  } : null

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#0f1a0f] py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={heroImage} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4">
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
            {content ? content.intro.slice(0, 200) + "..." : service.short + " ASE-certified technicians. Honest pricing. Full inspection every visit."}
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center gap-2 bg-[#D32F2F] hover:bg-[#b71c1c] text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:-translate-y-0.5"
            >
              Call: {siteConfig.phoneDisplay}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:-translate-y-0.5"
            >
              Schedule Online
            </Link>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid md:grid-cols-3 gap-16">
            {/* Main content */}
            <div className="md:col-span-2 space-y-12">

              {/* Intro / Trust Block */}
              <ScrollReveal>
                <div>
                  <h2 className="text-3xl font-black tracking-tight mb-4">
                    Expert {service.name}
                    <br />
                    <span style={{ color: "#2d6a2d" }}>You Can Count On.</span>
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {content ? content.intro : `${service.short} At AutoTrek Service Center, we provide accurate diagnostics, transparent recommendations, and dependable workmanship from ASE-certified technicians.`}
                  </p>
                </div>
              </ScrollReveal>

              {/* Why This Matters */}
              {content && (
                <ScrollReveal delay={0.1}>
                  <div>
                    <h2 className="text-2xl font-black tracking-tight mb-4">{content.whyMatters.heading}</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">{content.whyMatters.body}</p>
                    <div className="bg-[#fef7f7] border border-red-100 rounded-2xl p-6">
                      <h3 className="font-bold text-gray-900 mb-3">Signs You May Need {service.name}:</h3>
                      <ul className="space-y-2">
                        {content.whyMatters.signs.map(s => (
                          <li key={s} className="flex items-start gap-3 text-gray-700">
                            <span className="text-[#D32F2F] font-bold mt-0.5">⚠</span>
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>
              )}

              {/* Process */}
              {content && (
                <ScrollReveal delay={0.15}>
                  <div>
                    <h2 className="text-2xl font-black tracking-tight mb-6">{content.process.heading}</h2>
                    <div className="space-y-6">
                      {content.process.steps.map((step, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="flex-shrink-0 w-10 h-10 bg-[#2d6a2d] rounded-full flex items-center justify-center text-white font-bold text-sm">{i + 1}</div>
                          <div>
                            <h3 className="font-bold text-gray-900 text-lg mb-1">{step.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              )}

              {/* What's Included */}
              {content && (
                <ScrollReveal delay={0.2}>
                  <div className="bg-[#f0f7f0] rounded-2xl border border-[#2d6a2d]/10 p-8">
                    <h3 className="text-xl font-black mb-4">What&apos;s Included</h3>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {content.included.map(item => (
                        <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                          <span className="text-[#2d6a2d] font-bold mt-0.5">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              )}

              {/* Why Choose AutoTrek */}
              <ScrollReveal delay={0.25}>
                <div>
                  <h2 className="text-2xl font-black tracking-tight mb-6">Why Littleton Drivers Choose AutoTrek</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {(content ? content.whyChoose : [
                      { title: "Honest Pricing", desc: "Written quotes before any work begins. No hidden fees, no surprises." },
                      { title: "ASE Certified", desc: "Our team handles domestic, foreign, trucks, and SUVs." },
                      { title: "Full Inspection", desc: "Every vehicle gets a complimentary safety check every visit." },
                      { title: "Same-Day Service", desc: "Most repairs completed the same day you drop off." }
                    ]).map(item => (
                      <div key={item.title} className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-md transition-shadow">
                        <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* FAQs */}
              <ScrollReveal delay={0.3}>
                <div>
                  <h2 className="text-2xl font-black tracking-tight mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    {(content ? content.faqs : [
                      { q: "How soon can I schedule?", a: "Call us for availability. We often have same-week openings." },
                      { q: "Do I need to approve the repair first?", a: "Always. Written quote, you approve before we start. No pressure." },
                      { q: "What vehicles do you work on?", a: "Domestic, foreign, trucks, SUVs — all makes and models." }
                    ]).map(faq => (
                      <div key={faq.q} className="border border-gray-100 rounded-xl p-5">
                        <p className="font-bold text-gray-900 mb-2">{faq.q}</p>
                        <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Closing CTA */}
              {content && (
                <ScrollReveal delay={0.35}>
                  <div className="bg-[#0f1a0f] rounded-2xl p-8 text-center">
                    <h2 className="text-2xl font-black text-white mb-3">Schedule Your {service.name} Today</h2>
                    <p className="text-white/70 leading-relaxed mb-6 max-w-lg mx-auto">{content.closingCta}</p>
                    <a
                      href={siteConfig.phoneHref}
                      className="inline-flex items-center gap-2 bg-[#D32F2F] hover:bg-[#b71c1c] text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:-translate-y-0.5"
                    >
                      Call {siteConfig.phoneDisplay}
                    </a>
                  </div>
                </ScrollReveal>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <ScrollReveal direction="right">
                <div className="bg-[#0f1a0f] rounded-2xl p-6 text-white sticky top-24">
                  <h3 className="font-black text-lg mb-4">Schedule Service</h3>
                  <div className="space-y-3 text-sm text-white/70 mb-6">
                    <p>📍 {siteConfig.address}</p>
                    <p>🕐 {siteConfig.hours}</p>
                    <p>🏅 ASE Certified Technicians</p>
                    <p>🔍 Free inspection every visit</p>
                  </div>
                  <a
                    href={siteConfig.phoneHref}
                    className="block w-full text-center bg-[#D32F2F] hover:bg-[#b71c1c] text-white font-bold py-4 rounded-full transition-all hover:-translate-y-0.5 mb-3"
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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
    </div>
  )
}
