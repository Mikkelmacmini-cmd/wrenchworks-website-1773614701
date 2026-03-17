import Link from "next/link"
import { services, areas, siteConfig } from "@/lib/site"
import { HeroSection } from "@/components/HeroSection"
import { StatsBar } from "@/components/StatsBar"
import { ScrollReveal } from "@/components/ScrollReveal"

export const metadata = {
  title: "Auto Repair in Littleton, CO | AutoTrek Service Center",
  description: "Trusted NAPA AutoCare Center in Littleton, CO. Honest auto repair for domestic and foreign vehicles. Call (303) 328-3356.",
  alternates: { canonical: "/" },
}

const FEATURED_SERVICES = [
  { slug: "ac-service-repair-littleton-co", name: "AC Service & Repair", icon: "/images/icons/ac-service.jpg", desc: "Stay cool with diagnostics, recharge, and AC component repair." },
  { slug: "brake-repair-service-littleton-co", name: "Brake Repair & Service", icon: "/images/icons/brake-service.jpg", desc: "Safe, responsive braking with full-system inspection and repair." },
  { slug: "check-engine-light-diagnostics-littleton-co", name: "Check Engine Light", icon: "/images/icons/check-engine.jpg", desc: "Accurate diagnostics to identify issues fast and fix them right." },
  { slug: "oil-fluid-changes-littleton-co", name: "Oil & Fluid Changes", icon: "/images/icons/oil-change.jpg", desc: "Protect engine life with timely oil and full fluid service." },
  { slug: "steering-suspension-littleton-co", name: "Steering & Suspension", icon: "/images/icons/steering-suspension.jpg", desc: "Restore control, comfort, and handling precision." },
  { slug: "tires-wheels-littleton-co", name: "Tires & Wheels", icon: "/images/icons/tires-wheels.jpg", desc: "Tire rotation, balancing, and full wheel service." },
  { slug: "minor-auto-service-littleton-co", name: "Battery Service", icon: "🔋", desc: "Battery testing, replacement, and charging system inspection." },
  { slug: "factory-recommended-major-service-littleton-co", name: "Tune-Up Service", icon: "⚙️", desc: "Spark plugs, filters, and full scheduled maintenance to keep you running smooth." },
]

