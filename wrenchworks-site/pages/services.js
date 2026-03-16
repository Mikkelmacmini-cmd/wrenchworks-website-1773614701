import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Reveal({ children, delay = 0, className = "" }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }} className={className}>
      {children}
    </motion.div>
  );
}

const services = [
  { title: "Website Build", titleParts: ["Website", "Build"], description: "Beautiful, fast-loading websites designed to convert visitors into booked appointments. Mobile-first, shop-owner-friendly, and built to rank on Google.", image: "/images/hero_shop_owner_laptop.png", href: "/services/website-build", features: ["Custom design", "Mobile-first", "Fast load times", "SEO ready"] },
  { title: "Local SEO & Google Maps", titleParts: ["Local SEO", "& Maps"], description: "Dominate the map pack and organic results for high-intent searches. We handle keyword research, on-page optimization, link building, and citation management.", image: "/images/scene-02.png", href: "/services/local-seo", features: ["Keyword research", "Citation building", "Map pack targeting", "Monthly reporting"] },
  { title: "Google Business Profile", titleParts: ["Google Business", "Profile"], description: "Fully optimized GBP listings with the right categories, service areas, photos, posts, and Q&A to surface your shop at the top of local results.", image: "/images/diagnostic_dashboard_mock.png", href: "/services/gbp-optimization", features: ["Profile optimization", "Photo strategy", "Weekly posts", "Q&A management"] },
  { title: "Review Funnels & Reputation", titleParts: ["Review Funnels", "& Reputation"], description: "Automated follow-up sequences that turn satisfied customers into 5-star reviewers — building trust and ranking signals simultaneously.", image: "/images/review_funnel_diagram.png", href: "/services/review-funnels", features: ["SMS/email follow-up", "Review monitoring", "Response templates", "Rating analytics"] },
  { title: "Managed Hosting & Support", titleParts: ["Managed Hosting", "& Support"], description: "Enterprise-grade hosting, daily backups, security monitoring, and ongoing updates so you never have to think about your website again.", image: "/images/topdown_laptop_coffee_paperwork.png", href: "/services/managed-hosting", features: ["99.9% uptime SLA", "Daily backups", "SSL & security", "Priority support"] },
];

export default function Services() {
  return (
    <>
      <Head>
        <title>Services — WrenchWorks Digital</title>
        <meta name="description" content="Auto repair marketing services: website design, local SEO, Google Business Profile, review funnels, and managed hosting." />
      </Head>
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-sm font-medium text-gray-500 mb-4 uppercase tracking-wide">Our Solutions</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-5xl lg:text-7xl font-black text-gray-900 leading-tight">
            Everything<span className="text-orange-500">.</span><br />Your Shop<span className="text-orange-500">.</span><br />Needs<span className="text-orange-500">.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="mt-6 text-lg text-gray-600 max-w-2xl">
            Five purpose-built services that work together to fill your bays, build your reputation, and grow your revenue — all managed by one team.
          </motion.p>
        </div>
      </section>

      {/* Alternating service rows */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          {services.map((svc, i) => (
            <div key={i} className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 lg:gap-20 items-center py-20 ${i < services.length - 1 ? "border-b border-gray-100" : ""}`}>
              <Reveal className="flex-1" delay={0.1}>
                <div>
                  <Link href={svc.href}>
                    <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4 hover:text-orange-500 transition-colors">
                      {svc.titleParts[0]}<span className="text-orange-500">.</span> {svc.titleParts[1]}<span className="text-orange-500">.</span>
                    </h2>
                  </Link>
                  <p className="text-gray-600 leading-relaxed mb-6 max-w-md">{svc.description}</p>
                  <ul className="space-y-2 mb-6">
                    {svc.features.map((f, fi) => (
                      <li key={fi} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="text-orange-500 font-bold">→</span> {f}
                      </li>
                    ))}
                  </ul>
                  <Link href={svc.href} className="text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors">Learn More →</Link>
                </div>
              </Reveal>
              <Reveal className="flex-1 w-full" delay={0.2}>
                <div className="rounded-2xl overflow-hidden bg-gray-100 aspect-video">
                  <img src={svc.image} className="w-full h-full object-cover" alt={svc.title} />
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#1a2332" }} className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">Ready to Grow<span className="text-orange-500">?</span></h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">Let's talk about which services make sense for your shop right now.</p>
            <Link href="/contact" className="bg-white text-gray-900 font-bold px-8 py-4 rounded-full hover:bg-orange-500 hover:text-white transition-colors duration-200">Get Started →</Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
