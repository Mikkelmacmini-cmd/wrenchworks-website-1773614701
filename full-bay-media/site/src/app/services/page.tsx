import type { Metadata } from "next";
import Link from "next/link";
import { featuredServices, fullServices } from "@/lib/autotrek-services";

export const metadata: Metadata = {
  title: "Auto Repair Services in Littleton, CO",
  description: "Symptom-first services at AutoTrek: diagnostics, brakes, maintenance, hybrid, fleet, and European repair in Littleton.",
  alternates: { canonical: "/services" },
};

const symptoms = [
  ["Check engine light on", "Start with vehicle diagnosis and repair."],
  ["Brakes squeaking or vibrating", "Get brake inspection and repair now."],
  ["Pulling, bouncing, rough ride", "Suspension and alignment check."],
  ["Overdue maintenance reminder", "Factory-scheduled maintenance plan."],
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0b0f14] px-6 py-12 text-[#eaf0f6] md:px-10">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="text-sm font-semibold text-[#e7cfa8] underline underline-offset-4">← Back to Home</Link>
        <h1 className="mt-4 text-5xl font-bold text-white">Service Hub</h1>
        <p className="mt-2 max-w-3xl">Symptom-first navigation, clear process, and transparent recommendations for Littleton drivers.</p>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-white">Start with what you are noticing</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {symptoms.map(([title, copy]) => (
              <article key={title} className="rounded-2xl border border-white/10 bg-[#121821] p-5">
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm">{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-white">Featured service details</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {featuredServices.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="rounded-2xl border border-white/10 bg-[#121821] p-5 transition hover:-translate-y-0.5">
                <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                <p className="mt-2 text-sm">{service.shortDescription}</p>
                <span className="mt-3 inline-block text-sm font-semibold text-[#e7cfa8]">View details →</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-white">Full catalog</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {fullServices.map((service) => (
              <div key={service} className="rounded-xl border border-white/10 bg-[#121821] px-4 py-3 text-sm text-[#d7e0eb]">{service}</div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
