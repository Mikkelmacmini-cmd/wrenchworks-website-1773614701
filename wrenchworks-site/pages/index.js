import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Animated stat counter
function StatCounter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  useEffect(() => {
    if (!inView) return;
    const end = parseInt(target.replace(/[^0-9]/g, ""));
    const duration = 1500;
    const step = Math.ceil(end / (duration / 16));
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= end) { setCount(end); clearInterval(timer); }
      else setCount(current);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);
  const prefix = target.startsWith("#") ? "#" : "";
  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

// Scroll-reveal wrapper
function Reveal({ children, delay = 0, className = "" }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Animated headline - each letter staggered
function AnimatedHeadline({ text, className = "" }) {
  const lines = text.split("\n");
  return (
    <div className={className}>
      {lines.map((line, li) => (
        <div key={li} className="overflow-hidden">
          {line.split("").map((char, ci) => (
            <motion.span
              key={ci}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (li * line.length + ci) * 0.03 }}
              style={{ display: char === " " ? "inline" : "inline-block" }}
            >
              {char === " " ? "\u00a0" : char}
            </motion.span>
          ))}
        </div>
      ))}
    </div>
  );
}

const solutions = [
  {
    title: "Website Build",
    titlePunc: ["Website", " Build"],
    description: "Beautiful, fast-loading websites designed to convert visitors into booked appointments. Mobile-first, shop-owner-friendly, and built to rank.",
    image: "/images/hero_shop_owner_laptop.png",
    href: "/services/website-build",
  },
  {
    title: "Local SEO & Google Maps",
    titlePunc: ["Local SEO", " & Maps"],
    description: "Dominate the map pack and organic results for high-intent searches like 'oil change near me' and 'transmission repair [city]'.",
    image: "/images/scene-02.png",
    href: "/services/local-seo",
  },
  {
    title: "Google Business Profile",
    titlePunc: ["Google Business", " Profile"],
    description: "Fully optimized GBP listings that surface your shop at the top of local results, complete with categories, photos, and posts.",
    image: "/images/diagnostic_dashboard_mock.png",
    href: "/services/gbp-optimization",
  },
  {
    title: "Review Funnels & Reputation",
    titlePunc: ["Review Funnels", " & Reputation"],
    description: "Automated follow-up sequences that turn satisfied customers into 5-star reviewers — building trust and ranking signals simultaneously.",
    image: "/images/review_funnel_diagram.png",
    href: "/services/review-funnels",
  },
  {
    title: "Managed Hosting & Support",
    titlePunc: ["Managed Hosting", " & Support"],
    description: "Enterprise-grade hosting, daily backups, security monitoring, and ongoing updates — so you never have to think about your website again.",
    image: "/images/topdown_laptop_coffee_paperwork.png",
    href: "/services/managed-hosting",
  },
];

const steps = [
  { num: "01", title: "Discovery", desc: "We learn your shop, market, and goals inside out." },
  { num: "02", title: "Build & Launch", desc: "Website live in days. GBP optimized. Systems activated." },
  { num: "03", title: "Rank & Grow", desc: "SEO compounds. Traffic climbs. Phones start ringing." },
  { num: "04", title: "Reviews & Retain", desc: "Automated review funnels build trust on autopilot." },
];

