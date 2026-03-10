import Link from "next/link";

const bookingUrl = "https://calendly.com/fullbaymedia/free-diag-call";

export default function AutomatedReviewSystemsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 text-white md:px-10">
      <Link href="/" className="text-cyan-200 hover:text-cyan-100">← Back to Home</Link>
      <h1 className="mt-6 font-display text-4xl font-semibold md:text-5xl">Automated Review Systems</h1>
      <p className="mt-4 text-white/80">Consistent review growth builds trust and drives more calls from local customers.</p>

      <section className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
          <h2 className="font-display text-xl font-semibold">Who It’s For</h2>
          <p className="mt-2 text-white/80">Shops with inconsistent review requests or teams too busy to follow up manually after every job.</p>
        </div>
        <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
          <h2 className="font-display text-xl font-semibold">Expected Timeline</h2>
          <p className="mt-2 text-white/80">Core system setup in 1–2 weeks, with review growth compounding month over month.</p>
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-white/15 bg-white/5 p-5">
        <h2 className="font-display text-xl font-semibold">What’s Included</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-white/80">
          <li>Post-service review flow setup</li>
          <li>SMS/email request sequencing</li>
          <li>Response and escalation guidance</li>
          <li>Reporting on review volume and rating trend</li>
        </ul>
      </section>

      <section className="mt-8 rounded-2xl border border-white/15 bg-white/5 p-5">
        <h2 className="font-display text-xl font-semibold">FAQ</h2>
        <p className="mt-3 text-white/80"><strong>Will this add work for my team?</strong> Very little. The system handles most requests automatically.</p>
        <p className="mt-3 text-white/80"><strong>Can we pause or adjust requests?</strong> Yes. You keep control over timing, message style, and frequency.</p>
      </section>

      <section className="mt-8 rounded-2xl border border-white/15 bg-white/5 p-5">
        <h2 className="font-display text-xl font-semibold">Expected Outcomes (30 / 60 / 90 Days)</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-white/80">
          <li><strong>30 days:</strong> Automated request system configured and live.</li>
          <li><strong>60 days:</strong> Review velocity and average rating consistency improve.</li>
          <li><strong>90 days:</strong> Stronger reputation moat and higher local conversion trust.</li>
        </ul>
      </section>

      <a href={bookingUrl} className="mt-10 inline-flex rounded-full bg-gradient-to-r from-cyan-300 to-violet-300 px-7 py-3 text-sm font-bold text-[#081022]">Book Your Free Diag Call</a>
    </main>
  );
}
