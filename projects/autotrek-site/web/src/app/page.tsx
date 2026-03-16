import Link from "next/link"
import { services, areas, siteConfig } from "@/lib/site"
import { HeroSection } from "@/components/HeroSection"
import { StatsBar } from "@/components/StatsBar"
import { ScrollReveal } from "@/components/ScrollReveal"

export const metadata = {
  title: "Auto Repair in Littleton, CO | AutoTrek Service Center",
  description: "Trusted NAPA AutoCare Center in Littleton, CO. Honest auto repair for domestic, foreign, EV & hybrid vehicles. 36-Month/36,000-Mile warranty. Call (303) 328-3356.",
  alternates: { canonical: "/" },
}

const FEATURED_SERVICES = [
  { slug: "ac-service-repair-littleton-co", name: "AC Service & Repair", icon: "❄️", desc: "Stay cool with diagnostics, recharge, and AC component repair." },
  { slug: "brake-repair-service-littleton-co", name: "Brake Repair & Service", icon: "🛑", desc: "Safe, responsive braking with full-system inspection and repair." },
  { slug: "check-engine-light-diagnostics-littleton-co", name: "Check Engine Light", icon: "🔍", desc: "Accurate diagnostics to identify issues fast and fix them right." },
  { slug: "ev-hybrid-repair-littleton-co", name: "EV & Hybrid Repair", icon: "⚡", desc: "Specialized service for hybrid and electric vehicle systems." },
  { slug: "oil-fluid-changes-littleton-co", name: "Oil & Fluid Changes", icon: "🛢️", desc: "Protect engine life with timely oil and full fluid service." },
  { slug: "wheel-alignment-littleton-co", name: "Wheel Alignment", icon: "🎯", desc: "Improve tire life and handling with precise alignment." },
]

const REVIEWS = [
  { stars: 5, text: "These guys saved me from a $3,000 dealer quote. Found the actual issue in 20 minutes, fixed it for $280. Honest, fast, fair.", name: "Mike T.", city: "Littleton" },
  { stars: 5, text: "Brought in my hybrid and they knew exactly what they were doing. Most shops won't touch them. AutoTrek handled it no problem.", name: "Sarah K.", city: "Highlands Ranch" },
  { stars: 4, text: "Good honest shop. They showed me the worn parts before replacing anything. That transparency is rare. Will be my go-to.", name: "James R.", city: "Englewood" },
  { stars: 5, text: "Quick turnaround on brakes and rotors. In by 9, out by noon. Fair price, no upsells.", name: "Rachel M.", city: "Centennial" },
  { stars: 5, text: "NAPA certification matters — you get a real warranty. Fixed my AC perfectly, still blowing cold months later.", name: "David L.", city: "Littleton" },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 text-[#c0392b]">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < count ? "text-[#c0392b]" : "text-gray-300"}>★</span>
      ))}
    </div>
  )
}