export default function Home() {

  return (
    <>
      <Head>
        <title>WrenchWorks Digital — Auto Repair Marketing That Fills Bays</title>
        <meta name="description" content="WrenchWorks Digital delivers website design, local SEO, Google Business Profile optimization, and review systems for auto repair shops." />
        <meta property="og:title" content="WrenchWorks Digital — Auto Repair Marketing That Fills Bays" />
        <meta property="og:description" content="From single-location shops to multi-bay operations, WrenchWorks Digital helps auto repair shops dominate local search." />
        <meta property="og:image" content="/images/og-image.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="min-h-screen bg-white flex flex-col justify-center pt-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 w-full py-24">
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium text-gray-500 mb-8 tracking-wide uppercase"
          >
            Auto Repair Marketing
          </motion.p>

          {/* Headline */}
          <div className="text-7xl lg:text-8xl font-black tracking-tight text-gray-900 leading-none mb-4 relative">
            <AnimatedHeadline text={"Where Growth"} className="block" />
            {/* "Meets The" line with floating images */}
            <div className="relative inline-block">
              <AnimatedHeadline text={"Meets The"} className="block" />
              {/* Floating circle images */}
              <img src="/images/scene-01.png" className="animate-float hidden lg:block absolute rounded-full object-cover border-4 border-white shadow-lg" style={{ width: 64, height: 64, top: "-30px", left: "320px" }} alt="" />
              <img src="/images/scene-02.png" className="animate-float-delay hidden lg:block absolute rounded-full object-cover border-4 border-white shadow-lg" style={{ width: 52, height: 52, top: "20px", left: "430px" }} alt="" />
              <img src="/images/scene-03.png" className="animate-float-delay2 hidden lg:block absolute rounded-full object-cover border-4 border-white shadow-lg" style={{ width: 70, height: 70, top: "-20px", left: "540px" }} alt="" />
              <img src="/images/scene-04.png" className="animate-float hidden lg:block absolute rounded-full object-cover border-4 border-white shadow-lg" style={{ width: 56, height: 56, top: "30px", left: "650px" }} alt="" />
            </div>
            <AnimatedHeadline text={"Shop Floor."} className="block" />
          </div>

          {/* Body copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-10 max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <img src="/images/logo.png" className="h-8 w-auto" alt="" />
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              From single-location shops to multi-bay operations, WrenchWorks Digital delivers website design, local SEO, and review systems that fill bays and grow revenue.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            <a href="/#solutions" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-7 py-3.5 rounded-full transition-colors duration-200">
              Discover Our Solutions
            </a>
            <a href="/#results" className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-semibold px-7 py-3.5 rounded-full transition-colors duration-200">
              See Our Results
            </a>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-16 flex flex-col items-start gap-1"
          >
            <span className="text-sm text-gray-400">↓ Scroll for more</span>
          </motion.div>
        </div>
      </section>

      {/* ── SOLUTIONS ───────────────────────────────────────────── */}
      <section id="solutions" className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
            <Reveal>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                Smart<span className="text-orange-500">.</span> Scalable<span className="text-orange-500">.</span> <span className="text-orange-500">Local.</span>
              </h2>
              <p className="mt-4 text-gray-600 max-w-lg">Our systems empower shop owners to attract more customers, convert more calls, and dominate their local market.</p>
            </Reveal>
            <Reveal delay={0.1}>
              <a href="/#solutions" className="text-sm font-semibold text-gray-900 hover:text-orange-500 transition-colors">Discover Our Solutions →</a>
            </Reveal>
          </div>

          {/* Alternating solution rows */}
          {solutions.map((sol, i) => (
            <div key={i} className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 lg:gap-20 items-center py-16 ${i < solutions.length - 1 ? "border-b border-gray-100" : ""}`}>
              <Reveal className="flex-1" delay={0.1}>
                <div>
                  <h3 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
                    {sol.titlePunc[0]}<span className="text-orange-500">.</span>{sol.titlePunc[1]}<span className="text-orange-500">.</span>
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 max-w-md">{sol.description}</p>
                  <Link href={sol.href} className="text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors">Learn More →</Link>
                </div>
              </Reveal>
              <Reveal className="flex-1 w-full" delay={0.2}>
                <div className="rounded-2xl overflow-hidden bg-gray-100 aspect-video">
                  <img src={sol.image} className="w-full h-full object-cover" alt={sol.title} />
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* ── TRANSFORMATIVE SECTION ──────────────────────────────── */}
      <section className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-6">
                Transformative<span className="text-orange-500">.</span> Proven<span className="text-orange-500">.</span> Local<span className="text-orange-500">.</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8 max-w-lg">
                We're not a generic agency. We're shop owners' secret weapon — purpose-built systems for auto repair businesses that want to dominate their local market.
              </p>
              <Link href="/case-studies" className="text-sm font-semibold text-gray-900 hover:text-orange-500 transition-colors">About Us →</Link>
            </Reveal>
            <div className="grid grid-cols-1 gap-4">
              {[
                { title: "Results-Driven", desc: "We measure everything. If it doesn't fill bays, we fix it." },
                { title: "Fast Launch", desc: "Live in days, not months. No long contracts." },
                { title: "Full Service", desc: "One vendor for website, SEO, reviews, and hosting." },
              ].map((card, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="border border-gray-200 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-200 cursor-default">
                    <h4 className="font-black text-gray-900 text-lg mb-2">{card.title}<span className="text-orange-500">.</span></h4>
                    <p className="text-gray-500 text-sm">{card.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ───────────────────────────────────────────────── */}
      <section className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <Reveal>
              <div className="relative">
                <img src="/images/scene-03.png" className="animate-float absolute rounded-full object-cover border-4 border-white shadow-lg" style={{ width: 80, height: 80, top: "-20px", right: "40px" }} alt="" />
                <p className="text-7xl lg:text-8xl font-black text-gray-900">
                  <StatCounter target="340" suffix="%" />
                </p>
                <p className="text-xl font-semibold text-gray-600 mt-2">Average Traffic Growth</p>
                <p className="text-sm text-gray-400 mt-1">across client websites in first 90 days</p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="relative">
                <img src="/images/scene-05.png" className="animate-float-delay absolute rounded-full object-cover border-4 border-white shadow-lg" style={{ width: 70, height: 70, top: "-10px", right: "60px" }} alt="" />
                <p className="text-7xl lg:text-8xl font-black text-gray-900">
                  <StatCounter target="#1" />
                </p>
                <p className="text-xl font-semibold text-gray-600 mt-2">Map Pack Rankings Achieved</p>
                <p className="text-sm text-gray-400 mt-1">for competitive auto repair keywords</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────────────────────────── */}
      <section id="process" style={{ backgroundColor: "#1a2332" }} className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <Reveal>
              <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
                How<span className="text-orange-500">.</span> It<span className="text-orange-500">.</span> Works<span className="text-orange-500">.</span>
              </h2>
              <p className="mt-4 text-gray-400 max-w-lg">WrenchWorks' plug-and-play marketing model flexes with your shop's needs, giving you expert support without the overhead.</p>
            </Reveal>
            <Reveal delay={0.1}>
              <a href="/#solutions" className="text-sm font-semibold text-gray-400 hover:text-white transition-colors">Our Solutions →</a>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="border border-gray-700 rounded-2xl p-6 hover:border-orange-500 transition-colors duration-200">
                  <p className="text-orange-500 font-black text-2xl mb-4">{step.num}</p>
                  <h3 className="text-white font-black text-xl mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT TO EXPECT ──────────────────────────────────────── */}
      <section id="results" className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="mb-4">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900">What to<strong className="text-orange-500">.</strong> Expect<strong className="text-orange-500">.</strong></h2>
          </Reveal>
          <Reveal className="mb-16" delay={0.1}>
            <p className="text-gray-600 text-lg">Most shops start seeing measurable movement within the first 90 days.</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal delay={0.1}>
              <div className="border border-gray-200 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
                <p className="text-sm font-semibold text-orange-500 mb-3">Week 1–2</p>
                <h3 className="text-xl font-black text-gray-900 mb-3">Live & Optimized</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Your new site is live, indexed, and technically optimized. Google Business Profile is claimed, verified, and fully built out.</p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="border border-gray-200 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
                <p className="text-sm font-semibold text-orange-500 mb-3">Days 30–60</p>
                <h3 className="text-xl font-black text-gray-900 mb-3">Ranking Movement</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Local keyword rankings start climbing. You appear in the map pack for your primary services. Review requests go out automatically.</p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="border border-gray-200 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
                <p className="text-sm font-semibold text-orange-500 mb-3">Days 60–90</p>
                <h3 className="text-xl font-black text-gray-900 mb-3">More Calls, More Bays</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Phone call volume increases from organic traffic. Reviews build social proof. You stop relying on word-of-mouth alone.</p>
              </div>
            </Reveal>
          </div>
          <Reveal className="mt-10" delay={0.2}>
            <p className="text-sm text-gray-400 italic">Results vary by market and competition. We set honest expectations upfront and track everything.</p>
          </Reveal>
        </div>
      </section>

      {/* ── CTA STRIP ───────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#1a2332" }} className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-4">
              Streamline Your<br /><span className="text-orange-500">Growth.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">Discover how our shop marketing solutions can adapt to your needs.</p>
            <Link href="/contact" className="bg-white text-gray-900 font-bold px-8 py-4 rounded-full hover:bg-orange-500 hover:text-white transition-colors duration-200">
              Contact Us →
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
