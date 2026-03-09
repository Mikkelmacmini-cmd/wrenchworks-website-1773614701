import Image from "next/image";

const primaryCta = "#contact";
const secondaryCta = "#services";

const services = [
  {
    title: "Google Business Profile",
    text: "When customers search on Google Maps, your Google Business Profile is often their first impression. We optimize it so your shop stands out, builds trust fast, and gets more calls.",
    image: "/images/service-gbp-v5.png",
    alt: "Google Business Profile for an automotive repair shop on mobile",
  },
  {
    title: "Mobile-First Websites",
    text: "Most people will see your shop for the first time on a phone. We build mobile-first websites that load fast, look professional, and make it easy for them to choose your shop.",
    image: "/images/service-websites-v5.png",
    alt: "Automotive repair website shown on laptop and phone",
  },
  {
    title: "Local SEO + AI Search",
    text: "Search is changing fast. We optimize your site so local drivers can find you in Google and AI search, so your shop shows up where people are looking now.",
    image: "/images/service-local-seo-v8.png",
    alt: "SEO and AI search results for local auto repair shops",
    imageScale: 1,
    imageFrameClass: "pt-8 pb-4",
  },
  {
    title: "Automated Review Systems",
    text: "Simple follow-up flows that ask happy customers for reviews, helping you grow trust without extra front-desk work.",
    image: "/images/service-reviews-v4.png",
    alt: "Automated review funnel turning customer feedback into 5-star ratings",
  },
];

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
    text: "We publish everything, test forms and calls, and make sure tracking works.",
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
    a: "Most core work is done in 2–4 weeks, depending on how quickly we get access and approvals.",
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

        <section className="mt-12 grid gap-4 md:grid-cols-3">
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
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-label="KPI chart icon">
                      <path d="M5 18h14" stroke="#9AE6FF" strokeWidth="1.8" strokeLinecap="round" />
                      <path d="M7 16v-4" stroke="#9AE6FF" strokeWidth="1.8" strokeLinecap="round" />
                      <path d="M12 16v-7" stroke="#9AE6FF" strokeWidth="1.8" strokeLinecap="round" />
                      <path d="M17 16v-10" stroke="#9AE6FF" strokeWidth="1.8" strokeLinecap="round" />
                      <path d="M6 9l4-2 3 1 5-3" stroke="#9AE6FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : null}
                </div>
              </div>
              <p className="text-center">{point.text}</p>
            </article>
          ))}
        </section>

        <section id="services" className="mt-36 grid gap-8 pb-28 md:grid-cols-2 lg:grid-cols-4">
          {services.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-b from-white/10 to-white/[0.03] transition duration-200 hover:-translate-y-1 hover:border-cyan-200/35"
            >
              <div className="border-b border-white/10 bg-[#0b1224] p-2">
                <div className={`relative flex h-52 items-center justify-center overflow-hidden ${item.imageFrameClass ?? ""}`}>
                  <div className={`relative h-full w-full ${item.imageBoxClass ?? "max-w-[280px]"}`}>
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={1024}
                      height={1024}
                      unoptimized
                      className="h-full w-full object-contain"
                      style={{ transform: `scale(${item.imageScale ?? 1})`, transformOrigin: "center" }}
                      sizes="280px"
                    />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h2 className="font-display text-xl font-semibold">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-white/75">{item.text}</p>
              </div>
            </article>
          ))}
        </section>

        <div className="h-56" aria-hidden="true" />

        <section id="process" className="mt-0 rounded-3xl border border-white/15 bg-white/5 p-10 md:p-14">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-100/70">How It Works</p>
          <h3 className="mt-3 font-display text-2xl font-semibold md:text-3xl">
            Your shop growth roadmap
          </h3>

          <div className="relative mt-10">
            <div className="pointer-events-none absolute left-5 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-cyan-200/70 via-violet-200/40 to-transparent md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-8">
              {process.map((item, idx) => (
                <article
                  key={item.step}
                  className={`relative grid items-start gap-4 md:grid-cols-2 ${idx % 2 === 0 ? "" : "md:[&>div:first-child]:order-2"}`}
                >
                  <div className="relative rounded-2xl border border-white/15 bg-gradient-to-b from-white/10 to-white/[0.03] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_40px_-30px_rgba(34,211,238,0.45)]">
                    <p className="text-xs tracking-[0.2em] text-cyan-100/70">STEP {item.step}</p>
                    <h4 className="mt-2 font-display text-lg font-semibold">{item.title}</h4>
                    <p className="mt-2 text-sm text-white/75">{item.text}</p>
                  </div>

                  <div className="hidden md:block" />

                  <span className="absolute left-5 top-6 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-200 shadow-[0_0_0_4px_rgba(34,211,238,0.2),0_0_16px_rgba(34,211,238,0.7)] md:left-1/2" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className="h-56" aria-hidden="true" />

        <section id="faq" className="mt-0">
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

        <div className="h-56" aria-hidden="true" />

        <section
          id="contact"
          className="relative mt-0 overflow-hidden rounded-3xl border border-cyan-200/25 bg-gradient-to-r from-cyan-300/10 to-violet-300/10 p-12 text-center md:p-16"
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
