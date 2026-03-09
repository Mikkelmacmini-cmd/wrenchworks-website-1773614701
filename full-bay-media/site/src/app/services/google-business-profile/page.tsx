import Link from "next/link";

export default function GoogleBusinessProfilePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 text-white md:px-10">
      <Link href="/" className="text-cyan-200 hover:text-cyan-100">← Back to Home</Link>
      <h1 className="mt-6 font-display text-4xl font-semibold md:text-5xl">Google Business Profile</h1>
      <p className="mt-6 text-white/80">
        When people search on Google Maps, your profile is often the first thing they see. That first
        impression decides if they call you or move on.
      </p>
      <div className="mt-8 space-y-4 text-white/80">
        <p>We optimize your categories, services, photos, posts, and review strategy.</p>
        <p>We make sure your shop looks active, trustworthy, and easy to choose.</p>
        <p>The goal is simple: more qualified calls from local drivers ready to book.</p>
      </div>
    </main>
  );
}
