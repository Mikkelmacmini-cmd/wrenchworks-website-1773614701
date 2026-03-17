import type { Metadata } from "next"
import Link from "next/link"
import { siteConfig } from "@/lib/site"
import { ScrollReveal } from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "About AutoTrek Service Center | Littleton, CO",
  description: "Meet Alan and the AutoTrek team — your neighborhood mechanic in Littleton, CO. ASE-certified technicians, NAPA AutoCare Center, full inspection every visit. Call (303) 328-3356.",
  alternates: { canonical: "/about" },
}

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0f1a0f] py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/images/building-exterior.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <p className="text-[#2d6a2d] font-bold uppercase tracking-widest text-sm mb-4">Your Neighborhood Mechanic</p>
          <h1 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tight mb-6">
            Meet the<br />
            <span style={{ color: "#c0392b" }}>AutoTrek Team.</span>
          </h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto leading-relaxed">
            We&apos;re not a franchise. We&apos;re not a quick-lube chain. We&apos;re your neighbor — and we fix cars the right way.
          </p>
        </div>
      </section>

      {/* Alan's Story */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/hero-mechanic.jpg"
                  alt="Alan and the AutoTrek team working in the shop"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="space-y-6">
                <h2 className="text-4xl font-black tracking-tight leading-tight">
                  Honest work.<br />
                  <span style={{ color: "#2d6a2d" }}>Every car. Every time.</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Alan built AutoTrek on a simple idea: be the mechanic people actually trust. No upselling. No scare tactics. No surprise bills.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  When you bring your vehicle to AutoTrek, you talk to a real person who listens, diagnoses accurately, and explains what&apos;s going on in plain English. You get a written quote before any work begins. Nothing gets touched until you say go.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Every single visit includes a free full-vehicle safety inspection — not as a sales tactic, but because we believe you deserve to know the true condition of your car. If something can wait, we&apos;ll tell you. If it&apos;s critical, we&apos;ll explain why.
                </p>
                <div className="flex flex-wrap gap-4 items-center pt-2">
                  <img src="/images/napa-autocare.jpg" alt="NAPA AutoCare Center" className="h-14 w-auto object-contain" />
                  <img src="/images/ase-certified.jpg" alt="ASE Certified Technicians" className="h-14 w-auto object-contain" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="bg-[#f8faf8] py-24">
        <div className="mx-auto max-w-6xl px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
                What<strong style={{ color: "#c0392b" }}>.</strong> Makes Us<strong style={{ color: "#c0392b" }}>.</strong> Different<strong style={{ color: "#c0392b" }}>.</strong>
              </h2>
              <p className="text-gray-600 text-lg">The stuff that matters when you need your car fixed.</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🔍", title: "Full Inspection Every Visit", desc: "Every car gets a complimentary safety inspection. We check fluids, brakes, tires, belts, hoses, battery — the works. It's how we catch small problems before they become big ones." },
              { icon: "📝", title: "Written Quotes, You Approve First", desc: "We give you a detailed written estimate before touching anything. We'll tell you what's critical, what can wait, and what it costs. Zero pressure." },
              { icon: "💬", title: "Plain English, No Jargon", desc: "We explain what's wrong and why it matters — in words that make sense. If you have questions, we take the time to answer them." },
              { icon: "🏠", title: "Locally Owned, Community Invested", desc: "We live here. We work here. Our reputation is built on trust, not advertising budgets. When you come to AutoTrek, you're supporting a local business." },
              { icon: "🛠️", title: "ASE-Certified Technicians", desc: "Our team holds ASE certifications and stays current with ongoing training. We work on domestic, foreign, trucks, and SUVs — every make and model." },
              { icon: "⚡", title: "Same-Day Service, Most Repairs", desc: "We know your car is your lifeline. We work efficiently to diagnose, quote, and repair — getting you back on the road as fast as possible." },
            ].map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.08}>
                <div className="bg-white rounded-2xl border border-gray-100 p-6 hover:-translate-y-1 transition-transform hover:shadow-lg h-full">
                  <div className="text-3xl mb-3">{v.icon}</div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{v.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Shop */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black tracking-tight mb-4">
                Our<strong style={{ color: "#c0392b" }}>.</strong> Shop<strong style={{ color: "#c0392b" }}>.</strong>
              </h2>
              <p className="text-gray-600 text-lg">8161 S Grant Way, Littleton, CO 80122</p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            <ScrollReveal direction="left">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src="/images/building-exterior.jpg" alt="AutoTrek Service Center building in Littleton, CO" className="w-full h-72 object-cover" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="rounded-2xl overflow-hidden shadow-xl h-72">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3075.5707442494795!2d-104.98765402375868!3d39.56928550678116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c839b6e73ec17%3A0xe6e27082d266b0cb!2sAutoTrek%20Member%20Service!5e0!3m2!1sen!2sus!4v1773708898576!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="AutoTrek Service Center location"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="bg-[#0f1a0f] py-16">
        <div className="mx-auto max-w-6xl px-4">
          <ScrollReveal>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-black text-white mb-2">Proudly Serving</h2>
              <p className="text-white/60">Littleton and the greater Denver metro area.</p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              {["Littleton", "Highlands Ranch", "Englewood", "Centennial", "Lakewood", "Ken Caryl", "Columbine", "Bow Mar", "South Denver"].map(city => (
                <span key={city} className="bg-white/10 text-white/80 text-sm font-semibold px-4 py-2 rounded-full">{city}</span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <ScrollReveal>
            <h2 className="text-4xl font-black tracking-tight mb-4">
              Ready to meet your<br />
              <span style={{ color: "#2d6a2d" }}>new mechanic?</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8">Call us or stop by. No appointment needed for a conversation.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={siteConfig.phoneHref}
                className="bg-[#D32F2F] hover:bg-[#b71c1c] text-white font-bold px-8 py-4 rounded-full transition-all hover:-translate-y-0.5"
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
