import Image from "next/image";
import Link from "next/link";
import { DiagnosticProofRail } from "@/components/DiagnosticProofRail";
import { MobileActionRail } from "@/components/MobileActionRail";
import { SymptomTriageFunnel } from "@/components/SymptomTriageFunnel";

const business = {
  name: "AutoTrek Service Center",
  phoneDisplay: "(303) 328-3356",
  phoneHref: "tel:+13033283356",
  callbackHref: "sms:+13033283356?body=Hi%20AutoTrek%2C%20please%20call%20me%20back%20about%20my%20vehicle.",
  address: "8161 S Grant Way, Littleton, CO 80122",
  reviewUrl: "https://share.google/aglkPp86GrLFRfT7V",
};

const trustStats = [
  ["4.9★ Google", "1,200+ local reviews"],
  ["Serving Littleton Since 2009", "Trusted by families + fleets"],
  ["3yr / 36k Warranty", "Nationwide coverage"],
  ["ASE-Certified Techs", "Dealer-level diagnostics"],
] as const;

const snippets = [
  ["2018 BMW X3", "Check-engine + rough idle", "Found failing ignition coil + injector issue. Same-day repair, no repeat light."],
  ["Ford Transit Fleet Van", "Brake vibration", "Rotor + pad service with digital inspection report. Back in service next morning."],
  ["Subaru Outback", "Intermittent overheating", "Pressure test traced coolant leak early. Repaired before head-gasket damage."],
] as const;

const compareRows = [
  ["Diagnostic depth", "Root-cause workflow", "Often swap-heavy", "Basic tier diagnostics"],
  ["Communication", "Advisor + technician clarity", "Service desk relay", "Varies by location"],
  ["Approval control", "No work before approval", "Process-dependent", "Process-dependent"],
  ["Warranty", "3yr / 36k nationwide", "Typically shorter / brand-bound", "Often limited"],
] as const;

const processSteps = [
  ["Diagnose", "45–90 min", "Digital scan + technician validation to isolate root cause."],
  ["Confirm", "Same visit", "Advisor reviews findings, urgency, and options in plain language."],
  ["Repair", "After approval", "Only approved work begins, with milestone updates if scope changes."],
  ["Verify", "Before handoff", "Road test + post-repair checks with warranty-backed documentation."],
] as const;

