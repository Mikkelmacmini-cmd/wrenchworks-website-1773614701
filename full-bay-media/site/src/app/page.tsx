import Image from "next/image";

const cta = "#";

const services = [
  {
    title: "Conversion-First Website Systems",
    text: "Premium page architecture that answers trust, authority, and next-step questions in seconds.",
  },
  {
    title: "Local SEO That Maps to Real Jobs",
    text: "City + service intent targeting, schema deployment, and entity-rich pages that attract buying traffic.",
  },
  {
    title: "Review Flywheel + Reputation Ops",
    text: "Post-service ask flows, response frameworks, and profile optimization that compounds over time.",
  },
];

const promisePoints = [
  "No generic templates — every section mapped to conversion intent.",
  "Built for independent shops and owner-operators, not vanity marketing.",
  "Measured by booked diagnostics, not likes or traffic screenshots.",
];

const process = [
  {
    step: "01",
    title: "Diagnostic Audit",
    text: "We identify friction in your current site, local presence, and review pipeline.",
  },
  {
    step: "02",
    title: "Offer + Messaging Architecture",
    text: "We clarify your value proposition and align content with high-intent customer decisions.",
  },
  {
    step: "03",
    title: "Build + SEO Implementation",
    text: "We ship a premium site experience with structured SEO and conversion tracking foundations.",
  },
  {
    step: "04",
    title: "Review & Growth Loops",
    text: "We launch reputation workflows and feedback loops that steadily increase trust and inbound demand.",
  },
];

const outcomes = [
  "More booked diagnostic calls",
  "Higher-quality local leads",
  "Improved close rates from better pre-visit trust",
  "Consistent monthly demand signal",
];

const faqs = [
  {
    q: "Who is Full Bay Media built for?",
    a: "Independent auto repair shops and multi-location operators that need better lead quality, stronger trust, and predictable local growth.",
  },
  {
    q: "How fast can we launch?",
    a: "Most core buildouts launch quickly once assets are ready. We prioritize speed-to-impact while preserving premium quality.",
  },
  {
    q: "What happens during a Diag Call?",
    a: "We review your current website, Google presence, and review performance, then map the highest-leverage opportunities for the next 30-60 days.",
  },
];

const orgLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Full Bay Media",
  url: "https://fullbaymedia.com",
  logo: "https://fullbaymedia.com/full-bay-logo.svg",
  description:
    "Full Bay Media creates premium websites, local SEO systems, and review funnels for independent auto repair shops.",
  areaServed: "United States",
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Full Bay Media",
  serviceType: "Auto Repair Shop Marketing",
  description:
    "Conversion-first websites, local SEO, and review funnel systems for independent auto repair shops.",
  url: "https://fullbaymedia.com",
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      <div className="pointer-events-none absolute -top-32 left-1/2 h-[460px] w-[760px] -translate-x-1/2 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="pointer-events-none absolute right-[-180px] top-40 h-[440px] w-[440px] rounded-full bg-violet-400/20 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-25" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-screen"
        style={{ backgroundImage: "url('/images/pattern-gradient-dots.svg')", backgroundSize: "420px", backgroundRepeat: "repeat" }}
      />

      <main className="relative mx-auto max-w-6xl px-6 pb-24 pt-8 md:px-10">
        <header className="mb-14 flex items-center justify-between rounded-full border border-white/20 bg-white/10 px-5 py-3 backdrop-blur-xl">
          <Image src="/full-bay-logo.svg" alt="Full Bay Media logo" width={150} height={32} priority />
          <a
            href={cta}
            className="rounded-full border border-cyan-200/40 bg-cyan-300/10 px-5 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/20"
          >
            Book a Diag Call
          </a>
        </header>

        <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.22em] text-cyan-100/80">
              Growth Infrastructure for Auto Repair Shops
            </p>
            <h1 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
              Build the kind of shop brand customers choose before they call anyone else.
            </h1>
            <p className="mt-6 max-w-2xl text-base text-white/75 md:text-lg">
              Full Bay Media designs premium websites, local search systems, and review flywheels that
              transform scattered marketing into a clear demand engine.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={cta}
                className="rounded-full bg-gradient-to-r from-cyan-300 to-violet-300 px-6 py-3 text-sm font-bold text-[#081022] transition hover:brightness-110"
              >
                Book a Diag Call
              </a>
              <a
                href="#services"
                className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/15"
              >
                Explore Services
              </a>
            </div>
          </div>

          <aside className="floaty rounded-3xl border border-white/20 bg-white/10 p-3 backdrop-blur-xl">
            <div className="relative h-[320px] overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/images/hero-mechanic.jpg"
                alt="Technician performing diagnostics under a vehicle"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-100/80">Typical Outcome Window</p>
                <p className="mt-1 text-2xl font-semibold">+41% Qualified Diagnostic Calls</p>
              </div>
            </div>
          </aside>
        </section>

        <section className="mt-8 grid gap-3 md:grid-cols-3">
          {promisePoints.map((point) => (
            <p key={point} className="rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white/80">
              {point}
            </p>
          ))}
        </section>

        <section id="services" className="mt-14 grid gap-4 md:grid-cols-3">
          {services.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-white/15 bg-gradient-to-b from-white/10 to-white/[0.03] p-6 transition duration-200 hover:-translate-y-1 hover:border-cyan-200/35"
            >
              <h2 className="font-display text-xl font-semibold">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/75">{item.text}</p>
            </article>
          ))}
        </section>

        <section className="mt-10 grid gap-4 md:grid-cols-2" aria-label="Repair shop visual gallery">
          <div className="group relative h-56 overflow-hidden rounded-2xl border border-white/15">
            <Image src="/images/shop-floor.jpg" alt="Busy modern repair shop floor" fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          </div>
          <div className="group relative h-56 overflow-hidden rounded-2xl border border-white/15">
            <Image src="/images/advisor-customer.jpg" alt="Service advisor discussing repairs with customer" fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          </div>
          <div className="group relative h-56 overflow-hidden rounded-2xl border border-white/15">
            <Image src="/images/diagnostic-tablet.jpg" alt="Technician using tablet diagnostics" fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          </div>
          <div className="group relative h-56 overflow-hidden rounded-2xl border border-white/15">
            <Image src="/images/under-lift-inspection.jpg" alt="Vehicle inspection under hydraulic lift" fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          </div>
        </section>

        <section id="process" className="mt-16 rounded-3xl border border-white/15 bg-white/5 p-7 md:p-10">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-100/70">Execution Framework</p>
          <h3 className="mt-3 font-display text-2xl font-semibold md:text-3xl">
            A creative system built for one thing: more booked work.
          </h3>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {process.map((item) => (
              <article key={item.step} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-xs tracking-[0.2em] text-cyan-100/70">STEP {item.step}</p>
                <h4 className="mt-2 font-display text-lg font-semibold">{item.title}</h4>
                <p className="mt-2 text-sm text-white/75">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-4 md:grid-cols-[0.8fr_1.2fr]">
          <article className="rounded-3xl border border-cyan-200/25 bg-gradient-to-b from-cyan-300/15 to-transparent p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-100/80">What success looks like</p>
            <ul className="mt-4 space-y-2 text-sm text-white/85">
              {outcomes.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
          <article className="rounded-3xl border border-white/15 bg-white/5 p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-100/70">Why this works</p>
            <p className="mt-3 text-sm leading-relaxed text-white/80">
              Most shops lose opportunities before a customer ever calls — unclear messaging, weak trust
              cues, inconsistent review velocity, and poor local SEO architecture. We fix those bottlenecks
              with a unified system so your growth is less dependent on luck or ad spend spikes.
            </p>
          </article>
        </section>

        <section id="faq" className="mt-16">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-100/70">Frequently Asked Questions</p>
          <div className="mt-4 space-y-3">
            {faqs.map((item) => (
              <article key={item.q} className="rounded-2xl border border-white/15 bg-white/5 p-5">
                <h3 className="font-display text-lg font-semibold">{item.q}</h3>
                <p className="mt-2 text-sm text-white/75">{item.a}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="relative mt-16 overflow-hidden rounded-3xl border border-cyan-200/25 bg-gradient-to-r from-cyan-300/10 to-violet-300/10 p-8 text-center md:p-12">
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{ backgroundImage: "url('/images/pattern-gradient-dots.svg')", backgroundSize: "cover", backgroundPosition: "center" }}
          />
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.22em] text-cyan-100/80">Ready for a real growth diagnosis?</p>
            <h3 className="mt-3 font-display text-3xl font-semibold">Book a Diag Call</h3>
            <p className="mx-auto mt-3 max-w-2xl text-white/75">
              We’ll audit your current web experience, local visibility, and review performance — then show
              you the highest-leverage moves to increase booked work.
            </p>
            <a
              href={cta}
              className="mt-7 inline-flex rounded-full bg-white px-7 py-3 text-sm font-bold text-[#0b1224] transition hover:bg-cyan-100"
            >
              Book a Diag Call
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
