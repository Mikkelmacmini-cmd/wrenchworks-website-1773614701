import type { Metadata } from "next";
import Link from "next/link";
import { DiagnosticProofRail } from "@/components/DiagnosticProofRail";
import { MobileActionRail } from "@/components/MobileActionRail";
import { SymptomTriageFunnel } from "@/components/SymptomTriageFunnel";
import { featuredServices, fullServices } from "@/lib/autotrek-services";

export const metadata: Metadata = {
  title: "Auto Repair Services in Littleton, CO | AutoTrek",
  description: "Explore AutoTrek's full auto repair services in Littleton, CO—diagnostics, brakes, maintenance, hybrid, suspension, alignments, and fleet service.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-canvas)] px-6 pb-28 pt-12 text-[var(--ink-primary)] md:px-10 md:pb-12">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="text-sm font-semibold text-[var(--accent-gold-soft)] underline underline-offset-4">← Back to Home</Link>
        <h1 className="mt-4 font-bold text-white">Service Hub</h1>
        <p className="mt-2 max-w-3xl">Symptom-first navigation, clear process, and approval-first recommendations for Littleton drivers.</p>

        <section className="section-shell mt-10">
          <DiagnosticProofRail title="Diagnostic Proof OS Across Services" subtitle="Each service path is anchored in evidence: finding, recommendation, and verified result." />
        </section>

        <section id="triage" className="section-shell mt-12">
          <SymptomTriageFunnel />
        </section>

        <section className="section-shell mt-14" aria-labelledby="featured-services-title">
          <h2 id="featured-services-title" className="font-semibold text-white">Featured service details</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {featuredServices.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="ui-card-depth-2 diagnostic-grid rounded-2xl border border-white/10 bg-[#121821] p-5">
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-2 text-sm">{service.shortDescription}</p>
                <span className="mt-3 inline-block text-sm font-semibold text-[var(--accent-gold-soft)]">View details →</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="section-shell mt-14" aria-labelledby="catalog-title">
          <h2 id="catalog-title" className="font-semibold text-white">Full catalog</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {fullServices.map((service) => (
              <div key={service} className="ui-card-depth-1 rounded-xl border border-white/10 bg-[#121821] px-4 py-3 text-sm text-[#d7e0eb]">{service}</div>
            ))}
          </div>
        </section>
      </div>

      <MobileActionRail
        phoneHref="tel:+13033283356"
        callbackHref="sms:+13033283356?body=Hi%20AutoTrek%2C%20please%20call%20me%20back%20about%20service."
        quickDiagnosisHref="#triage"
      />
    </main>
  );
}
