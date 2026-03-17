import type { Metadata } from "next"
import Link from "next/link"
import { siteConfig } from "@/lib/site"
import { ScrollReveal } from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "About AutoTrek Service Center | Littleton, CO",
  description: "Learn about AutoTrek Service Center — Littleton's trusted NAPA AutoCare shop. Honest pricing and expert auto repair.",
  alternates: { canonical: "/about" },
}

const VALUES = [
  { icon: "💬", title: "Transparent Pricing", desc: "You get a full written quote before any work begins. No surprises, no pressure." },
  { icon: "🔬", title: "Expert Technicians", desc: "Our team is trained on domestic and foreign vehicles — every make and model." },
  { icon: "🏅", title: "NAPA Backed", desc: "As a NAPA AutoCare Center, every repair meets the highest standards of quality." },
  { icon: "🏘️", title: "Community First", desc: "We&apos;re locally owned and invested in the Littleton community — not a franchise or chain." },
]

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0f1a0f] py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/images/about-team.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-[#2d6a2d] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mb-6">
            NAPA AutoCare Center
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tight mb-6">
            Littleton&apos;s Auto Repair<br />
            <span style={{ color: "#c0392b" }}>Done Right.</span>
          </h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto leading-relaxed">
            We&apos;re a local auto repair shop committed to honest diagnostics, transparent pricing, and repairs that last.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/about-team.jpg"
                  alt="AutoTrek team and shop"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="space-y-6">
                <h2 className="text-4xl font-black tracking-tight leading-tight">
                  Your Local Shop,<br />
                  <span style={{ color: "#2d6a2d" }}>Not a Chain.</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  AutoTrek Service Center is independently owned and operated in Littleton, Colorado. We built this business on a simple principle: treat every customer the way we&apos;d want to be treated — with honesty, respect, and real expertise.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  As a NAPA AutoCare Center, we have access to professional-grade parts and diagnostic tools, giving you dealer-level service at independent-shop prices.
                </p>
                <div className="bg-[#f8faf8] border border-[#2d6a2d]/20 rounded-xl p-4 text-sm text-gray-700">
                  <p className="font-bold text-[#2d6a2d] mb-1">4.1★ Google Rating</p>
                  <p>Rated by real customers in Littleton and surrounding communities.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#f8faf8] py-24">
        <div className="mx-auto max-w-6xl px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
                What We Stand<strong style={{ color: "#c0392b" }}>.</strong> For<strong style={{ color: "#c0392b" }}>.</strong>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {VALUES.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl border border-gray-100 p-8 hover:-translate-y-1 transition-transform hover:shadow-lg">
                  <div className="text-3xl mb-4">{v.icon}</div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">{v.title}</h3>
                  <p className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: v.desc }} />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* NAPA callout */}
      <section className="bg-[#2d6a2d] py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <ScrollReveal>
            <div className="text-5xl mb-4">🏅</div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">NAPA AutoCare Certified</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed mb-8">
              AutoTrek is a certified NAPA AutoCare Center, which means we meet strict standards for equipment, technician training, and customer service — plus every repair meets strict quality standards.
            </p>
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-[#2d6a2d] font-bold px-8 py-4 rounded-full text-lg transition-all hover:-translate-y-0.5"
            >
              Call Us Today: {siteConfig.phoneDisplay}
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Shop exterior */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal direction="left">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src="/images/shop-exterior.jpg" alt="AutoTrek shop exterior in Littleton" className="w-full h-64 object-cover" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src="/images/engine-work.jpg" alt="AutoTrek engine repair work" className="w-full h-64 object-cover" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f8faf8] py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-black tracking-tight mb-4">Ready to Schedule?</h2>
            <p className="text-gray-600 mb-8">Give us a call or schedule your service online.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={siteConfig.phoneHref}
                className="bg-[#c0392b] hover:bg-[#a93226] text-white font-bold px-8 py-4 rounded-full transition-all hover:-translate-y-0.5"
              >
                Call {siteConfig.phoneDisplay}
              </a>
              <Link
                href="/contact"
                className="border-2 border-[#2d6a2d] text-[#2d6a2d] hover:bg-[#2d6a2d] hover:text-white font-bold px-8 py-4 rounded-full transition-all hover:-translate-y-0.5"
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
