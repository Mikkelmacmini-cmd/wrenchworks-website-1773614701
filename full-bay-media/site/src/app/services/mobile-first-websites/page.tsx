import Link from "next/link";

const bookingUrl = "https://calendly.com/fullbaymedia/free-diag-call";

export default function MobileFirstWebsitesPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 text-white md:px-10">
      <Link href="/" className="text-cyan-200 hover:text-cyan-100">← Back to Home</Link>
      <h1 className="mt-6 font-display text-4xl font-semibold md:text-5xl">Mobile-First Websites</h1>
      <p className="mt-4 text-white/80">Most customers visit your site on mobile first. We make that first visit convert.</p>

      <section className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
          <h2 className="font-display text-xl font-semibold">Who It’s For</h2>
          <p className="mt-2 text-white/80">Shops with outdated websites, slow load times, weak calls-to-action, or poor mobile readability.</p>
        </div>
        <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
          <h2 className="font-display text-xl font-semibold">Expected Timeline</h2>
          <p className="mt-2 text-white/80">Fast refreshes in 2–3 weeks. Full site builds in 4–8 weeks depending on scope.</p>
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-white/15 bg-white/5 p-5">
        <h2 className="font-display text-xl font-semibold">What’s Included</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-white/80">
          <li>Mobile-first layout and UX strategy</li>
          <li>Fast page speed and technical clean-up</li>
          <li>Clear call, map, and booking conversion paths</li>
          <li>Service page architecture for SEO + conversion</li>
        </ul>
      </section>

      <section className="mt-8 rounded-2xl border border-white/15 bg-white/5 p-5">
        <h2 className="font-display text-xl font-semibold">FAQ</h2>
        <p className="mt-3 text-white/80"><strong>Can you keep our current branding?</strong> Yes. We can modernize layout without losing your brand identity.</p>
        <p className="mt-3 text-white/80"><strong>Will this help SEO too?</strong> Yes. Structure, speed, and content hierarchy directly support local rankings.</p>
      </section>

      <section className="mt-8 rounded-2xl border border-white/15 bg-white/5 p-5">
        <h2 className="font-display text-xl font-semibold">Expected Outcomes (30 / 60 / 90 Days)</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-white/80">
          <li><strong>30 days:</strong> Mobile UX fixes, speed gains, and stronger first impression.</li>
          <li><strong>60 days:</strong> More conversion actions (calls, clicks, directions) from site traffic.</li>
          <li><strong>90 days:</strong> Measurable lift in qualified leads and lower bounce rates.</li>
        </ul>
      </section>

      <a href={bookingUrl} className="mt-10 inline-flex rounded-full bg-gradient-to-r from-cyan-300 to-violet-300 px-7 py-3 text-sm font-bold text-[#081022]">Book Your Free Diag Call</a>
    </main>
  );
}