export default function Home() {
  return (
    <div>
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Why AutoTrek */}
      <section id="about" className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
                  Honest<strong style={{ color: "#c0392b" }}>.</strong> Local<strong style={{ color: "#c0392b" }}>.</strong> Trusted<strong style={{ color: "#c0392b" }}>.</strong>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  We&apos;ve been serving Littleton drivers with transparent, dealer-quality service without the dealer markup.
                </p>
                <Link href="/about" className="text-[#2d6a2d] font-bold hover:underline text-lg">
                  Learn About Us →
                </Link>
              </div>
            </ScrollReveal>

            <div className="space-y-4">
              {[
                { icon: "🔧", title: "No Surprise Bills", desc: "You approve every repair before we start. Always. No hidden fees, no last-minute additions." },
                { icon: "⚡", title: "EV & Hybrid Experts", desc: "Most shops turn away hybrids. We specialize in them — EV, plug-in hybrid, and traditional hybrid." },
                { icon: "🛡️", title: "36k Warranty", desc: "Every qualifying repair backed by the NAPA 36-Month/36,000-Mile nationwide guarantee." },
              ].map((card, i) => (
                <ScrollReveal key={card.title} delay={i * 0.1}>
                  <div className="border border-gray-200 rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-200 hover:shadow-lg hover:border-[#2d6a2d]/30 group">
                    <div className="flex items-start gap-4">
                      <span className="text-2xl">{card.icon}</span>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900 mb-1 group-hover:text-[#2d6a2d] transition-colors">{card.title}</h3>
                        <p className="text-gray-600">{card.desc}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services */}
      <section id="services" className="bg-[#f8faf8] py-24">
        <div className="mx-auto max-w-6xl px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
                What We<strong style={{ color: "#c0392b" }}>.</strong> Fix<strong style={{ color: "#c0392b" }}>.</strong>
              </h2>
              <p className="text-gray-600 text-lg max-w-xl mx-auto">
                From oil changes to EV battery systems — if it rolls, we service it.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {FEATURED_SERVICES.map((service, i) => (
              <ScrollReveal key={service.slug} delay={i * 0.07}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group block bg-white rounded-2xl border border-gray-200 p-6 hover:-translate-y-2 transition-all duration-200 hover:shadow-xl hover:border-t-[#2d6a2d] hover:border-t-4"
                >
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-[#2d6a2d] transition-colors">{service.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.desc}</p>
                  <span className="text-[#2d6a2d] font-semibold text-sm group-hover:underline">Learn More →</span>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <div className="text-center mt-10">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 border-2 border-[#2d6a2d] text-[#2d6a2d] font-bold px-8 py-4 rounded-full hover:bg-[#2d6a2d] hover:text-white transition-all hover:-translate-y-0.5"
              >
                View All 22 Services →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. How It Works */}
      <section className="bg-[#0f1a0f] py-24">
        <div className="mx-auto max-w-6xl px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
                How<strong style={{ color: "#c0392b" }}>.</strong> It<strong style={{ color: "#c0392b" }}>.</strong> Works<strong style={{ color: "#c0392b" }}>.</strong>
              </h2>
              <p className="text-white/60 text-lg">
                No jargon, no surprises. Just straightforward auto repair done right.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: "01", title: "Drop Off", desc: "Bring your vehicle in. We'll take down the details and get you checked in fast." },
              { num: "02", title: "Inspect & Quote", desc: "We diagnose the issue and give you a clear, written quote — no vague estimates." },
              { num: "03", title: "You Approve", desc: "Nothing gets touched until you say go. Zero pressure, complete transparency." },
              { num: "04", title: "Back on the Road", desc: "Repairs done right, backed by NAPA warranty. You're good to go." },
            ].map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 0.1}>
                <div className="text-center">
                  <div className="text-5xl font-black text-[#2d6a2d] mb-4 opacity-80">{step.num}</div>
                  <div className="w-px h-6 bg-[#2d6a2d]/40 mx-auto mb-4" />
                  <h3 className="text-white font-bold text-xl mb-2">{step.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Reviews */}
      <section id="reviews" className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
                What Drivers<strong style={{ color: "#c0392b" }}>.</strong> Say<strong style={{ color: "#c0392b" }}>.</strong>
              </h2>
              <p className="text-gray-600 text-lg">Real reviews from real Littleton drivers.</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((review, i) => (
              <ScrollReveal key={review.name} delay={i * 0.08}>
                <div className="bg-[#f8faf8] rounded-2xl p-6 border border-gray-100 hover:-translate-y-1 transition-transform duration-200 hover:shadow-lg h-full flex flex-col">
                  <StarRating count={review.stars} />
                  <p className="text-gray-700 mt-3 mb-4 leading-relaxed flex-1">&ldquo;{review.text}&rdquo;</p>
                  <div className="text-sm font-bold text-gray-900">{review.name} <span className="text-gray-500 font-normal">— {review.city}</span></div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <div className="text-center mt-10">
              <a
                href={siteConfig.reviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#c0392b] hover:bg-[#a93226] text-white font-bold px-8 py-4 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                Read All Reviews on Google →
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 6. Stats Bar */}
      <StatsBar />

      {/* 7. About Preview */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img
                  src="/images/mechanic-1.jpg"
                  alt="AutoTrek mechanic working on a vehicle"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
                  Littleton&apos;s Trusted<br />
                  <span style={{ color: "#2d6a2d" }}>Repair Shop.</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  AutoTrek Service Center has been serving the Littleton community with honest, expert auto repair. As a NAPA AutoCare Center, every qualifying repair is backed by a nationwide 36-Month/36,000-Mile warranty.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We work on domestic vehicles, foreign imports, EVs, and hybrids — whatever you drive, we can fix it.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="bg-[#f8faf8] border border-[#2d6a2d]/20 rounded-full px-4 py-2 text-sm font-semibold text-[#2d6a2d]">✓ NAPA Certified</div>
                  <div className="bg-[#f8faf8] border border-[#2d6a2d]/20 rounded-full px-4 py-2 text-sm font-semibold text-[#2d6a2d]">✓ 36k Warranty</div>
                  <div className="bg-[#f8faf8] border border-[#2d6a2d]/20 rounded-full px-4 py-2 text-sm font-semibold text-[#2d6a2d]">✓ EV & Hybrid</div>
                </div>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-[#2d6a2d] hover:bg-[#1a4a1a] text-white font-bold px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5"
                >
                  Meet Our Team →
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 8. Service Areas */}
      <section className="bg-[#f8faf8] py-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-8">
              Serving Littleton<strong style={{ color: "#c0392b" }}>.</strong> &amp; Beyond<strong style={{ color: "#c0392b" }}>.</strong>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap gap-3 justify-center">
              {areas.map((a) => (
                <Link
                  key={a.slug}
                  href={`/service-areas/${a.slug}`}
                  className="bg-white border-2 border-[#2d6a2d]/20 hover:border-[#2d6a2d] hover:bg-[#2d6a2d] hover:text-white text-[#2d6a2d] font-semibold rounded-full px-6 py-2.5 transition-all"
                >
                  {a.name}
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
