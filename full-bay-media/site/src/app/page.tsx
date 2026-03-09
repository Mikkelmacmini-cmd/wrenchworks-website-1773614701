import Image from "next/image";

const cta = "#";

const features = [
  {
    title: "Huly-grade UX polish",
    text: "Micro-interactions, visual hierarchy, and motion tuned for trust and speed.",
  },
  {
    title: "Local SEO engine",
    text: "Service-area pages, schema, and intent-led copy to rank for real buyer searches.",
  },
  {
    title: "Review momentum loops",
    text: "Automated ask flows and profile optimization that turn jobs into social proof.",
  },
];

const outcomes = [
  "Clear premium positioning",
  "Higher diag-call conversion rates",
  "Faster lead response pathways",
  "Better Google visibility and trust",
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[460px] w-[760px] -translate-x-1/2 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="pointer-events-none absolute right-[-180px] top-40 h-[440px] w-[440px] rounded-full bg-violet-400/20 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-25" />

      <main className="relative mx-auto max-w-6xl px-6 pb-20 pt-8 md:px-10">
        <nav className="mb-16 flex items-center justify-between rounded-full border border-white/20 bg-white/6 px-5 py-3 backdrop-blur-xl">
          <Image src="/full-bay-logo.svg" alt="Full Bay Media" width={150} height={32} priority />
          <a
            href={cta}
            className="rounded-full border border-cyan-200/40 bg-cyan-300/10 px-5 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/20"
          >
            Book a Diag Call
          </a>
        </nav>

        <section className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.22em] text-cyan-100/80">
              Pass 4 Direction — Premium Build
            </p>
            <h1 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
              Full Bay Media for shops that want premium growth, not generic marketing.
            </h1>
            <p className="mt-6 max-w-2xl text-base text-white/75 md:text-lg">
              We build high-converting web experiences, local discovery systems, and review funnels
              that move real revenue. No fluff. No agency theater.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={cta}
                className="rounded-full bg-gradient-to-r from-cyan-300 to-violet-300 px-6 py-3 text-sm font-bold text-[#081022] transition hover:brightness-110"
              >
                Book a Diag Call
              </a>
              <a
                href="#proof"
                className="rounded-full border border-white/20 bg-white/7 px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/12"
              >
                See Framework
              </a>
            </div>
          </div>

          <aside className="floaty rounded-3xl border border-white/20 bg-white/7 p-6 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-100/70">Growth Snapshot</p>
            <p className="mt-4 text-4xl font-semibold">+41%</p>
            <p className="mt-2 text-sm text-white/75">Typical lift in qualified calls after conversion-layer rebuild.</p>
            <div className="mt-5 h-px bg-white/15" />
            <ul className="mt-5 space-y-2 text-sm text-white/85">
              {outcomes.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </aside>
        </section>

        <section id="proof" className="mt-18 grid gap-4 md:grid-cols-3">
          {features.map((f) => (
            <article
              key={f.title}
              className="rounded-2xl border border-white/15 bg-gradient-to-b from-white/10 to-white/[0.03] p-6 transition duration-200 hover:-translate-y-1 hover:border-cyan-200/35"
            >
              <h2 className="font-display text-xl font-semibold">{f.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/75">{f.text}</p>
            </article>
          ))}
        </section>

        <section className="mt-16 rounded-3xl border border-white/15 bg-white/5 p-7 md:p-10">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-100/70">Build Sequence</p>
              <h3 className="mt-3 font-display text-2xl font-semibold md:text-3xl">
                We build your growth stack like a product, not a brochure.
              </h3>
            </div>
            <ol className="space-y-4 text-sm text-white/80">
              <li>1. Positioning + narrative architecture</li>
              <li>2. Homepage and offer design system</li>
              <li>3. SEO structure and schema deployment</li>
              <li>4. Review funnel and CTA conversion loops</li>
            </ol>
          </div>
        </section>

        <section className="mt-16 rounded-3xl border border-cyan-200/25 bg-gradient-to-r from-cyan-300/10 to-violet-300/10 p-8 text-center md:p-12">
          <p className="text-xs uppercase tracking-[0.22em] text-cyan-100/80">Ready to diagnose growth constraints?</p>
          <h3 className="mt-3 font-display text-3xl font-semibold">Book a Diag Call</h3>
          <p className="mx-auto mt-3 max-w-2xl text-white/75">
            We’ll audit your current site, local presence, and review engine, then hand you a prioritized revenue roadmap.
          </p>
          <a
            href={cta}
            className="mt-7 inline-flex rounded-full bg-white px-7 py-3 text-sm font-bold text-[#0b1224] transition hover:bg-cyan-100"
          >
            Book a Diag Call
          </a>
        </section>
      </main>
    </div>
  );
}
