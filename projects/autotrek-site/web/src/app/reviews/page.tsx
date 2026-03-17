import type { Metadata } from "next"
import { siteConfig } from "@/lib/site"
import { ScrollReveal } from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Customer Reviews | AutoTrek Service Center — Littleton, CO",
  description: "See what real customers say about AutoTrek Service Center in Littleton, CO. 4.1 stars on Google. Honest mechanics, fair pricing, same-day service.",
  alternates: { canonical: "/reviews" },
}

const REVIEWS = [
  {
    stars: 5,
    text: "I spoke to Alan who got me in right away and fixed the issue in less than 2 hours. He was so nice and friendly, I felt like he was a family friend who fixed my car and not just some shady mechanic. I would 100% recommend this mechanic shop!",
    name: "Veronica P.",
    city: "Littleton, CO",
    service: "General Repair"
  },
  {
    stars: 5,
    text: "Alan and his team are absolutely amazing! I have taken my car here multiple times and have received exceptional service every time.",
    name: "Alex G.",
    city: "Littleton, CO",
    service: "Multiple Services"
  },
  {
    stars: 5,
    text: "Alan and his team was great! Reasonable price and honest! Also, he got me in quick. Highly recommend!",
    name: "Samara W.",
    city: "Littleton, CO",
    service: "General Repair"
  },
  {
    stars: 5,
    text: "The team is very responsive and quick (but thorough) with their work. I dropped my car off for an engine replacement and it was ready within a week. Alan spoke with my warranty company to ensure costs were covered and updated me every step of the way. Very pleased.",
    name: "Aubree B.",
    city: "Littleton, CO",
    service: "Engine Replacement"
  },
  {
    stars: 5,
    text: "Had to have some work done on my car — they found some additional things wrong, but did a really fantastic job of getting me all taken care of.",
    name: "Namiko E.",
    city: "Littleton, CO",
    service: "Auto Repair"
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < count ? "text-[#D32F2F]" : "text-gray-200"} style={{ fontSize: "18px" }}>★</span>
      ))}
    </div>
  )
}

export default function ReviewsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0f1a0f] py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src="/images/building-exterior.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-[#2d6a2d] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest mb-6">
            Google Reviews
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tight mb-4">
            What<strong style={{ color: "#c0392b" }}>.</strong> Drivers<strong style={{ color: "#c0392b" }}>.</strong> Say<strong style={{ color: "#c0392b" }}>.</strong>
          </h1>
          <p className="text-white/70 text-xl max-w-xl mx-auto leading-relaxed mb-6">
            Real reviews from real customers in Littleton and the Denver metro area.
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => <span key={i} className="text-[#D32F2F] text-2xl">★</span>)}
            </div>
            <span className="text-white font-bold text-xl">4.1</span>
            <span className="text-white/50">· Google Rating</span>
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {REVIEWS.map((review, i) => (
              <ScrollReveal key={review.name} delay={i * 0.08}>
                <div className="bg-[#f8faf8] rounded-2xl p-6 border border-gray-100 hover:-translate-y-1 transition-transform hover:shadow-lg h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <StarRating count={review.stars} />
                    <span className="text-xs text-gray-400 bg-white border border-gray-100 px-2 py-1 rounded-full">{review.service}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed flex-1 mb-4">&ldquo;{review.text}&rdquo;</p>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{review.name}</p>
                    <p className="text-gray-400 text-xs">{review.city}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <div className="text-center">
              <p className="text-gray-500 mb-4">See all 9 reviews on Google</p>
              <a
                href={siteConfig.reviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#D32F2F] hover:bg-[#b71c1c] text-white font-bold px-8 py-4 rounded-full transition-all hover:-translate-y-0.5"
              >
                Read All Reviews on Google →
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Leave a review CTA */}
      <section className="bg-[#2d6a2d] py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-black text-white mb-4">Had a great experience?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-lg mx-auto">
              Your review helps other Littleton drivers find an honest mechanic. Takes 30 seconds.
            </p>
            <a
              href={siteConfig.reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-[#2d6a2d] font-bold px-8 py-4 rounded-full transition-all hover:-translate-y-0.5"
            >
              ★ Leave a Google Review
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Review schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "AutoTrek Service Center",
        "review": REVIEWS.map(r => ({
          "@type": "Review",
          "reviewRating": { "@type": "Rating", "ratingValue": r.stars },
          "author": { "@type": "Person", "name": r.name },
          "reviewBody": r.text
        }))
      })}} />
    </div>
  )
}
