import type { Metadata } from "next"
import Link from "next/link"
import { services, siteConfig } from "@/lib/site"
import { ScrollReveal } from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Auto Repair Services in Littleton, CO | AutoTrek Service Center",
  description: "Full-service auto repair in Littleton, CO — brakes, oil changes, engine diagnostics, AC, transmission, alignment & more. ASE-certified technicians. Call (303) 328-3356.",
  alternates: { canonical: "/services" },
}

const SERVICE_CATEGORIES = [
  {
    name: "Engine & Diagnostics",
    icon: "🔧",
    desc: "Accurate diagnostics and expert engine repair that fix the actual problem — not just the symptoms.",
    slugs: ["check-engine-light-diagnostics-littleton-co", "complete-auto-repair-littleton-co", "foreign-auto-repair-littleton-co", "domestic-auto-repair-littleton-co", "timing-belt-repair-littleton-co"],
  },
  {
    name: "Brakes & Safety",
    icon: "🛑",
    desc: "Your brakes are your most critical safety system. We inspect, repair, and replace the full system.",
    slugs: ["brake-repair-service-littleton-co"],
  },
  {
    name: "Routine Maintenance",
    icon: "📋",
    desc: "Stay ahead of breakdowns. We follow your manufacturer's schedule and tailor it to Colorado driving.",
    slugs: ["oil-fluid-changes-littleton-co", "preventative-maintenance-littleton-co", "factory-recommended-major-service-littleton-co", "minor-auto-service-littleton-co", "maintenance-lights-littleton-co", "dealer-service-alternative-littleton-co"],
  },
  {
    name: "Steering, Suspension & Alignment",
    icon: "🔩",
    desc: "Restore handling, comfort, and tire life with precision suspension and alignment service.",
    slugs: ["steering-suspension-littleton-co", "wheel-alignment-littleton-co"],
  },
  {
    name: "Transmission & Drivetrain",
    icon: "⚙️",
    desc: "From fluid service to complex repair — we diagnose transmission problems accurately before recommending any work.",
    slugs: ["transmission-repair-littleton-co", "4wd-light-inspection-littleton-co", "4x4-auto-repair-littleton-co"],
  },
  {
    name: "Tires & Wheels",
    icon: "🔄",
    desc: "Rotation, balancing, tread inspection, and pressure service to extend tire life and keep you safe.",
    slugs: ["tires-wheels-littleton-co"],
  },
  {
    name: "Heating & Air Conditioning",
    icon: "❄️",
    desc: "Colorado summers and winters demand a working climate system. We diagnose and fix the full HVAC system.",
    slugs: ["ac-service-repair-littleton-co"],
  },
  {
    name: "Specialty & Fleet",
    icon: "🚐",
    desc: "Pre-purchase inspections, fleet maintenance, and commercial vehicle service.",
    slugs: ["pre-purchase-inspection-littleton-co", "fleet-repair-service-littleton-co"],
  },
]

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#0f1a0f] py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src="/images/hero-mechanic.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-[#2d6a2d] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mb-6">
            Littleton, CO — ASE Certified
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tight mb-6">
            What<strong style={{ color: "#c0392b" }}>.</strong> We<strong style={{ color: "#c0392b" }}>.</strong> Fix<strong style={{ color: "#c0392b" }}>.</strong>
          </h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto leading-relaxed mb-8">
            22 services under one roof — from a $35 oil change to a full engine repair. Every visit includes a free safety inspection. You approve every repair before we start.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href={siteConfig.phoneHref}
              className="inline-flex items-center gap-2 bg-[#D32F2F] hover:bg-[#b71c1c] text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:-translate-y-0.5">
              Call: {siteConfig.phoneDisplay}
            </a>
            <Link href="/contact"
              className="border-2 border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:-translate-y-0.5">
              Schedule Online
            </Link>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-[#2d6a2d] py-5">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap gap-6 justify-center text-white text-sm font-semibold">
            {["✓ Free full-vehicle inspection every visit", "✓ Written quote before any work begins", "✓ ASE-certified technicians", "✓ Same-day service most repairs", "✓ Domestic & foreign vehicles"].map(t => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
                Browse by Service Category
              </h2>
              <p className="text-gray-600 text-lg">Click any category to see individual service pages.</p>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {SERVICE_CATEGORIES.map((cat, ci) => {
              const catServices = services.filter(s => cat.slugs.includes(s.slug))
              if (catServices.length === 0) return null
              return (
                <ScrollReveal key={cat.name} delay={ci * 0.05}>
                  <div className="border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                    {/* Category header */}
                    <div className="bg-[#f8faf8] px-6 py-4 flex items-start gap-4">
                      <span className="text-2xl flex-shrink-0">{cat.icon}</span>
                      <div>
                        <h2 className="font-black text-gray-900 text-lg">{cat.name}</h2>
                        <p className="text-gray-500 text-sm mt-0.5">{cat.desc}</p>
                      </div>
                    </div>
                    {/* Services in category */}
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 divide-x divide-y divide-gray-100 bg-white">
                      {catServices.map(s => (
                        <Link key={s.slug} href={`/services/${s.slug}`}
                          className="group px-5 py-4 hover:bg-[#f0f7f0] transition-colors flex items-center justify-between gap-2">
                          <div>
                            <p className="font-semibold text-gray-900 text-sm group-hover:text-[#2d6a2d] transition-colors">{s.name}</p>
                            <p className="text-xs text-gray-400 mt-0.5 line-clamp-1">{s.short}</p>
                          </div>
                          <span className="text-[#2d6a2d] opacity-0 group-hover:opacity-100 transition-opacity text-sm flex-shrink-0">→</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Full flat list (SEO) */}
      <section className="bg-[#f8faf8] py-16">
        <div className="mx-auto max-w-6xl px-4">
          <ScrollReveal>
            <h2 className="text-2xl font-black mb-8">All Services — Littleton, CO</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {services.map((s, i) => (
              <ScrollReveal key={s.slug} delay={(i % 8) * 0.03}>
                <Link href={`/services/${s.slug}`}
                  className="group block text-sm text-gray-600 hover:text-[#2d6a2d] font-medium py-1.5 transition-colors">
                  {s.name}
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0f1a0f] py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Not sure what you need?<br />
              <span style={{ color: "#2d6a2d" }}>Just call us.</span>
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-lg mx-auto">
              Describe what you&apos;re experiencing and we&apos;ll tell you what it might be — no appointment needed for a conversation.
            </p>
            <a href={siteConfig.phoneHref}
              className="inline-flex items-center gap-2 bg-[#D32F2F] hover:bg-[#b71c1c] text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:-translate-y-0.5">
              Call {siteConfig.phoneDisplay}
            </a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
