import Link from "next/link";

const bookingUrl = "https://calendly.com/fullbaymedia/free-diag-call";

export default function LocalSeoAiSearchPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 text-white md:px-10">
      <Link href="/" className="text-cyan-200 hover:text-cyan-100">← Back to Home</Link>
      <h1 className="mt-6 font-display text-4xl font-semibold md:text-5xl">Google + AI Search Visibility</h1>
      <p className="mt-4 text-white/80">Drivers search in Google and AI tools now. Our Google + AI Search Visibility method optimizes for both discovery paths.</p>

      <section className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
          <h2 className="font-display text-xl font-semibold">Who It’s For</h2>
          <p className="mt-2 text-white/80">Shops that want more qualified local leads and stronger search visibility in changing search behavior.</p>
        </div>
        <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
          <h2 className="font-display text-xl font-semibold">Expected Timeline</h2>
          <p className="mt-2 text-white/80">Technical and on-page gains in 2–4 weeks. Stronger ranking momentum in 60–120 days.</p>
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-white/15 bg-white/5 p-5">
        <h2 className="font-display text-xl font-semibold">What’s Included (Deliverables)</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-white/80">
          <li>Local keyword mapping and intent strategy document</li>
          <li>On-page SEO structure and internal linking implementation</li>
          <li>AI visibility/entity optimization pass for retrievability</li>
          <li>Service + city content update plan with priority roadmap</li>
          <li>Monthly visibility report (Google + AI discovery signals)</li>
        </ul>
      </section>

      <section className="mt-8 rounded-2xl border border-white/15 bg-white/5 p-5">
        <h2 className="font-display text-xl font-semibold">FAQ</h2>
        <p className="mt-3 text-white/80"><strong>Is AI search really important now?</strong> Yes. More users ask AI tools for recommendations before they click traditional results.</p>
        <p className="mt-3 text-white/80"><strong>Do you do content too?</strong> Yes. We build content that supports both ranking and conversion.</p>
      </section>

      <section className="mt-8 rounded-2xl border border-white/15 bg-white/5 p-5">
        <h2 className="font-display text-xl font-semibold">Expected Outcomes (30 / 60 / 90 Days)</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-white/80">
          <li><strong>30 days:</strong> Technical visibility fixes and local relevance foundations live.</li>
          <li><strong>60 days:</strong> Better rankings and stronger discovery in Google and AI surfaces.</li>
          <li><strong>90 days:</strong> More consistent local lead flow and measurable search share gains.</li>
        </ul>
      </section>

      <a href={bookingUrl} className="mt-10 inline-flex rounded-full bg-gradient-to-r from-cyan-300 to-violet-300 px-7 py-3 text-sm font-bold text-[#081022]">Book Your Free Diag Call</a>
    </main>
  );
}
