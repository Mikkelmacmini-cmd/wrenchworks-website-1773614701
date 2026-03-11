import Image from "next/image";
import Link from "next/link";
import { DiagnosticProofRail } from "@/components/DiagnosticProofRail";
import { MobileActionRail } from "@/components/MobileActionRail";
import { SymptomTriageFunnel } from "@/components/SymptomTriageFunnel";
import { homepageHeroAsset } from "@/lib/autotrek-services";

const business = {
  name: "AutoTrek Service Center",
  phoneDisplay: "(303) 328-3356",
  phoneHref: "tel:+13033283356",
  callbackHref: "sms:+13033283356?body=Hi%20AutoTrek%2C%20please%20call%20me%20back%20about%20my%20vehicle.",
  address: "8161 S Grant Way, Littleton, CO 80122",
  reviewUrl: "https://share.google/aglkPp86GrLFRfT7V",
};

const trustStats = [
  ["4.9★ Google", "1,200+ verified local reviews"],
  ["Serving Littleton Since 2009", "Trusted by families and fleets"],
  ["3yr / 36k Warranty", "Nationwide protection"],
  ["ASE-Certified Technicians", "Dealer-level diagnostic accuracy"],
] as const;

const snippets = [
  ["2018 BMW X3", "Check-engine + rough idle", "Found failing ignition coil + injector issue. Same-day repair, no repeat light.", "/visual-refresh/ai-no-faces/support/support-02-diagnostics-scan.webp", "/visual-refresh/ai-no-faces/support/support-02-diagnostics-scan.webp 1280w, /visual-refresh/ai-no-faces/mobile/support-02-diagnostics-scan-mobile.webp 768w"],
  ["Ford Transit Fleet Van", "Brake vibration", "Rotor + pad service with digital inspection report. Back in service next morning.", "/visual-refresh/ai-no-faces/support/support-01-brake-service.webp", "/visual-refresh/ai-no-faces/support/support-01-brake-service.webp 1280w, /visual-refresh/ai-no-faces/mobile/support-01-brake-service-mobile.webp 768w"],
  ["Subaru Outback", "Intermittent overheating", "Pressure test traced coolant leak early. Repaired before head-gasket damage.", "/visual-refresh/ai-no-faces/support/support-03-oil-service.webp", "/visual-refresh/ai-no-faces/support/support-03-oil-service.webp 1280w, /visual-refresh/ai-no-faces/mobile/support-03-oil-service-mobile.webp 768w"],
] as const;

