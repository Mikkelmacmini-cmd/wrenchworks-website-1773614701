import Link from "next/link";

export default function AutomatedReviewSystemsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 text-white md:px-10">
      <Link href="/" className="text-cyan-200 hover:text-cyan-100">← Back to Home</Link>
      <h1 className="mt-6 font-display text-4xl font-semibold md:text-5xl">Automated Review Systems</h1>
      <p className="mt-6 text-white/80">
        Reviews are one of the strongest trust signals for local shops. Most teams know this, but do not
        have time to ask consistently.
      </p>
      <div className="mt-8 space-y-4 text-white/80">
        <p>We set up simple review requests that run automatically after approved jobs.</p>
        <p>We help filter the flow so happy customers are guided to leave public reviews.</p>
        <p>This builds stronger reputation over time without adding front-desk workload.</p>
      </div>
    </main>
  );
}
