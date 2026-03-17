import type { Metadata } from "next"
import Link from "next/link"
import { services, siteConfig } from "@/lib/site"
import { ScrollReveal } from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Auto Repair Services in Littleton, CO | AutoTrek Service Center",
  description: "22 auto repair services in Littleton, CO. From oil changes to brake service, AC, diagnostics & more. NAPA AutoCare Center.",
  alternates: { canonical: "/services" },
}

const SERVICE_ICONS: Record<string, string> = {
  "ac-service-repair-littleton-co": "❄️",
  "brake-repair-service-littleton-co": "🛑",
  "check-engine-light-diagnostics-littleton-co": "🔍",
  "ev-hybrid-repair-littleton-co": "⚡",
  "oil-fluid-changes-littleton-co": "🛢️",
  "wheel-alignment-littleton-co": "🎯",
  "steering-suspension-littleton-co": "🔩",
  "transmission-repair-littleton-co": "⚙️",
  "timing-belt-repair-littleton-co": "🔧",
  "pre-purchase-inspection-littleton-co": "🔎",
  "preventative-maintenance-littleton-co": "📋",
  "foreign-auto-repair-littleton-co": "🌍",
  "domestic-auto-repair-littleton-co": "🏠",
  "fleet-repair-service-littleton-co": "🚐",
  "4wd-light-inspection-littleton-co": "💡",
  "4x4-auto-repair-littleton-co": "🏔️",
  "tires-wheels-littleton-co": "🔄",
  "minor-auto-service-littleton-co": "✅",
  "factory-recommended-major-service-littleton-co": "📅",
  "dealer-service-alternative-littleton-co": "💰",
  "maintenance-lights-littleton-co": "⚠️",
  "complete-auto-repair-littleton-co": "🛠️",
}

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-[#0f1a0f] py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src="/images/hero-b.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-[#2d6a2d] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mb-6">
            Littleton, CO
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tight mb-6">
            22 Services.<br />
            <span style={{ color: "#c0392b" }}>One Shop.</span>
          </h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto leading-relaxed mb-8">
            From routine maintenance to complex diagnostics — expert service you can trust.
          </p>
          <a
            href={siteConfig.phoneHref}
            className="inline-flex items-center gap-2 bg-[#c0392b] hover:bg-[#a93226] text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:-translate-y-0.5"
          >
            Call to Schedule: {siteConfig.phoneDisplay}
          </a>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
                Everything Your Vehicle Needs
              </h2>
              <p className="text-gray-600 text-lg">Domestic and foreign — we work on it all.</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <ScrollReveal key={s.slug} delay={(i % 9) * 0.05}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group block bg-[#f8faf8] rounded-2xl border border-gray-100 p-6 hover:-translate-y-2 transition-all duration-200 hover:shadow-xl hover:border-[#2d6a2d]/30 hover:bg-white h-full"
                >
                  <div className="text-2xl mb-3">{SERVICE_ICONS[s.slug] || "🔧"}</div>
                  <h2 className="font-bold text-gray-900 mb-1.5 group-hover:text-[#2d6a2d] transition-colors">{s.name}</h2>
                  <p className="text-sm text-gray-500 leading-relaxed mb-3">{s.short}</p>
                  <span className="text-[#2d6a2d] text-sm font-semibold group-hover:underline">Learn More →</span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Warranty callout */}
      <section className="bg-[#2d6a2d] py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Every Repair. Backed by NAPA.</h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
              NAPA AutoCare certified — meet strict standards for equipment, training, and customer service.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={siteConfig.phoneHref}
                className="bg-white hover:bg-gray-100 text-[#2d6a2d] font-bold px-8 py-4 rounded-full transition-all hover:-translate-y-0.5"
              >
                Call {siteConfig.phoneDisplay}
              </a>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-[#2d6a2d] font-bold px-8 py-4 rounded-full transition-all hover:-translate-y-0.5"
              >
                Schedule Service
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
