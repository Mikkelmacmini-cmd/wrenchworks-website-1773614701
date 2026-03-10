import Link from "next/link";

const bookingUrl = "https://calendly.com/fullbaymedia/free-diag-call";

export default function GoogleBusinessProfilePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 text-white md:px-10">
      <Link href="/" className="text-cyan-200 hover:text-cyan-100">← Back to Home</Link>
      <h1 className="mt-6 font-display text-4xl font-semibold md:text-5xl">Google Business Profile</h1>
      <p className="mt-4 text-white/80">Your Google Business Profile is your first impression on Maps. If it is weak, leads go elsewhere.</p>

      <section className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
          <h2 className="font-display text-xl font-semibold">Who It’s For</h2>
          <p className="mt-2 text-white/80">Shops with low map visibility, weak photos, poor category setup, or inconsistent review flow.</p>
        </div>
        <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
          <h2 className="font-display text-xl font-semibold">Expected Timeline</h2>
          <p className="mt-2 text-white/80">Initial optimization in 7–14 days. Ongoing growth from review and post cadence in 30–60 days.</p>
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-white/15 bg-white/5 p-5">
        <h2 className="font-display text-xl font-semibold">What’s Included</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-white/80">
          <li>Primary/secondary category strategy</li>
          <li>Services, products, and geo relevance tuning</li>
          <li>Photo and post optimization plan</li>
          <li>Review acquisition and response workflow</li>
        </ul>
      </section>

      <section className="mt-8 rounded-2xl border border-white/15 bg-white/5 p-5">
        <h2 className="font-display text-xl font-semibold">FAQ</h2>
        <p className="mt-3 text-white/80"><strong>How fast can rankings improve?</strong> Some profiles move in weeks, but consistency over 60–90 days creates durable gains.</p>
        <p className="mt-3 text-white/80"><strong>Do reviews matter that much?</strong> Yes. They influence clicks, trust, and map pack performance.</p>
      </section>

      <section className="mt-8 rounded-2xl border border-white/15 bg-white/5 p-5">
        <h2 className="font-display text-xl font-semibold">Expected Outcomes (30 / 60 / 90 Days)</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-white/80">
          <li><strong>30 days:</strong> Profile cleanup complete, category and service relevance improved.</li>
          <li><strong>60 days:</strong> Better map visibility and stronger call/route engagement trends.</li>
          <li><strong>90 days:</strong> More consistent lead flow from Maps and stronger review momentum.</li>
        </ul>
      </section>

      <a href={bookingUrl} className="mt-10 inline-flex rounded-full bg-gradient-to-r from-cyan-300 to-violet-300 px-7 py-3 text-sm font-bold text-[#081022]">Book Your Free Diag Call</a>
    </main>
  );
}
