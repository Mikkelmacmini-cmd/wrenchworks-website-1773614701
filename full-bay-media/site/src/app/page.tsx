import Image from "next/image";

const primaryCta = "#contact";
const secondaryCta = "#services";

const services = [
  {
    title: "Websites",
    text: "Fast, clean websites that make your shop look pro and make it easy for people to call, book, or get directions.",
  },
  {
    title: "Local SEO",
    text: "We help your shop show up when local drivers search for repair help, brakes, oil changes, and more.",
  },
  {
    title: "Google Business Profile",
    text: "We optimize your profile, services, photos, and posts so your first impression looks as strong as your work.",
  },
  {
    title: "Automated Review Systems",
    text: "Simple follow-up flows that ask happy customers for reviews, helping you grow trust without extra front-desk work.",
  },
];

const kpiIconData = "data:image/jpeg;base64,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";

const promisePoints = [
  {
    text: "We focus on what actually moves the needle.",
    icon: "gauge",
  },
  {
    text: "Built for independent shops and owner-operators.",
    icon: "shop",
  },
  {
    text: "Measured on the KPIs you care about: car count, ARO, and high-quality reviews.",
    icon: "kpi",
  },
];

const process = [
  {
    step: "01",
    title: "Audit",
    text: "We review your website, Google profile, reviews, and local search presence.",
  },
  {
    step: "02",
    title: "Plan",
    text: "We build a clear game plan based on your goals, market, and shop capacity.",
  },
  {
    step: "03",
    title: "Build",
    text: "We update your website pages, local SEO setup, and Google Business Profile.",
  },
  {
    step: "04",
    title: "Launch",
    text: "We publish everything, test forms and calls, and make sure tracking is working.",
  },
  {
    step: "05",
    title: "Grow",
    text: "We keep improving with review automation, ongoing updates, and monthly priorities.",
  },
];

const faqs = [
  {
    q: "Who do you work with?",
    a: "Independent auto repair shops and multi-location service businesses.",
  },
  {
    q: "What do you help with first?",
    a: "Most shops start with website updates, Google Business Profile optimization, and local SEO basics.",
  },
  {
    q: "How long does setup take?",
    a: "Most core work is done in 2-4 weeks depending on how fast we get access and approvals.",
  },
  {
    q: "Do you help us get more reviews?",
    a: "Yes. We set up simple automated review flows so your team can get more 5-star reviews with less manual effort.",
  },
  {
    q: "Do you lock us into long contracts?",
    a: "No long-term lock-ins are required to get started. We focus on results and clear next steps.",
  },
  {
    q: "What should we bring to the first call?",
    a: "Your shop goals, current pain points, and access to your website and Google profile if possible.",
  },
];

const orgLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Full Bay Media",
  url: "https://fullbaymedia.com",
  logo: "https://fullbaymedia.com/full-bay-logo.svg",
  description:
    "Full Bay Media helps independent auto repair shops grow car count with websites, local SEO, Google Business Profile optimization, and automated review systems.",
  areaServed: "United States",
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Full Bay Media",
  serviceType: "Auto Repair Shop Marketing",
  description:
    "Websites, local SEO, Google Business Profile optimization, and automated review systems for independent auto repair shops.",
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

          <div className="flex items-center gap-3">
            <a
              href={primaryCta}
              className="rounded-full border border-cyan-200/40 bg-cyan-300/10 px-5 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/20"
            >
              Get More Cars in the Bay
            </a>
            <button
              type="button"
              aria-label="Open menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10"
            >
              <span className="sr-only">Menu</span>
              <span className="flex flex-col gap-1">
                <span className="block h-[2px] w-4 bg-white/90" />
                <span className="block h-[2px] w-4 bg-white/90" />
                <span className="block h-[2px] w-4 bg-white/90" />
              </span>
            </button>
          </div>
        </header>

        <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.22em] text-cyan-100/80">
              Digital Growth for Independent Auto Repair Shops
            </p>
            <h1 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
              You built the shop. We’ll bring the right people.
            </h1>
            <p className="mt-6 max-w-2xl text-base text-white/75 md:text-lg">
              Not your average marketing partner. We build websites, improve local SEO, optimize your Google
              Business Profile, and set up AI-powered review funnels that grow car count.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={primaryCta}
                className="rounded-full bg-gradient-to-r from-cyan-300 to-violet-300 px-6 py-3 text-sm font-bold text-[#081022] transition hover:brightness-110"
              >
                Get More Cars in the Bay
              </a>
              <a
                href={secondaryCta}
                className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/15"
              >
                See Services
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
            </div>
          </aside>
        </section>

        <section className="mt-8 grid gap-3 md:grid-cols-3">
          {promisePoints.map((point) => (
            <article
              key={point.text}
              className="rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white/80"
            >
              <div className="mb-3 flex justify-center">
                <div className="inline-flex items-center justify-center rounded-full border border-cyan-200/25 bg-cyan-300/10 p-2">
                  {point.icon === "gauge" ? (
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-label="RPM gauge icon">
                      <path d="M4 15a8 8 0 1 1 16 0" stroke="#9AE6FF" strokeWidth="1.8" strokeLinecap="round" />
                      <path d="M12 12l5-3" stroke="#9AE6FF" strokeWidth="1.8" strokeLinecap="round" />
                      <circle cx="12" cy="12" r="1.5" fill="#9AE6FF" />
                    </svg>
                  ) : null}
                  {point.icon === "shop" ? (
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-label="Shop icon">
                      <path d="M4 10h16" stroke="#9AE6FF" strokeWidth="1.8" strokeLinecap="round" />
                      <path d="M6 10v8h12v-8" stroke="#9AE6FF" strokeWidth="1.8" strokeLinecap="round" />
                      <path d="M9 18v-4h6v4" stroke="#9AE6FF" strokeWidth="1.8" strokeLinecap="round" />
                      <path d="M5 10l1.5-4h11L19 10" stroke="#9AE6FF" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  ) : null}
                  {point.icon === "kpi" ? (
                    <img src={kpiIconData} alt="KPI icon" className="h-[34px] w-[34px] rounded-md object-cover" />
                  ) : null}
                </div>
              </div>
              <p className="text-center">{point.text}</p>
            </article>
          ))}
        </section>

        <section id="services" className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-100/70">How It Works</p>
          <h3 className="mt-3 font-display text-2xl font-semibold md:text-3xl">
            A clear 5-step process built to grow your shop.
          </h3>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {process.map((item) => (
              <article key={item.step} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-xs tracking-[0.2em] text-cyan-100/70">STEP {item.step}</p>
                <h4 className="mt-2 font-display text-lg font-semibold">{item.title}</h4>
                <p className="mt-2 text-sm text-white/75">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-3xl border border-white/15 bg-white/5 p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-100/70">Why this works</p>
          <p className="mt-3 text-sm leading-relaxed text-white/80 md:text-base">
            Times have changed. The first storefront most customers see is your Google Business Profile and
            your website. We make sure that first impression matches the level of work your shop delivers,
            so more people trust you faster and choose your shop first.
          </p>
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

        <section
          id="contact"
          className="relative mt-16 overflow-hidden rounded-3xl border border-cyan-200/25 bg-gradient-to-r from-cyan-300/10 to-violet-300/10 p-8 text-center md:p-12"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{ backgroundImage: "url('/images/pattern-gradient-dots.svg')", backgroundSize: "cover", backgroundPosition: "center" }}
          />
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.22em] text-cyan-100/80">Ready for real growth?</p>
            <h3 className="mt-3 font-display text-3xl font-semibold">Let’s build your next growth move.</h3>
            <p className="mx-auto mt-3 max-w-2xl text-white/75">
              We’ll review where you are now, show you what to fix first, and give you a clear plan to grow
              car count, lead quality, and review volume.
            </p>
            <a
              href="#"
              className="mt-7 inline-flex rounded-full bg-white px-7 py-3 text-sm font-bold text-[#0b1224] transition hover:bg-cyan-100"
            >
              Book a Call
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
