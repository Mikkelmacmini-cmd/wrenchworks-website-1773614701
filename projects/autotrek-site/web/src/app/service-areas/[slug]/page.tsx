import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { areas, services, siteConfig } from "@/lib/site"
import { ScrollReveal } from "@/components/ScrollReveal"

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const area = areas.find((a) => a.slug === params.slug)
  if (!area) return {}
  return {
    title: `Auto Repair Near ${area.name} | AutoTrek Service Center`,
    description: `Looking for a trustworthy mechanic near ${area.name}? AutoTrek Service Center in Littleton is minutes away. ASE-certified, written quotes, free inspection every visit. Call ${siteConfig.phoneDisplay}.`,
    alternates: { canonical: `/service-areas/${area.slug}` },
  }
}

const AREA_CONTENT: Record<string, { distance: string; driveTime: string; blurb: string }> = {
  "littleton-co": { distance: "0 miles", driveTime: "right here", blurb: "We're your local Littleton mechanic. Whether you're on S Grant Way, near Clement Park, or anywhere in Littleton, AutoTrek is close, convenient, and honest." },
  "highlands-ranch-co": { distance: "~5 miles", driveTime: "10 minutes", blurb: "From Highlands Ranch, AutoTrek Service Center is just 10 minutes north on Santa Fe. Highlands Ranch drivers trust us for brakes, oil changes, diagnostics, and more." },
  "englewood-co": { distance: "~4 miles", driveTime: "8 minutes", blurb: "Just 8 minutes from Englewood, AutoTrek gives you full-service auto repair without the dealership markup. Honest estimates, same-day service, no runaround." },
  "lakewood-co": { distance: "~8 miles", driveTime: "15 minutes", blurb: "Lakewood drivers make the short trip to AutoTrek for the same reason: honest mechanics who explain what's wrong, give you a real quote, and fix it right." },
  "centennial-co": { distance: "~6 miles", driveTime: "12 minutes", blurb: "From Centennial, AutoTrek is a quick drive on Broadway or Santa Fe. We've served Centennial drivers with transparent, quality auto repair since day one." },
}

const FEATURED_SERVICES = services.slice(0, 6)

export default function AreaPage({ params }: { params: { slug: string } }) {
  const area = areas.find((a) => a.slug === params.slug)
  if (!area) notFound()

  const content = AREA_CONTENT[area.slug] || { distance: "nearby", driveTime: "a short drive", blurb: `AutoTrek Service Center serves drivers from ${area.name} with honest, expert auto repair in Littleton, CO.` }

  const schema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": "AutoTrek Service Center",
    "areaServed": area.name,
    "telephone": "+13033283356",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "8161 S Grant Way",
      "addressLocality": "Littleton",
      "addressRegion": "CO",
      "postalCode": "80122"
    }
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0f1a0f] py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src="/images/hero-mechanic.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4">
          <nav className="flex items-center gap-2 text-white/50 text-sm mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/#areas" className="hover:text-white">Service Areas</Link>
            <span>/</span>
            <span className="text-white">{area.name}</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-[#2d6a2d] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mb-6">
            {content.distance} · {content.driveTime} away
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tight mb-6">
            Auto Repair<br />Near <span style={{ color: "#c0392b" }}>{area.name}</span>
          </h1>
          <p className="text-white/70 text-xl max-w-2xl leading-relaxed mb-8">
            {content.blurb}
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={siteConfig.phoneHref}
              className="bg-[#D32F2F] hover:bg-[#b71c1c] text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:-translate-y-0.5">
              Call: {siteConfig.phoneDisplay}
            </a>
            <Link href="/contact"
              className="border-2 border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:-translate-y-0.5">
              Schedule Service
            </Link>
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <ScrollReveal direction="left">
              <div>
                <h2 className="text-3xl font-black tracking-tight mb-6">
                  Your trusted shop<br />
                  <span style={{ color: "#2d6a2d" }}>near {area.name}.</span>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  AutoTrek Service Center is located at 8161 S Grant Way in Littleton — just {content.driveTime} from {area.name}. We serve drivers from across the south Denver metro area with honest diagnostics, transparent pricing, and same-day service on most repairs.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Every vehicle that comes through our doors gets a complimentary full-vehicle safety inspection — because we believe you deserve to know the true condition of your car, not just the symptom you came in for.
                </p>
                <div className="space-y-3">
                  {["✓ Written quote before any work begins", "✓ ASE-certified technicians", "✓ Free safety inspection every visit", "✓ Same-day service most repairs", "✓ Domestic & foreign vehicles"].map(t => (
                    <div key={t} className="flex items-center gap-2 text-gray-700 text-sm font-medium">{t}</div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3075.5707442494795!2d-104.98765402375868!3d39.56928550678116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c839b6e73ec17%3A0xe6e27082d266b0cb!2sAutoTrek%20Member%20Service!5e0!3m2!1sen!2sus!4v1773708898576!5m2!1sen!2sus"
                  width="100%" height="320"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`AutoTrek Service Center near ${area.name}`}
                />
              </div>
              <div className="mt-4 bg-[#f8faf8] rounded-xl p-4 text-sm text-gray-600 space-y-1">
                <p className="font-bold text-gray-900">AutoTrek Service Center</p>
                <p>{siteConfig.address}</p>
                <p>{siteConfig.hours}</p>
                <a href={siteConfig.phoneHref} className="text-[#D32F2F] font-bold hover:underline">{siteConfig.phoneDisplay}</a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#f8faf8] py-16">
        <div className="mx-auto max-w-6xl px-4">
          <ScrollReveal>
            <h2 className="text-2xl font-black mb-8">Services near {area.name}</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {FEATURED_SERVICES.map((s, i) => (
              <ScrollReveal key={s.slug} delay={i * 0.05}>
                <Link href={`/services/${s.slug}`}
                  className="group block bg-white rounded-xl border border-gray-100 p-4 hover:-translate-y-1 transition-all hover:shadow-md">
                  <p className="font-semibold text-gray-900 text-sm group-hover:text-[#2d6a2d] transition-colors mb-1">{s.name}</p>
                  <p className="text-xs text-gray-400 line-clamp-2">{s.short}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/services" className="text-[#2d6a2d] font-bold hover:underline">View all 22 services →</Link>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </div>
  )
}
