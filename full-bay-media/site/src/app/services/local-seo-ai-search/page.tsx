import Link from "next/link";

export default function LocalSeoAiSearchPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 text-white md:px-10">
      <Link href="/" className="text-cyan-200 hover:text-cyan-100">← Back to Home</Link>
      <h1 className="mt-6 font-display text-4xl font-semibold md:text-5xl">Local SEO + AI Search</h1>
      <p className="mt-6 text-white/80">
        Search behavior is changing. Drivers still use Google, but they also use AI search tools for
        recommendations and local options.
      </p>
      <div className="mt-8 space-y-4 text-white/80">
        <p>We optimize your site structure, local pages, metadata, and authority signals.</p>
        <p>We improve how your shop appears in both classic search and AI-generated answers.</p>
        <p>The goal is visibility where customers are searching today, not where they searched last year.</p>
      </div>
    </main>
  );
}
