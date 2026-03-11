import Link from "next/link";

const bookingUrl = "https://calendly.com/fullbaymedia/free-diag-call";

export default function CollisionShopMarketingPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 text-white md:px-10">
      <Link href="/" className="text-cyan-200 hover:text-cyan-100">← Back to Home</Link>
      <h1 className="mt-6 font-display text-4xl font-semibold md:text-5xl">Collision Shop Marketing</h1>
      <p className="mt-4 text-white/80">
        Collision shops have different economics than general repair. We build marketing around DRP mix,
        estimator pipeline health, high-ticket job flow, and local map visibility.
      </p>

      <section className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
          <h2 className="font-display text-xl font-semibold">Collision-Specific Pains We Solve</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-white/80">
            <li>Unstable DRP / non-DRP mix</li>
            <li>Estimator pipeline gaps and bottlenecks</li>
            <li>High-ticket job inconsistency month to month</li>
            <li>Weak Google Maps visibility vs local competitors</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
          <h2 className="font-display text-xl font-semibold">Expected Timeline</h2>
          <p className="mt-2 text-white/80">First visibility and lead flow improvements in 30–60 days. Stronger pipeline stability in 60–120 days.</p>
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-white/15 bg-white/5 p-5">
        <h2 className="font-display text-xl font-semibold">What’s Included</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-white/80">
          <li>Collision-focused service page architecture</li>
          <li>Google Business Profile optimization for collision intent</li>
          <li>Local SEO + AI discovery optimization</li>
          <li>Conversion flow tuned for estimate requests</li>
        </ul>
      </section>

      <a href={bookingUrl} className="mt-10 inline-flex rounded-full bg-gradient-to-r from-cyan-300 to-violet-300 px-7 py-3 text-sm font-bold text-[#081022]">Book Your Free Diag Call</a>
    </main>
  );
}
