import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { featuredServices, findServiceBySlug } from "@/lib/autotrek-services";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export async function generateStaticParams() {
  return featuredServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = findServiceBySlug(slug);
  if (!service) return { title: { absolute: "Service Not Found | AutoTrek Service Center" }, robots: { index: false, follow: false } };
  return {
    title: { absolute: service.seoTitle },
    description: service.seoDescription,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = findServiceBySlug(slug);
  if (!service) notFound();

  return (
    <main className="min-h-screen bg-[#0b0f14] text-[#eaf0f6]">
      <section className="relative overflow-hidden border-b border-white/10">
        <Image src={service.image} alt={service.title} width={2200} height={1200} className="h-[48vh] w-full object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f14]/85 via-[#0b0f14]/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-6xl px-6 py-10 md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-[#e7cfa8]">AutoTrek Service Detail</p>
          <h1 className="mt-2 text-5xl font-bold text-white">{service.title}</h1>
          <p className="mt-3 max-w-3xl text-[#d7e0eb]">{service.shortDescription}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-[1.4fr_0.9fr] md:px-10">
        <article className="rounded-2xl border border-white/10 bg-[#121821] p-6">
          <h2 className="text-2xl font-semibold text-white">What this service includes</h2>
          <p className="mt-4 leading-7">{service.longDescription}</p>

          <div className="mt-7 grid gap-3 md:grid-cols-2">
            {[
              "Complete inspection and diagnostic confirmation",
              "Transparent estimate before work begins",
              "Approval-first communication during repair",
              "Final verification and handoff summary",
            ].map((item) => (
              <div key={item} className="rounded-xl border border-[#1e9bff]/25 bg-[#0b0f14] px-4 py-3 text-sm text-[#d7e0eb]">{item}</div>
            ))}
          </div>

          <h3 className="mt-8 text-xl font-semibold text-white">Timeline and pricing posture</h3>
          <p className="mt-2 text-sm">Most diagnostics are completed same day. Repair timing depends on findings and parts availability, and we confirm timing with you before approval. You will always get clear priority levels so urgent safety items are handled first.</p>

          <h3 className="mt-8 text-xl font-semibold text-white">Process: Diagnose → Confirm → Repair → Verify</h3>
          <p className="mt-2 text-sm">No guesswork, no pressure. We explain what matters now, what can wait, and why.</p>
        </article>

        <aside className="space-y-4 md:sticky md:top-6 md:h-fit">
          <div className="rounded-2xl border border-white/10 bg-[#121821] p-5">
            <p className="text-xs uppercase tracking-[0.16em] text-[#e7cfa8]">Book or call</p>
            <a href="tel:+13033283356" className="mt-2 block text-3xl font-bold text-white">(303) 328-3356</a>
            <p className="mt-2 text-sm">Mon–Fri 9:00 AM – 5:00 PM</p>
            <a href="tel:+13033283356" className="mt-4 inline-block rounded-full bg-[#c89b5e] px-5 py-2 text-sm font-semibold text-[#0b0f14] hover:bg-[#e7cfa8]">Book Inspection</a>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#121821] p-5 text-sm">
            <p className="font-semibold text-white">Trust signals</p>
            <ul className="mt-3 space-y-2">
              <li>4.9★ local reputation</li>
              <li>Serving Littleton since 2009</li>
              <li>36 months / 36,000 miles warranty</li>
              <li>ASE-certified diagnostics</li>
            </ul>
          </div>
          <Link href="/services" className="inline-block text-sm font-semibold text-[#e7cfa8] underline underline-offset-4">See all services</Link>
        </aside>
      </section>
    </main>
  );
}
