import Image from "next/image";
import Link from "next/link";
import { featuredServices } from "@/lib/autotrek-services";

const business = {
  name: "AutoTrek Service Center",
  phoneDisplay: "(303) 328-3356",
  phoneHref: "tel:+13033283356",
  address: "8161 S Grant Way, Littleton, CO 80122",
  reviewUrl: "https://share.google/aglkPp86GrLFRfT7V",
};

const trustStats = ["4.9★ Local Rating", "Serving Littleton Since 2009", "36/36 Warranty", "ASE-Certified Team"];

const process = [
  ["Diagnose", "Dealer-level diagnostics and a full inspection before any recommendation."],
  ["Confirm", "You get options with priority tiers and transparent pricing posture."],
  ["Repair", "Approved work is completed by certified technicians using quality parts."],
  ["Verify", "Final quality checks and a clear handoff before you leave."],
];

export default function Home() {
  return (
    <main className="bg-[#0b0f14] text-[#eaf0f6]">
      <header className="border-b border-white/10 bg-[#0b0f14]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
          <div className="relative h-14 w-56 md:h-16 md:w-64">
            <Image src="/autotrek-logo.png" alt="AutoTrek Service Center logo" fill className="object-contain object-left" priority />
          </div>
          <a href={business.phoneHref} className="rounded-full bg-[#c89b5e] px-5 py-2 text-sm font-semibold text-[#0b0f14] hover:bg-[#e7cfa8]">
            Book Inspection
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/10">
        <Image src="/images/autotrek-hero-current.png" alt="Technician servicing a vehicle" width={2200} height={1200} className="h-[74vh] w-full object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f14]/90 via-[#0b0f14]/70 to-black/45" />
        <div className="absolute inset-0 mx-auto flex max-w-6xl items-end px-6 py-12 md:px-10 md:py-16">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.18em] text-[#e7cfa8]">Executive-level auto care • Littleton, CO</p>
            <h1 className="mt-3 text-5xl font-bold leading-[0.95] md:text-7xl">PREMIUM REPAIR. BOLD CLARITY. TRUSTED RESULTS.</h1>
            <p className="mt-5 max-w-2xl text-lg text-[#d7e0eb]">From warning-light diagnostics to major repairs, AutoTrek gives you transparent recommendations, professional execution, and confidence on every mile.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={business.phoneHref} className="rounded-full bg-[#c89b5e] px-6 py-3 font-semibold text-[#0b0f14] hover:bg-[#e7cfa8]">Book Inspection</a>
              <a href={business.phoneHref} className="rounded-full border border-white/60 px-6 py-3 font-semibold text-white hover:bg-white/10">Speak to Advisor — {business.phoneDisplay}</a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#121821]">
        <div className="mx-auto grid max-w-6xl gap-3 px-6 py-6 md:grid-cols-4 md:px-10">
          {trustStats.map((item) => (
            <div key={item} className="rounded-xl border border-white/10 bg-[#1a2330] px-4 py-3 text-sm font-semibold text-[#eaf0f6]">{item}</div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-4xl font-bold text-white">Services Built Around Real Symptoms</h2>
            <p className="mt-2 max-w-2xl">Choose the issue you are feeling now. We will diagnose first, then confirm the right repair path.</p>
          </div>
          <Link href="/services" className="hidden text-sm font-semibold text-[#e7cfa8] underline underline-offset-4 md:block">Open full services hub</Link>
        </div>
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {featuredServices.slice(0, 6).map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="premium-shell rounded-2xl p-5 transition hover:-translate-y-0.5">
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-2 text-sm">{service.shortDescription}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-[#e7cfa8]">See service details →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#121821]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
          <h2 className="text-4xl font-bold text-white">Our 4-Step Repair Process</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {process.map(([title, copy], i) => (
              <article key={title} className="rounded-2xl border border-[#1e9bff]/25 bg-[#0b0f14] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1e9bff]">Step {i + 1}</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-2 md:px-10">
        <div className="premium-shell rounded-2xl p-6">
          <h3 className="text-2xl font-bold text-white">Visit AutoTrek</h3>
          <p className="mt-3">{business.address}</p>
          <a href="https://maps.google.com/?q=8161+S+Grant+Way+Littleton+CO+80122" target="_blank" rel="noreferrer" className="mt-4 inline-block text-sm font-semibold text-[#e7cfa8] underline underline-offset-4">Get directions</a>
        </div>
        <div className="premium-shell rounded-2xl p-6">
          <h3 className="text-2xl font-bold text-white">Proof Before Promises</h3>
          <p className="mt-3">Read verified local reviews, then call us for a direct, no-pressure diagnostic plan.</p>
          <a href={business.reviewUrl} target="_blank" rel="noreferrer" className="mt-4 inline-block text-sm font-semibold text-[#e7cfa8] underline underline-offset-4">Read Google Reviews</a>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#0b0f14] py-14">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
          <h3 className="text-4xl font-bold text-white">Ready to move forward with confidence?</h3>
          <p className="mx-auto mt-3 max-w-2xl">Call {business.phoneDisplay}. We will help you choose urgent, planned, or diagnosis-first scheduling based on your vehicle’s current condition.</p>
          <a href={business.phoneHref} className="mt-6 inline-block rounded-full bg-[#c89b5e] px-8 py-3 font-semibold text-[#0b0f14] hover:bg-[#e7cfa8]">Book Inspection</a>
        </div>
      </section>
    </main>
  );
}
