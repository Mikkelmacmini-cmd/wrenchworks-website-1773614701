import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DiagnosticProofRail } from "@/components/DiagnosticProofRail";
import { MobileActionRail } from "@/components/MobileActionRail";
import { featuredServices, findServiceBySlug, serviceAssetManifest } from "@/lib/autotrek-services";

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
  if (!service) return { title: { absolute: "Service Not Found | AutoTrek Service Center" }, robots: { index: false, follow: false }, alternates: { canonical: "/services" } };
  return { title: { absolute: service.seoTitle }, description: service.seoDescription, alternates: { canonical: `/services/${service.slug}` } };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = findServiceBySlug(slug);
  if (!service) notFound();

  const related = service.relatedSlugs.map((s) => findServiceBySlug(s)).filter((item): item is NonNullable<typeof item> => Boolean(item));
  const heroMedia = serviceAssetManifest[service.slug];

  return (
    <main className="min-h-screen bg-[var(--bg-canvas)] pb-28 text-[var(--ink-primary)] md:pb-0">
      <section className="relative overflow-hidden border-b border-slate-200" aria-labelledby="service-title">
        <picture>
          {heroMedia?.mobileSrc ? <source media="(max-width: 767px)" srcSet={heroMedia.mobileSrc} sizes="100vw" /> : null}
          <img src={heroMedia?.src ?? service.image} srcSet={heroMedia?.srcSet} sizes="100vw" alt={heroMedia?.alt ?? service.title} className="h-[44vh] w-full object-cover" loading="eager" fetchPriority="high" decoding="async" width={1280} height={720} />
        </picture>
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,.9)_0%,rgba(255,255,255,.68)_56%,rgba(255,255,255,.18)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-6xl px-6 py-10 md:px-10">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent-gold-soft)]">AutoTrek Service Detail</p>
          <h1 id="service-title" className="mt-2 font-bold text-slate-900">{service.title}</h1>
          <p className="mt-3 max-w-3xl text-slate-700">{service.shortDescription}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-[1.4fr_0.9fr] md:px-10">
        <article className="diagnostic-grid rounded-2xl border border-slate-200 bg-white p-6">
          <div className="rounded-xl border border-emerald-300 bg-emerald-50 p-4 text-lg font-semibold text-emerald-900">No repairs begin until you approve the estimate.</div>
          <div className="mt-7"><DiagnosticProofRail title={`${service.title} Evidence Snapshots`} subtitle={`Recent ${service.title.toLowerCase()} cases with documented findings, approval checkpoints, and verified outcomes.`} /></div>
          <h2 className="mt-7 font-semibold text-slate-900">What this service includes</h2>
          <p className="mt-4 leading-7">{service.longDescription}</p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <section className="ui-card-depth-1 rounded-xl border border-slate-200 bg-[var(--bg-surface)] p-4"><h3 className="text-xl font-semibold text-slate-900">Common Symptoms</h3><ul className="mt-2 list-disc space-y-1 pl-5 text-sm">{service.decision.commonSymptoms.map((item) => <li key={item}>{item}</li>)}</ul></section>
            <section className="ui-card-depth-1 rounded-xl border border-slate-200 bg-[var(--bg-surface)] p-4"><h3 className="text-xl font-semibold text-slate-900">Typical Causes</h3><ul className="mt-2 list-disc space-y-1 pl-5 text-sm">{service.decision.typicalCauses.map((item) => <li key={item}>{item}</li>)}</ul></section>
            <section className="ui-card-depth-1 rounded-xl border border-slate-200 bg-[var(--bg-surface)] p-4"><h3 className="text-xl font-semibold text-slate-900">Can I Keep Driving?</h3><p className="mt-2 text-sm">{service.decision.driveability}</p></section>
            <section className="ui-card-depth-1 rounded-xl border border-slate-200 bg-[var(--bg-surface)] p-4"><h3 className="text-xl font-semibold text-slate-900">Typical Time Window</h3><p className="mt-2 text-sm">{service.decision.timeWindow}</p></section>
          </div>
        </article>

        <aside className="space-y-4 md:sticky md:top-6 md:h-fit" aria-label="Contact and related services">
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-xs uppercase tracking-[0.16em] text-[var(--accent-gold-soft)]">Call now</p>
            <a href={phone.href} className="mt-2 block text-3xl font-bold text-slate-900">{phone.display}</a>
            <a href={phone.href} className="btn-primary ui-pressable mt-4 inline-block rounded-full px-5 py-2 text-sm font-semibold">Book Inspection</a>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 text-sm">
            <p className="font-semibold text-slate-900">Related services</p>
            <ul className="mt-3 space-y-2">{related.map((item) => <li key={item.slug}><Link href={`/services/${item.slug}`} className="text-[var(--accent-gold-soft)] underline underline-offset-4">{item.title}</Link></li>)}</ul>
            <Link href="/services" className="mt-4 inline-block text-[var(--accent-gold-soft)] underline underline-offset-4">See all services</Link>
          </div>
        </aside>
      </section>

      <section data-sticky-rail-stop="true" className="mx-auto max-w-6xl px-6 pb-10 md:px-10" aria-label="Final conversion prompt">
        <div className="rounded-2xl border border-slate-200 bg-[var(--bg-surface)] p-6 text-center">
          <h3 className="text-2xl font-bold text-slate-900">Need a confident next step?</h3>
          <p className="mt-2">Tell us your symptoms and we’ll prioritize safety first.</p>
          <a href={phone.href} className="btn-primary ui-pressable mt-4 inline-block rounded-full px-6 py-3 font-semibold">Book Inspection</a>
        </div>
      </section>

      <MobileActionRail phoneHref={phone.href} callbackHref={phone.callbackHref} quickDiagnosisHref="/services#triage" />
    </main>
  );
}