export default function Home() {
  return (
    <main className="bg-[var(--bg-canvas)] pb-28 text-[var(--ink-primary)] md:pb-0">
      <header data-testid="site-header" className="sticky top-0 z-[70] border-b border-slate-200/80 bg-white/95 backdrop-blur" aria-label="Site header">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5 md:px-10 md:py-4">
          <div className="relative h-14 w-56 md:h-16 md:w-64">
            <Image src="/autotrek-logo.png" alt="AutoTrek Service Center logo" fill className="object-contain object-left" priority />
          </div>
          <nav className="hidden items-center gap-6 text-sm text-[var(--ink-secondary)] md:flex" aria-label="Primary navigation">
            <a className="inline-flex min-h-11 items-center" href="#triage">Quick Diagnosis</a><a className="inline-flex min-h-11 items-center" href="#process">Process</a><a className="inline-flex min-h-11 items-center" href="#reviews">Proof</a><a className="inline-flex min-h-11 items-center" href="#contact">Contact</a>
          </nav>
          <a href={business.phoneHref} className="btn-secondary ui-pressable hidden rounded-full px-5 py-2 text-sm font-semibold md:inline-flex">Call {business.phoneDisplay}</a>
        </div>
      </header>

      <section className="relative isolate overflow-hidden border-b border-slate-200" aria-labelledby="hero-title">
        <picture>
          <source media="(max-width: 899px)" srcSet={homepageHeroAsset.mobileSrc} sizes="100vw" />
          <source media="(min-width: 900px)" srcSet={homepageHeroAsset.srcSet} sizes="100vw" />
          <img src={homepageHeroAsset.src} srcSet={homepageHeroAsset.srcSet} sizes="100vw" alt={homepageHeroAsset.alt} fetchPriority="high" loading="eager" decoding="async" width={1280} height={820} className="h-[80vh] min-h-[620px] w-full object-cover object-[72%_center] md:h-[74vh] md:min-h-0 md:object-center" />
        </picture>
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,.72)_0%,rgba(255,255,255,.5)_56%,rgba(255,255,255,.08)_100%)]" />
        <div className="pointer-events-none absolute inset-0 hero-grain" />
        <div className="absolute inset-0 z-10 mx-auto flex max-w-6xl items-start px-6 pb-10 pt-[calc(var(--site-header-height)+1.25rem)] md:items-end md:px-10 md:pb-14 md:pt-[calc(var(--site-header-height)+1.75rem)]">
          <div className="diagnostic-grid max-w-3xl rounded-[1.5rem] border border-slate-200/90 bg-white/88 p-5 shadow-lg backdrop-blur-sm md:p-8">
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--accent-gold-soft)]">Littleton Auto Care Since 2009</p>
            <h1 id="hero-title" data-copy-id="hero.headline" className="mt-3 max-w-2xl font-bold text-slate-900">Dealer-Level Precision. Local-Shop Clarity.</h1>
            <p data-copy-id="hero.subhead" className="mt-4 max-w-2xl text-[1.04rem] text-slate-700">We find the root cause, walk you through options in plain language, and only begin approved work—backed by a 3-year/36,000-mile warranty.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a data-testid="hero-primary-cta" data-copy-id="hero.cta.primary" href={business.phoneHref} className="btn-primary ui-pressable rounded-full px-6 py-3 font-semibold">Book Diagnostic</a>
              <a data-copy-id="hero.cta.secondary" href={business.phoneHref} className="btn-secondary ui-pressable rounded-full px-6 py-3 font-semibold">Speak to an Advisor</a>
            </div>
            <div className="mt-4 flex flex-wrap gap-2" aria-label="Trust proof highlights">
              {trustStats.map(([title, sub]) => <div key={title} className="proof-chip"><strong>{title}</strong><span> · {sub}</span></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell mx-auto max-w-6xl px-6 py-10 md:px-10 md:py-14" aria-label="Evidence rail"><DiagnosticProofRail /></section>
      <section className="section-shell mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20"><SymptomTriageFunnel /></section>

      <section id="process" className="section-shell border-y border-slate-200 bg-[var(--bg-surface)]" aria-labelledby="process-title">
        <div className="mx-auto max-w-6xl px-6 py-18 md:px-10 md:py-20">
          <h2 id="process-title" data-copy-id="process.headline" className="font-bold text-slate-900">A Repair Process Built for Clear Decisions</h2>
          <p data-copy-id="process.subhead" className="mt-2 max-w-2xl">Four deliberate steps to remove guesswork: Diagnose → Confirm → Repair → Verify.</p>
          <div className="mt-7 rounded-2xl border border-emerald-300 bg-emerald-50 p-5 text-lg font-semibold text-emerald-900">No repairs begin until you approve the estimate.</div>
        </div>
      </section>

      <section id="reviews" className="section-shell mx-auto max-w-6xl px-6 py-18 md:px-10 md:py-20" aria-labelledby="reviews-title">
        <h2 id="reviews-title" data-copy-id="proof.headline" className="font-bold text-slate-900">Recent Repair Outcomes</h2>
        <p data-copy-id="proof.subhead" className="mt-2 max-w-2xl">Real vehicles. Documented findings. Verified results.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {snippets.map(([vehicle, issue, outcome, image, imageSrcSet]) => (
            <article key={vehicle} className="ui-card-depth-2 overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <img src={image} srcSet={imageSrcSet} sizes="(min-width: 1024px) 30vw, 100vw" alt={issue} className="h-40 w-full object-cover" loading="lazy" />
              <div className="p-5"><p className="text-xs uppercase tracking-[0.14em] text-slate-500">{vehicle}</p><h3 className="mt-2 text-xl font-semibold text-slate-900">{issue}</h3><p className="mt-2 text-sm">{outcome}</p></div>
            </article>
          ))}
        </div>
        <a href={business.reviewUrl} target="_blank" rel="noreferrer" className="mt-6 inline-block text-sm font-semibold text-[var(--accent-gold-soft)] underline underline-offset-4">Read Google Reviews</a>
      </section>

      <section id="contact" data-sticky-rail-stop="true" className="section-shell border-y border-slate-200 bg-[var(--bg-surface)]">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-14 md:grid-cols-2 md:px-10">
          <div className="premium-shell rounded-2xl p-6">
            <h3 className="font-bold text-slate-900">Visit AutoTrek</h3>
            <p className="mt-3">{business.address}</p>
            <Link href="/services" className="mt-4 block text-sm font-semibold text-[var(--accent-gold-soft)] underline underline-offset-4">Browse complete services hub</Link>
          </div>
        </div>
      </section>

      <section id="final-cta" data-sticky-rail-stop="true" className="border-t border-slate-200 bg-white py-14" aria-labelledby="final-cta-title">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
          <h3 id="final-cta-title" data-copy-id="finalCta.headline" className="font-bold text-slate-900">Need a Clear Answer on Your Vehicle?</h3>
          <p data-copy-id="finalCta.subhead" className="mx-auto mt-3 max-w-2xl">Start with a diagnostic and leave with a prioritized plan you can approve with confidence.</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a data-copy-id="finalCta.cta.primary" href={business.phoneHref} className="btn-primary ui-pressable rounded-full px-8 py-3 font-semibold">Book Diagnostic</a>
            <a data-copy-id="finalCta.cta.secondary" href={business.phoneHref} className="btn-secondary ui-pressable rounded-full px-8 py-3 font-semibold">Call {business.phoneDisplay}</a>
          </div>
        </div>
      </section>

      <MobileActionRail phoneHref={business.phoneHref} callbackHref={business.callbackHref} quickDiagnosisHref="#triage" />
      <section className="mx-auto max-w-6xl px-6 pb-8 md:hidden" aria-hidden><div className="h-20" /></section>
    </main>
  );
}
