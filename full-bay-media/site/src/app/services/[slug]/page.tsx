import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DiagnosticProofRail } from "@/components/DiagnosticProofRail";
import { MobileActionRail } from "@/components/MobileActionRail";
import { featuredServices, findServiceBySlug } from "@/lib/autotrek-services";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

const phone = {
  display: "(303) 328-3356",
  href: "tel:+13033283356",
  callbackHref: "sms:+13033283356?body=Hi%20AutoTrek%2C%20please%20call%20me%20back%20about%20service.",
};

export async function generateStaticParams() {
  return featuredServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = findServiceBySlug(slug);
  if (!service) {
    return {
      title: { absolute: "Service Not Found | AutoTrek Service Center" },
      robots: { index: false, follow: false },
      alternates: { canonical: "/services" },
    };
  }

  return {
    title: { absolute: service.seoTitle },
    description: service.seoDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      url: `/services/${service.slug}`,
      type: "article",
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = findServiceBySlug(slug);
  if (!service) notFound();

  const related = service.relatedSlugs
    .map((s) => findServiceBySlug(s))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    name: service.title,
    areaServed: "Littleton, Colorado",
    url: `https://autotrekservicecenter.com/services/${service.slug}`,
    provider: {
      "@type": "AutoRepair",
      name: "AutoTrek Service Center",
      telephone: phone.display,
      address: {
        "@type": "PostalAddress",
        streetAddress: "8161 S Grant Way",
        addressLocality: "Littleton",
        addressRegion: "CO",
        postalCode: "80122",
      },
    },
  };

  return (
    <main className="min-h-screen bg-[var(--bg-canvas)] pb-28 text-[var(--ink-primary)] md:pb-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="relative overflow-hidden border-b border-white/10" aria-labelledby="service-title">
        <Image src={service.image} alt={service.title} width={2200} height={1200} className="h-[46vh] w-full object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,14,24,.86)_0%,rgba(8,14,24,.58)_56%,rgba(8,14,24,.2)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-6xl px-6 py-10 md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent-gold-soft)]">AutoTrek Service Detail</p>
          <h1 id="service-title" className="mt-2 font-bold text-white">{service.title}</h1>
          <p className="mt-3 max-w-3xl text-[#d7e0eb]">{service.shortDescription}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-[1.4fr_0.9fr] md:px-10">
        <article className="diagnostic-grid rounded-2xl border border-white/10 bg-[#121821] p-6">
          <div className="rounded-xl border border-[#45658d] bg-[#0b111c] p-4 text-lg font-semibold text-[#dce9f8]">No repairs begin until you approve the estimate.</div>

          <div className="mt-7">
            <DiagnosticProofRail
              title={`${service.title} Evidence Snapshots`}
              subtitle={`Recent ${service.title.toLowerCase()} cases with documented findings, approval checkpoints, and verified outcomes.`}
            />
          </div>

          <h2 className="mt-7 font-semibold text-white">What this service includes</h2>
          <p className="mt-4 leading-7">{service.longDescription}</p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <section className="ui-card-depth-1 rounded-xl border border-white/10 bg-[#0b0f14] p-4">
              <h3 className="text-xl font-semibold text-white">Common Symptoms</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                {service.decision.commonSymptoms.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>
            <section className="ui-card-depth-1 rounded-xl border border-white/10 bg-[#0b0f14] p-4">
              <h3 className="text-xl font-semibold text-white">Typical Causes</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                {service.decision.typicalCauses.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>
            <section className="ui-card-depth-1 rounded-xl border border-white/10 bg-[#0b0f14] p-4">
              <h3 className="text-xl font-semibold text-white">Can I Keep Driving?</h3>
              <p className="mt-2 text-sm">{service.decision.driveability}</p>
            </section>
            <section className="ui-card-depth-1 rounded-xl border border-white/10 bg-[#0b0f14] p-4">
              <h3 className="text-xl font-semibold text-white">Typical Time Window</h3>
              <p className="mt-2 text-sm">{service.decision.timeWindow}</p>
            </section>
            <section className="ui-card-depth-1 rounded-xl border border-white/10 bg-[#0b0f14] p-4">
              <h3 className="text-xl font-semibold text-white">Budget Range</h3>
              <p className="mt-2 text-sm">{service.decision.budgetRange}</p>
            </section>
            <section className="ui-card-depth-1 rounded-xl border border-white/10 bg-[#0b0f14] p-4">
              <h3 className="text-xl font-semibold text-white">What Can Wait vs Cannot</h3>
              <p className="mt-2 text-sm"><span className="font-semibold text-white">Can wait:</span> {service.decision.whatCanWait}</p>
              <p className="mt-2 text-sm"><span className="font-semibold text-white">Cannot wait:</span> {service.decision.whatCannotWait}</p>
            </section>
          </div>
        </article>

        <aside className="space-y-4 md:sticky md:top-6 md:h-fit" aria-label="Contact and related services">
          <div className="rounded-2xl border border-white/10 bg-[#121821] p-5">
            <p className="text-xs uppercase tracking-[0.16em] text-[var(--accent-gold-soft)]">Call now</p>
            <a href={phone.href} className="mt-2 block text-3xl font-bold text-white">{phone.display}</a>
            <p className="mt-2 text-sm">Mon–Fri 9:00 AM – 5:00 PM</p>
            <a href={phone.href} className="btn-primary ui-pressable mt-4 inline-block rounded-full px-5 py-2 text-sm font-semibold">Call Now</a>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#121821] p-5 text-sm">
            <p className="font-semibold text-white">Related services</p>
            <ul className="mt-3 space-y-2">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link href={`/services/${item.slug}`} className="text-[var(--accent-gold-soft)] underline underline-offset-4">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/services" className="mt-4 inline-block text-[var(--accent-gold-soft)] underline underline-offset-4">See all services</Link>
          </div>
        </aside>
      </section>

      <MobileActionRail phoneHref={phone.href} callbackHref={phone.callbackHref} quickDiagnosisHref="/services#triage" />
    </main>
  );
}
