import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { featuredServices, fullServices } from "@/lib/autotrek-services";

export const metadata: Metadata = {
  title: "Auto Repair Services in Littleton, CO | AutoTrek Service Center",
  description:
    "Browse AutoTrek Service Center services in Littleton, CO including diagnostics, brakes, maintenance, fleet, hybrid, suspension, and more.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-10 text-[#1f2937] md:px-10">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="text-sm font-semibold text-[#166534] underline underline-offset-4">
          ← Back to Home
        </Link>

        <h1 className="mt-4 text-4xl font-bold text-[#111827]">Auto Repair Services in Littleton, CO</h1>
        <p className="mt-2 max-w-3xl text-[#4b5563]">
          We provide complete maintenance and repair services for domestic, European, hybrid, and fleet vehicles across Littleton,
          Highlands Ranch, Englewood, Lakewood, and Centennial.
        </p>

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-[#111827]">Featured Service Pages</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {featuredServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group overflow-hidden rounded-xl border border-[#e5e7eb] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <Image src={service.image} alt={service.title} width={1000} height={700} className="h-36 w-full object-cover" />
                <div className="p-4">
                  <p className="font-semibold text-[#111827]">{service.title}</p>
                  <p className="mt-2 text-sm text-[#4b5563]">{service.shortDescription}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-[#111827]">Full Service Catalog</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {fullServices.map((service) => (
              <div key={service} className="rounded-xl border border-[#e5e7eb] bg-white px-4 py-3 shadow-sm">
                {service}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