const teamTrust = [
  ["Megan R.", "Lead Service Advisor", "ASE C1 · Customer Communication", "Explains options and costs before any authorization."],
  ["Carlos T.", "Master Technician", "ASE A1–A8", "Leads root-cause diagnostics for drivability + warning lights."],
  ["Jenna P.", "Warranty Coordinator", "3yr/36k Claims", "Documents repair proof and keeps warranty support friction-free."],
] as const;

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: business.name,
    telephone: business.phoneDisplay,
    image: "https://autotrekservicecenter.com/images/autotrek-hero-current.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "8161 S Grant Way",
      addressLocality: "Littleton",
      addressRegion: "CO",
      postalCode: "80122",
      addressCountry: "US",
    },
  };

  return (
    <main className="bg-[var(--bg-canvas)] pb-28 text-[var(--ink-primary)] md:pb-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <header data-testid="site-header" className="sticky top-0 z-[70] border-b border-white/10 bg-[rgba(7,11,17,.92)] backdrop-blur" aria-label="Site header">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5 md:px-10 md:py-4">
          <div className="relative h-14 w-56 md:h-16 md:w-64">
            <Image src="/autotrek-logo.png" alt="AutoTrek Service Center logo" fill className="object-contain object-left" priority />
          </div>
          <nav className="hidden items-center gap-6 text-sm text-[var(--ink-secondary)] md:flex" aria-label="Primary navigation">
            <a href="#triage">Quick Diagnosis</a>
            <a href="#process">Process</a>
            <a href="#reviews">Proof</a>
            <a href="#contact">Contact</a>
          </nav>
          <a href={business.phoneHref} className="btn-primary ui-pressable rounded-full px-5 py-2 text-sm font-semibold">
            Book Inspection
          </a>
        </div>
      </header>

      <section className="relative isolate overflow-hidden border-b border-white/10" aria-labelledby="hero-title">
        <Image
          src="/images/autotrek-hero-current.png"
          alt="Technician inspecting a vehicle in AutoTrek service bay"
          width={2200}
          height={1200}
          className="h-[80vh] min-h-[620px] w-full object-cover object-[72%_center] md:h-[74vh] md:min-h-0 md:object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,14,24,.86)_0%,rgba(8,14,24,.58)_56%,rgba(8,14,24,.2)_100%)]" />
        <div className="absolute inset-0 hero-grain" />
        <div className="absolute inset-0 z-10 mx-auto flex max-w-6xl items-start px-6 pb-10 pt-[calc(var(--site-header-height)+1.25rem)] md:items-end md:px-10 md:pb-14 md:pt-[calc(var(--site-header-height)+1.75rem)]">
          <div className="diagnostic-grid max-w-3xl rounded-[var(--radius-lg)] border border-white/15 bg-[rgba(10,19,31,.7)] p-5 backdrop-blur-sm md:p-8">
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--accent-gold-soft)]">Littleton Auto Care Since 2009</p>
            <h1 id="hero-title" className="mt-3 max-w-2xl font-bold">Get a Clear Repair Plan Before Small Issues Get Expensive.</h1>
            <p className="mt-4 max-w-2xl text-[1.04rem] text-[#dee8f3]">We diagnose the root cause, explain your options, and only begin repairs after your approval—backed by a 3-year/36,000-mile warranty.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a data-testid="hero-primary-cta" href={business.phoneHref} className="btn-primary ui-pressable rounded-full px-6 py-3 font-semibold">Book Inspection</a>
              <a href={business.phoneHref} className="btn-secondary ui-pressable rounded-full px-6 py-3 font-semibold">Speak to Advisor</a>
            </div>
            <div className="mt-4 flex flex-wrap gap-2" aria-label="Trust proof highlights">
              {trustStats.map(([title, sub]) => (
                <div key={title} className="rounded-xl border border-white/15 bg-[rgba(8,15,24,.62)] px-3 py-2 text-xs text-[#d8e3f2]">
                  <span className="font-semibold text-white">{title}</span> · {sub}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell mx-auto max-w-6xl px-6 py-10 md:px-10 md:py-14" aria-label="Evidence rail">
        <DiagnosticProofRail />
      </section>

      <section className="section-shell mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <SymptomTriageFunnel />
      </section>

      <section id="process" className="section-shell border-y border-white/10 bg-[var(--bg-surface)]" aria-labelledby="process-title">
        <div className="mx-auto max-w-6xl px-6 py-22 md:px-10 md:py-26">
          <h2 id="process-title" className="font-bold text-white">How We Keep You in Control</h2>
          <p className="mt-2 max-w-2xl">A four-step journey built to remove guesswork: Diagnose → Confirm → Repair → Verify.</p>
          <div className="mt-7 rounded-2xl border border-[#45658d] bg-[#0b111c] p-5 text-lg font-semibold text-[#dce9f8]">No repairs begin until you approve the estimate.</div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {processSteps.map(([step, timing, body]) => (
              <article key={step} className="ui-card-depth-2 rounded-xl border border-white/10 bg-[#0b0f14] p-5">
                <p className="text-xs uppercase tracking-[0.16em] text-[#8fa6c2]">{timing}</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{step}</h3>
                <p className="mt-2 text-sm">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="section-shell mx-auto max-w-6xl px-6 py-22 md:px-10 md:py-26" aria-labelledby="reviews-title">
        <h2 id="reviews-title" className="font-bold text-white">Recent Repair Outcomes</h2>
        <p className="mt-2 max-w-2xl">Real outcomes from real vehicles. Clear diagnostics. Verified follow-through.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {snippets.map(([vehicle, issue, outcome]) => (
            <article key={vehicle} className="ui-card-depth-2 rounded-2xl border border-white/10 bg-[#0d1420] p-5">
              <p className="text-xs uppercase tracking-[0.14em] text-[#8fa6c2]">{vehicle}</p>
              <h3 className="mt-2 text-xl font-semibold text-white">{issue}</h3>
              <p className="mt-2 text-sm">{outcome}</p>
            </article>
          ))}
        </div>
        <a href={business.reviewUrl} target="_blank" rel="noreferrer" className="mt-6 inline-block text-sm font-semibold text-[var(--accent-gold-soft)] underline underline-offset-4">Read Google Reviews</a>
      </section>

      <section className="section-shell mx-auto max-w-6xl px-6 pb-8 md:px-10 md:pb-12" aria-labelledby="team-title">
        <h2 id="team-title" className="font-bold text-white">Who You’re Trusting With Your Vehicle</h2>
        <p className="mt-2 max-w-2xl">Named experts, documented credentials, and a single accountability chain from estimate to handoff.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {teamTrust.map(([name, role, cert, detail]) => (
            <article key={name} className="ui-card-depth-2 rounded-2xl border border-white/10 bg-[#121821] p-5">
              <p className="text-xs uppercase tracking-[0.14em] text-[#8fa6c2]">{role}</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">{name}</h3>
              <p className="mt-1 text-sm font-semibold text-[var(--accent-gold-soft)]">{cert}</p>
              <p className="mt-2 text-sm">{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell border-y border-white/10 bg-[#0f1724]" aria-labelledby="compare-title">
        <div className="mx-auto max-w-6xl px-6 py-22 md:px-10 md:py-26">
          <h2 id="compare-title" className="font-bold text-white">AutoTrek vs Dealer vs Chain</h2>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[720px] bg-[#0b0f14] text-left text-sm">
              <caption className="sr-only">Comparison of diagnosis, communication, approval control and warranty across service options.</caption>
              <thead className="bg-[#152033] text-[#d7e0eb]"><tr><th className="px-4 py-3">Decision Factor</th><th className="px-4 py-3 text-[var(--accent-gold-soft)]">AutoTrek</th><th className="px-4 py-3">Dealer</th><th className="px-4 py-3">Chain</th></tr></thead>
              <tbody>
                {compareRows.map((row) => (
                  <tr key={row[0]} className="border-t border-white/10">{row.map((cell) => <td key={cell} className="px-4 py-3 text-[#c6d0dc]">{cell}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="contact" className="section-shell mx-auto grid max-w-6xl gap-6 px-6 py-22 md:grid-cols-2 md:px-10 md:py-26">
        <div className="premium-shell rounded-2xl p-6">
          <h3 className="font-bold text-white">Visit AutoTrek</h3>
          <p className="mt-3">{business.address}</p>
          <a href="https://maps.google.com/?q=8161+S+Grant+Way+Littleton+CO+80122" target="_blank" rel="noreferrer" className="mt-4 inline-block text-sm font-semibold text-[var(--accent-gold-soft)] underline underline-offset-4">Get directions</a>
          <Link href="/services" className="mt-4 block text-sm font-semibold text-[var(--accent-gold-soft)] underline underline-offset-4">Browse complete services hub</Link>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#0b0f14] py-14" aria-labelledby="final-cta-title">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
          <h3 id="final-cta-title" className="font-bold text-white">Ready for a Confident Answer on Your Vehicle?</h3>
          <p className="mx-auto mt-3 max-w-2xl">Book now or speak directly with an advisor. Backed by our 3-year / 36,000-mile warranty.</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a href={business.phoneHref} className="btn-primary ui-pressable rounded-full px-8 py-3 font-semibold">Book Inspection</a>
            <a href={business.phoneHref} className="btn-secondary ui-pressable rounded-full px-8 py-3 font-semibold">Call {business.phoneDisplay}</a>
          </div>
        </div>
      </section>

      <MobileActionRail phoneHref={business.phoneHref} callbackHref={business.callbackHref} quickDiagnosisHref="#triage" />

      <section className="mx-auto max-w-6xl px-6 pb-8 md:hidden" aria-hidden>
        <div className="h-20" />
      </section>
    </main>
  );
}
