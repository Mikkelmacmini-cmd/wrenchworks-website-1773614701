import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { findServiceBySlug, featuredServices } from "@/lib/autotrek-services";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return featuredServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = findServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | AutoTrek Service Center",
    };
  }

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      url: `https://autotrekservicecenter.com/services/${service.slug}`,
      images: [service.image],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: service.seoTitle,
      description: service.seoDescription,
      images: [service.image],
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = findServiceBySlug(slug);

  if (!service) {
    return (
      <main className="min-h-screen bg-white px-6 py-12 text-[#1f2937] md:px-10">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold">Service not found</h1>
          <Link href="/services" className="mt-4 inline-block text-[#166534] underline underline-offset-4">
            Back to Services
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-[#1f2937]">
      <section className="relative overflow-hidden">
        <Image src={service.image} alt={service.title} width={2200} height={1200} className="h-[48vh] w-full object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-black/10" />
        <div className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-6xl px-6 py-10 text-white md:px-10">
          <p className="text-sm uppercase tracking-wide text-[#bbf7d0]">AutoTrek Service Center • Littleton, CO</p>
          <h1 className="mt-2 text-4xl font-bold md:text-5xl">{service.title}</h1>
          <p className="mt-3 max-w-3xl text-lg text-white/90">{service.shortDescription}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:grid-cols-[1.4fr_0.8fr] md:px-10">
        <article className="card-lift rounded-2xl border border-[#e5e7eb] bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-[#111827]">In-Depth Service Overview</h2>
          <p className="mt-4 leading-7 text-[#374151]">{service.longDescription}</p>

          <h3 className="mt-8 text-xl font-semibold text-[#111827]">What’s Included</h3>
          <ul className="mt-3 space-y-2 text-[#374151]">
            <li>• Complete inspection and diagnostics before repair decisions</li>
            <li>• Clear estimate and practical service recommendations</li>
            <li>• Quality parts and technician-led workmanship</li>
            <li>• Final quality check before vehicle handoff</li>
          </ul>

          <h3 className="mt-8 text-xl font-semibold text-[#111827]">Google + AI Search Visibility</h3>
          <p className="mt-3 leading-7 text-[#374151]">
            This page is intentionally structured for both Google Search and AI discovery systems: clear service intent, location context, customer-language FAQs, and direct conversion paths.
          </p>

          <div className="mt-8 rounded-xl border border-[#dcfce7] bg-[#f0fdf4] p-4">
            <p className="text-sm font-semibold text-[#14532d]">30 / 60 / 90 Day Expected Outcomes</p>
            <ul className="mt-2 space-y-2 text-sm text-[#166534]">
              <li><strong>30 Days:</strong> Technical cleanup and service-page trust signals fully in place.</li>
              <li><strong>60 Days:</strong> Better local visibility and more qualified call/form actions.</li>
              <li><strong>90 Days:</strong> Stronger ranking consistency and higher lead-quality momentum.</li>
            </ul>
          </div>
        </article>

        <aside className="space-y-4">
          <div className="rounded-2xl border border-[#e5e7eb] bg-[#f9fafb] p-5">
            <p className="text-sm text-[#6b7280]">Call to schedule</p>
            <a href="tel:+13033283356" className="mt-1 block text-2xl font-bold text-[#111827]">
              (303) 328-3356
            </a>
            <p className="mt-2 text-sm text-[#4b5563]">Mon–Fri 9:00 AM – 5:00 PM</p>
            <a href="tel:+13033283356" className="mt-4 inline-block rounded-full bg-[#dc2626] px-5 py-2 text-sm font-bold text-white hover:bg-[#b91c1c]">
              Schedule an Appointment
            </a>
          </div>
          <div className="rounded-2xl border border-[#e5e7eb] bg-white p-5">
            <p className="font-semibold text-[#111827]">Service Area</p>
            <p className="mt-2 text-sm text-[#4b5563]">Littleton, Highlands Ranch, Englewood, Lakewood, Centennial</p>
          </div>
          <div className="rounded-2xl border border-[#e5e7eb] bg-white p-5">
            <p className="font-semibold text-[#111827]">Quick FAQ</p>
            <div className="mt-3 space-y-2">
              <details className="rounded-lg border border-[#e5e7eb] p-3">
                <summary className="cursor-pointer text-sm font-semibold">How quickly can I get scheduled?</summary>
                <p className="mt-2 text-sm text-[#4b5563]">Most appointments can be scheduled within 1–3 business days depending on parts and bay availability.</p>
              </details>
              <details className="rounded-lg border border-[#e5e7eb] p-3">
                <summary className="cursor-pointer text-sm font-semibold">Do you explain priority vs. optional repairs?</summary>
                <p className="mt-2 text-sm text-[#4b5563]">Yes. We separate safety-critical, near-term, and monitor-only items so you can make clear decisions.</p>
              </details>
            </div>
            <Link href="/services" className="mt-4 inline-block text-sm font-semibold text-[#166534] underline underline-offset-4">
              See all services
            </Link>
          </div>
        </aside>
      </section>
    </main>
  );
}
