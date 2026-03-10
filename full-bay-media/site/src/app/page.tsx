"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const bookingUrl = "https://calendly.com/fullbaymedia/free-diag-call";
const phoneHref = "tel:+18005551234";
const primaryCta = bookingUrl;
const secondaryCta = "#services";

type ServiceItem = {
  title: string;
  text: string;
  image: string;
  alt: string;
  href: string;
  imageScale?: number;
  imageFrameClass?: string;
  imageBoxClass?: string;
  imageFit?: "contain" | "cover";
  imagePositionClass?: string;
};

const services: ServiceItem[] = [
  {
    title: "Google Business Profile",
    text: "When customers search on Google Maps, your Google Business Profile is often their first impression. We optimize it so your shop stands out, builds trust fast, and gets more calls.",
    image: "/images/service-gbp-v6.webp",
    alt: "Google Business Profile for an automotive repair shop on mobile",
    href: "/services/google-business-profile",
    imageFit: "contain",
    imagePositionClass: "object-center",
  },
  {
    title: "Mobile-First Websites",
    text: "Most people will see your shop for the first time on a phone. We build mobile-first websites that load fast, look professional, and make it easy for them to choose your shop.",
    image: "/images/service-websites-v5.webp",
    alt: "Automotive repair website shown on laptop and phone",
    href: "/services/mobile-first-websites",
    imageFit: "contain",
    imagePositionClass: "object-center",
    imageScale: 1.5,
  },
  {
    title: "Google + AI Search Visibility",
    text: "Search is changing fast. Our Google + AI Search Visibility method helps local drivers find your shop in Google results and AI answers.",
    image: "/images/service-local-seo-v9.webp",
    alt: "SEO and AI search results for local auto repair shops",
    href: "/services/local-seo-ai-search",
    imageFit: "contain",
    imagePositionClass: "object-center",
    imageScale: 1.5,
  },
  {
    title: "Automated Review Systems",
    text: "Simple follow-up flows that ask happy customers for reviews, helping you grow trust without extra front-desk work.",
    image: "/images/service-reviews-v4.webp",
    alt: "Automated review funnel turning customer feedback into 5-star ratings",
    href: "/services/automated-review-systems",
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
    title: "Diagnosis",
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
    a: "Independent auto repair shops and Multi-store Operators.",
  },
  {
    q: "What do you help with first?",
    a: "Most shops start with website updates, Google Business Profile optimization, and local SEO basics.",
  },
  {
    q: "How long does setup take?",
    a: "It depends on the scope of work. Some systems can be implemented immediately. Others like full website builds require more time and customization.",
  },
  {
    q: "Do you help us get more reviews?",
    a: "Yes. We set up simple automated review flows so your team can get more 5-star reviews with less manual effort.",
  },
  {
    q: "Do you lock us into long contracts?",
    a: "We believe in partnerships not contractual obligations. We offer 30 day agreements, or longer depending on <strong><u>your</u></strong> needs.",
  },
  {
    q: "What should we bring to the first call?",
    a: "Your shop goals, current pain points, and a link to your current website.",
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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#0a1324] text-foreground clawx-bg-v3">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />




      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-12" />

      <main className="relative mx-auto max-w-[1600px] px-8 pb-24 pt-8 md:px-14">
        <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden">
          <div className="absolute left-2 -top-6 z-20 md:left-4 md:-top-6">
            <Link href="/" aria-label="Go to homepage" className="inline-flex">
              <Image src="/full-bay-logo.png" alt="Full Bay Media logo" width={112} height={24} priority />
            </Link>
          </div>

          <div className="absolute right-4 top-12 z-20 flex items-center gap-3 md:right-6 md:top-12">
            <a
              href={phoneHref}
              className="rounded-full bg-gradient-to-r from-cyan-300 to-violet-300 px-5 py-2 text-sm font-bold text-[#081022] transition hover:brightness-110"
            >
              Book a Call
            </a>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10"
            >
              <span className="sr-only">Menu</span>
              <span className="flex flex-col gap-1">
                <span className="block h-[2px] w-4 bg-white/90" />
                <span className="block h-[2px] w-4 bg-white/90" />
                <span className="block h-[2px] w-4 bg-white/90" />
              </span>
            </button>
          </div>

          {menuOpen ? (
            <div className="absolute right-4 top-24 z-30 w-56 rounded-2xl border border-white/20 bg-[#060d1c]/95 p-3 backdrop-blur-xl md:right-6">
              <a href="#services" onClick={() => setMenuOpen(false)} className="block rounded-lg px-3 py-2 text-sm text-white/90 hover:bg-white/10">
                How We Help
              </a>
              <a href="#process" onClick={() => setMenuOpen(false)} className="block rounded-lg px-3 py-2 text-sm text-white/90 hover:bg-white/10">
                Our Roadmap
              </a>
              <a href="/collision-shop-marketing" onClick={() => setMenuOpen(false)} className="block rounded-lg px-3 py-2 text-sm text-white/90 hover:bg-white/10">
                Collision Shop Marketing
              </a>
              <a href="#faq" onClick={() => setMenuOpen(false)} className="block rounded-lg px-3 py-2 text-sm text-white/90 hover:bg-white/10">
                FAQ
              </a>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="mt-1 block rounded-lg bg-gradient-to-r from-cyan-300 to-violet-300 px-3 py-2 text-sm font-bold text-[#081022]">
                Book Call
              </a>
            </div>
          ) : null}

          <div className="relative h-[560px] w-full md:h-[640px]">
            <Image
              src="/images/hero-shop.webp"
              alt="Auto repair shop exterior with open service bays"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050812]/85 via-[#050812]/55 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050812]/70 via-transparent to-[#050812]/20" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-[#0a1324]" />

            <div className="relative z-10 h-full p-8 md:p-14">
              <div className="flex h-full max-w-3xl flex-col">
                <h1 className="font-display text-4xl font-semibold leading-[1.08] pt-12 md:pt-20 md:text-6xl">
                  You built a great shop.
                  <br className="hidden md:block" />
                  Let us help you fill it.
                </h1>

                <div className="mt-auto pb-2">
                  <p className="max-w-2xl text-base text-white/85 md:text-lg">
                    We are not a one size fits all marketing company. We only work with auto repair and collision shops—so every strategy is built for your industry.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2 text-xs text-cyan-100/90">
                    <span className="rounded-full border border-white/20 bg-black/25 px-3 py-1">Trusted by independent shops</span>
                    <span className="rounded-full border border-white/20 bg-black/25 px-3 py-1">4.9★ average client rating</span>
                    <span className="rounded-full border border-white/20 bg-black/25 px-3 py-1">Focus: Auto + Collision only</span>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={secondaryCta}
                      className="rounded-full bg-gradient-to-r from-cyan-300 via-cyan-200 to-violet-300 px-8 py-3 text-xl font-bold text-[#081022] shadow-[0_16px_36px_-16px_rgba(125,226,255,0.8)] transition hover:brightness-110"
                    >
                      How We Help
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-3">
          {promisePoints.map((point) => (
            <article
              key={point.text}
              className="rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white/80 backdrop-blur-sm transition hover:border-cyan-200/35 hover:bg-white/[0.09]"
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

        <section id="services" className="mt-36 pb-28">
          <h3 className="mb-8 text-center font-display text-3xl font-semibold md:text-4xl">How We Help</h3>

          <div className="grid gap-10 md:grid-cols-2">
            {services.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group block overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-b from-white/10 to-white/[0.03] shadow-[0_14px_32px_-24px_rgba(56,189,248,0.55)] transition duration-200 hover:-translate-y-1 hover:border-cyan-200/40 hover:shadow-[0_20px_42px_-22px_rgba(56,189,248,0.75)]"
              >
                <div className="border-b border-white/10 bg-[#0b1224] p-0">
                <div className={`relative flex h-96 items-center justify-center overflow-hidden ${item.imageFrameClass ?? ""}`}>
                  <div className="relative h-full w-full">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={1024}
                      height={1024}
                      unoptimized
                      className={`h-full w-full ${item.imageFit === "cover" ? "object-cover" : "object-contain"} ${item.imagePositionClass ?? ""}` }
                      style={{ transform: `scale(${item.imageScale ?? 1})` }}
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                  </div>
                </div>
              </div>
                <div className="p-8">
                  <h2 className="font-display text-xl font-semibold">{item.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">{item.text}</p>
                </div>
              </Link>
            ))}
          </div>
        

          <div className="mt-12 flex justify-center">
            <a
              href={primaryCta}
              className="rounded-full bg-gradient-to-r from-cyan-300 via-cyan-200 to-violet-300 px-12 py-4 text-2xl font-bold text-[#081022] shadow-[0_18px_42px_-18px_rgba(125,226,255,0.85)] transition hover:brightness-110"
            >
              Book Your Free Diag Call Now
            </a>
          </div></section>

          <form action="mailto:hello@fullbaymedia.com" method="post" encType="text/plain" className="mx-auto mt-8 max-w-3xl rounded-2xl border border-white/15 bg-white/5 p-6">
            <p className="mb-4 text-sm text-white/80">Not ready to book yet? Send your info and we’ll reach out.</p>
            <div className="grid gap-3 md:grid-cols-2">
              <input name="name" required placeholder="Name" className="rounded-lg border border-white/20 bg-black/25 px-3 py-2 text-sm text-white placeholder:text-white/50" />
              <input name="shop" placeholder="Shop Name" className="rounded-lg border border-white/20 bg-black/25 px-3 py-2 text-sm text-white placeholder:text-white/50" />
              <input name="phone" required placeholder="Phone" className="rounded-lg border border-white/20 bg-black/25 px-3 py-2 text-sm text-white placeholder:text-white/50" />
              <input name="email" type="email" placeholder="Email" className="rounded-lg border border-white/20 bg-black/25 px-3 py-2 text-sm text-white placeholder:text-white/50" />
            </div>
            <button type="submit" className="mt-4 rounded-full border border-cyan-200/40 bg-cyan-300/10 px-5 py-2 text-sm font-semibold text-cyan-100 hover:bg-cyan-300/20">Request a Callback</button>
          </form>

          <section className="mt-12">
            <h4 className="text-center font-display text-2xl font-semibold md:text-3xl">Recent Shop Wins</h4>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <article className="rounded-2xl border border-white/15 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.16em] text-cyan-100/70">Case Study 01</p>
                <h5 className="mt-2 font-display text-xl font-semibold">Independent Repair Shop</h5>
                <p className="mt-2 text-sm text-white/80">Before: weak map visibility and inconsistent calls. After 60 days: <strong className="text-cyan-100">+34% inbound calls</strong> and <strong className="text-cyan-100">+22 new reviews</strong>.</p>
                <Image src="/images/service-gbp-v6.webp" alt="GBP case snapshot" width={900} height={540} className="mt-4 h-44 w-full rounded-xl object-cover" />
              </article>
              <article className="rounded-2xl border border-white/15 bg-white/5 p-5">
                <p className="text-xs uppercase tracking-[0.16em] text-cyan-100/70">Case Study 02</p>
                <h5 className="mt-2 font-display text-xl font-semibold">Collision Center</h5>
                <p className="mt-2 text-sm text-white/80">Before: outdated site and low search traction. After relaunch: <strong className="text-cyan-100">+41% form leads</strong> and <strong className="text-cyan-100">+29% organic traffic</strong>.</p>
                <Image src="/images/service-websites-v5.webp" alt="Website case snapshot" width={900} height={540} className="mt-4 h-44 w-full rounded-xl object-cover" />
              </article>
            </div>
          </section>

        <div className="h-56" aria-hidden="true" />

        <section id="process" className="mt-0 p-0">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-100/70">How It Works</p>
          <h3 className="mt-3 font-display text-3xl font-semibold md:text-4xl">Our Shop Growth Roadmap</h3>

          <div className="relative mt-12 overflow-visible p-2 pb-24 md:p-4 md:pb-28">
            <svg
              className="pointer-events-none absolute left-1/2 top-4 hidden h-[980px] w-[540px] -translate-x-1/2 md:block"
              viewBox="0 0 540 980"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M270 20 C 90 110, 450 190, 270 300 S 90 500, 270 610 S 450 810, 270 940"
                fill="none"
                stroke="rgba(125, 226, 255, 0.58)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="2 14"
              />
            </svg>

            <div className="relative flex flex-col items-center gap-20 py-10 md:gap-28 md:py-14">
              {process.map((item, idx) => (
                <article
                  key={item.step}
                  className={`group relative w-full max-w-[250px] ${idx === 0 ? "md:translate-x-0 md:-mt-20" : idx % 2 === 0 ? "md:-translate-x-36" : "md:translate-x-36"}`}
                >
                  <div className="rounded-2xl border border-white/20 bg-gradient-to-b from-cyan-300/25 to-violet-300/15 p-5 backdrop-blur-sm transition duration-300 group-hover:-translate-y-1.5 group-hover:scale-[1.02] group-hover:border-cyan-200/70 group-hover:shadow-[0_16px_34px_-12px_rgba(34,211,238,0.7)]">
                    <div className="flex justify-center">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-cyan-200/60 bg-[#0b1224] text-xs font-semibold text-cyan-100">
                        {idx + 1}
                      </span>
                    </div>
                    <h4 className="mt-3 text-center font-display text-base font-semibold">{item.title}</h4>
                  </div>

                  <div className="pointer-events-none absolute left-1/2 top-[calc(100%+10px)] z-20 w-[240px] -translate-x-1/2 rounded-xl border border-cyan-200/30 bg-[#090f1f]/95 p-3 text-xs leading-relaxed text-white/85 opacity-0 shadow-xl transition duration-200 group-hover:opacity-100">
                    <p className="text-[10px] uppercase tracking-[0.16em] text-cyan-100/70">Step {item.step}</p>
                    <p className="mt-1">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className="h-56" aria-hidden="true" />

        <section id="faq" className="mt-0">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-100/70">Frequently Asked Questions</p>
          <div className="mt-6 space-y-4">
            {faqs.map((item) => (
              <details key={item.q} className="group rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm transition open:border-cyan-200/45 open:bg-white/[0.08]">
                <summary className="cursor-pointer list-none font-display text-lg font-semibold text-white marker:content-none">
                  {item.q}
                </summary>
                <p className="mt-3 text-sm text-white/75" dangerouslySetInnerHTML={{ __html: item.a }} />
              </details>
            ))}
          </div>
        </section>

        <div className="h-56" aria-hidden="true" />

        <section
          id="contact"
          className="relative mt-0 overflow-hidden rounded-3xl bg-white/[0.04] p-12 text-center md:p-16"
          style={{
            ['--mx' as string]: '50%',
            ['--my' as string]: '50%',
          }}
          onPointerMove={(e) => {
            const r = e.currentTarget.getBoundingClientRect();
            const x = ((e.clientX - r.left) / r.width) * 100;
            const y = ((e.clientY - r.top) / r.height) * 100;
            e.currentTarget.style.setProperty('--mx', `${x}%`);
            e.currentTarget.style.setProperty('--my', `${y}%`);
          }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              background:
                'radial-gradient(160px 160px at var(--mx) var(--my), rgba(56,189,248,0.26), transparent 72%), radial-gradient(220px 220px at calc(var(--mx) + 6%) calc(var(--my) + 4%), rgba(139,92,246,0.2), transparent 74%)',
            }}
          />
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.22em] text-cyan-100/80">Ready for real growth?</p>
            <h3 className="mt-3 font-display text-3xl font-semibold">Let’s build your next growth move.</h3>
            <p className="mx-auto mt-3 max-w-2xl text-white/75">
              We’ll review where you are now, show you what to fix first, and give you a clear plan to grow
              car count, lead quality, and review volume.
            </p>
            <a
              href={primaryCta}
              className="mt-7 inline-flex rounded-full bg-gradient-to-r from-cyan-300 to-violet-300 px-7 py-3 text-sm font-bold text-[#081022] transition hover:brightness-110"
            >
              Book a Call
            </a>
          </div>
        </section>

        <div className="fixed inset-x-0 bottom-3 z-30 px-4 md:hidden">
          <a href={primaryCta} className="block rounded-full bg-gradient-to-r from-cyan-300 to-violet-300 px-6 py-3 text-center text-base font-bold text-[#081022] shadow-[0_16px_36px_-16px_rgba(125,226,255,0.85)]">
            Book a Call
          </a>
        </div>

      </main>
    </div>
  );
}