const REVIEWS = [
  { stars: 5, text: "I spoke to Alan who got me in right away and fixed the issue in less than 2 hours. He was so nice and friendly, I felt like he was a family friend who fixed my car and not just some shady mechanic. I would 100% recommend this mechanic shop!", name: "Veronica P.", city: "Littleton" },
  { stars: 5, text: "Alan and his team are absolutely amazing! I have taken my car here multiple times and have received exceptional service every time.", name: "Alex G.", city: "Littleton" },
  { stars: 5, text: "Alan and his team was great! Reasonable price and honest! Also, he got me in quick. Highly recommend!", name: "Samara W.", city: "Littleton" },
  { stars: 5, text: "The team is very responsive and quick (but thorough) with their work. I dropped my car off for an engine replacement and it was ready within a week. Alan spoke with my warranty company to ensure costs were covered and updated me every step of the way. Very pleased.", name: "Aubree B.", city: "Littleton" },
  { stars: 5, text: "Had to have some work done on my car — they found some additional things wrong, but did a really fantastic job of getting me all taken care of.", name: "Namiko E.", city: "Littleton" },
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
                  Your Neighborhood<br /><span style={{ color: "#2d6a2d" }}>Mechanic.</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  Alan and his team run a tight ship — transparent quotes, no upselling, and every car gets a full safety inspection every single visit. No surprises. No pressure.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Dealer-quality work at independent shop prices, right here in Littleton. We&apos;ve got a comfortable waiting area and we move fast — most jobs same day.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {["✓ Full inspection every visit", "✓ Written quotes, you approve first", "✓ Same-day service most repairs", "✓ Comfortable waiting area"].map(b => (
                    <span key={b} className="bg-[#f0f7f0] text-[#2d6a2d] text-sm font-semibold px-3 py-1.5 rounded-full">{b}</span>
                  ))}
                </div>
                <Link href="/about" className="text-[#2d6a2d] font-bold hover:underline text-lg">
                  Meet the Team →
                </Link>
              </div>
            </ScrollReveal>

            {/* Google Maps */}
            <ScrollReveal direction="right">
              <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-xl h-full min-h-[420px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3075.5707442494795!2d-104.98765402375868!3d39.56928550678116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c839b6e73ec17%3A0xe6e27082d266b0cb!2sAutoTrek%20Member%20Service!5e0!3m2!1sen!2sus!4v1773708898576!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block', minHeight: '420px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="AutoTrek Service Center — 8161 S Grant Way, Littleton, CO"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. Services */}
      <section id="services" className="bg-[#f8faf8] py-24">
        <div className="mx-auto max-w-6xl px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
                What<strong style={{ color: "#c0392b" }}>.</strong> We<strong style={{ color: "#c0392b" }}>.</strong> Fix<strong style={{ color: "#c0392b" }}>.</strong>
              </h2>
              <p className="text-gray-600 text-lg max-w-xl mx-auto">
                From oil changes to engine rebuilds — if it rolls, we service it.
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
                  <div className="mb-4 flex justify-center">
                    {service.icon.startsWith("/")
                      ? <img src={service.icon} alt="" className="w-20 h-20 object-contain border-0 outline-none" style={{border:'none',outline:'none',boxShadow:'none'}} />
                      : <span className="text-4xl">{service.icon}</span>}
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-[#2d6a2d] transition-colors text-center">{service.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 text-center">{service.desc}</p>
                  <div className="text-center"><span className="text-[#2d6a2d] font-semibold text-sm group-hover:underline">Learn More →</span></div>
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
              { num: "04", title: "Back on the Road", desc: "Repairs done right by ASE-certified techs. Pick up and drive with confidence." },
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

      {/* 4.5 Inspection Promise */}
      <section className="bg-[#2d6a2d] py-12">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-1">Every Single Visit</p>
              <h3 className="text-2xl md:text-3xl font-black text-white">Free full-vehicle safety inspection.</h3>
              <p className="text-white/70 mt-1">We check every system — no extra charge, no obligation. You always know what&apos;s going on with your car.</p>
            </div>
            <a href={siteConfig.phoneHref} className="flex-shrink-0 bg-white text-[#2d6a2d] font-bold px-8 py-3.5 rounded-full hover:bg-gray-100 transition-all hover:-translate-y-0.5 whitespace-nowrap">
              Book a Visit
            </a>
          </div>
        </div>
      </section>

      {/* 5. Reviews */}
      <section id="reviews" className="bg-white py-24 overflow-hidden">
        <div className="mx-auto max-w-6xl px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
                What<strong style={{ color: "#c0392b" }}>.</strong> Drivers<strong style={{ color: "#c0392b" }}>.</strong> Say<strong style={{ color: "#c0392b" }}>.</strong>
              </h2>
              <p className="text-gray-600 text-lg">Real reviews from real customers.</p>
            </div>
          </ScrollReveal>
        </div>

        {/* Infinite scroll marquee */}
        <div className="relative w-full overflow-hidden">
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .marquee-track {
              display: flex;
              width: max-content;
              animation: marquee 30s linear infinite;
            }
            .marquee-track:hover {
              animation-play-state: paused;
            }
          `}</style>
          <div className="marquee-track">
            {[...REVIEWS, ...REVIEWS].map((review, i) => (
              <div key={i} className="w-80 flex-shrink-0 mx-3">
                <div className="bg-[#f8faf8] rounded-2xl p-6 border border-gray-100 h-full flex flex-col">
                  <StarRating count={review.stars} />
                  <p className="text-gray-700 mt-3 mb-4 leading-relaxed flex-1 text-sm">&ldquo;{review.text}&rdquo;</p>
                  <div className="text-sm font-bold text-gray-900">{review.name} <span className="text-gray-500 font-normal">— {review.city}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4">
          <ScrollReveal delay={0.4}>
            <div className="text-center mt-10">
              <a
                href={siteConfig.reviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#D32F2F] hover:bg-[#b71c1c] text-white font-bold px-8 py-4 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg"
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
                  src="/images/building-exterior.jpg"
                  alt="AutoTrek Service Center building in Littleton, CO"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
                  Colorado&apos;s Trusted<br />
                  <span style={{ color: "#2d6a2d" }}>Repair Shop.</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  AutoTrek Service Center has been serving the Littleton community with honest, expert auto repair. As a NAPA AutoCare Center, we hold ourselves to the highest standards of quality and service.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We work on domestic and foreign vehicles — whatever you drive, we can fix it.
                </p>
                <div className="flex flex-wrap gap-4 items-center">
                  <img src="/images/napa-autocare.jpg" alt="NAPA AutoCare Center" className="h-16 w-auto object-contain" />
                  <img src="/images/ase-certified.jpg" alt="ASE Certified" className="h-16 w-auto object-contain" />

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

      {/* 7.5 Pre-purchase CTA */}
      <section className="bg-[#f8faf8] py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="bg-[#0f1a0f] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-[#2d6a2d] font-bold uppercase tracking-widest text-xs mb-2">Buying a Used Car?</p>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-3">Don&apos;t skip the inspection.</h2>
              <p className="text-white/70 max-w-lg leading-relaxed">A pre-purchase inspection from AutoTrek can save you thousands. We check 50+ points on any vehicle before you hand over the money. Know exactly what you&apos;re buying.</p>
            </div>
            <div className="flex-shrink-0 flex flex-col gap-3">
              <a href={siteConfig.phoneHref}
                className="bg-[#D32F2F] hover:bg-[#b71c1c] text-white font-bold px-8 py-4 rounded-full transition-all hover:-translate-y-0.5 text-center whitespace-nowrap">
                Book an Inspection
              </a>
              <a href="/services/pre-purchase-inspection-littleton-co"
                className="border border-white/30 hover:border-white text-white/70 hover:text-white font-semibold px-8 py-3 rounded-full text-sm transition-all text-center whitespace-nowrap">
                Learn More →
              </a>
            </div>
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

      {/* Schema.org LocalBusiness */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "AutoRepair",
        "name": "AutoTrek Service Center",
        "image": "https://www.wrenchworksdigital.com/preview/autotrek-site/images/logo.jpg",
        "url": "https://www.wrenchworksdigital.com/preview/autotrek-site",
        "telephone": "+13033283356",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "8161 S Grant Way",
          "addressLocality": "Littleton",
          "addressRegion": "CO",
          "postalCode": "80122",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 39.5693,
          "longitude": -104.9877
        },
        "openingHoursSpecification": [{
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
          "opens": "09:00",
          "closes": "17:00"
        }],
        "priceRange": "$$",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.1",
          "reviewCount": "9"
        }
      })}} />
    </div>
  )
}
