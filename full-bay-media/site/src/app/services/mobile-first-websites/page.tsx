import Link from "next/link";

export default function MobileFirstWebsitesPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 text-white md:px-10">
      <Link href="/" className="text-cyan-200 hover:text-cyan-100">← Back to Home</Link>
      <h1 className="mt-6 font-display text-4xl font-semibold md:text-5xl">Mobile-First Websites</h1>
      <p className="mt-6 text-white/80">
        Most drivers see your website on a phone first. If it is slow, hard to read, or hard to use,
        you lose the lead before they call.
      </p>
      <div className="mt-8 space-y-4 text-white/80">
        <p>We build fast, clear, mobile-first pages that match your brand.</p>
        <p>We make calls, directions, and booking actions easy in one tap.</p>
        <p>The result is a better first impression and more customers choosing your shop.</p>
      </div>
    </main>
  );
}
