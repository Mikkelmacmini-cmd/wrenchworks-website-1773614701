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

const cases = [
  { shop: "All-Star Auto Repair", location: "Phoenix, AZ", stat: "+340%", metric: "Organic Traffic", image: "/images/scene-01.png", desc: "A 3-bay independent shop struggling with online visibility. We rebuilt their website, optimized their GBP, and launched a local SEO campaign. In 90 days, organic traffic grew 340% and monthly calls doubled.", tags: ["Website Build", "Local SEO", "GBP"] },
  { shop: "Greenfield Tire & Service", location: "Austin, TX", stat: "#1", metric: "Map Pack Ranking", image: "/images/scene-02.png", desc: "A tire and alignment shop competing against national chains. We focused on hyper-local content and GBP authority signals. They now rank #1 for 12 of their 15 target keywords.", tags: ["GBP Optimization", "Local SEO"] },
  { shop: "Metro Fleet Mechanics", location: "Chicago, IL", stat: "4.9★", metric: "Average Rating (200+ reviews)", image: "/images/scene-03.png", desc: "A fleet service shop with a mixed reputation online. Our review funnel system turned satisfied customers into active reviewers. They went from 3.6 stars to 4.9 stars in 60 days.", tags: ["Review Funnels", "Reputation"] },
  { shop: "Highway Pro Auto", location: "Denver, CO", stat: "2.4×", metric: "Lead Volume Increase", image: "/images/hero_shop_owner_laptop.png", desc: "A performance shop with no digital presence. We built their website from scratch with conversion-focused design. Lead volume more than doubled in the first month.", tags: ["Website Build", "Managed Hosting"] },
  { shop: "Lakeside Car Care", location: "Nashville, TN", stat: "98%", metric: "Positive Review Rate", image: "/images/topdown_laptop_coffee_paperwork.png", desc: "A family-owned shop serving the same community for 30 years. Our review automation helped them capture the loyalty their customers already felt. 98% positive review rate achieved.", tags: ["Review Funnels"] },
  { shop: "Summit Service Center", location: "Seattle, WA", stat: "60 days", metric: "Time to #1 Ranking", image: "/images/diagnostic_dashboard_mock.png", desc: "A newly opened shop that needed to establish authority fast. Combined GBP optimization, local citations, and content strategy got them to page 1 in just 60 days.", tags: ["Local SEO", "GBP Optimization"] },
];

export default function CaseStudies() {
  return (
    <>
      <Head>
        <title>Case Studies — WrenchWorks Digital</title>
        <meta name="description" content="Real results for real auto repair shops. See how WrenchWorks Digital grows traffic, rankings, and revenue." />
      </Head>
      <Header />

      {/* Dark hero */}
      <section style={{ backgroundColor: "#1a2332" }} className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-sm font-medium text-orange-500 mb-4 uppercase tracking-wide">Results</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
            Real Shops<span className="text-orange-500">.</span><br />Real Results<span className="text-orange-500">.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-gray-400 text-lg max-w-xl">
            Every client engagement is built around measurable outcomes. Here's what we've accomplished for shops like yours.
          </motion.p>
        </div>
      </section>

      {/* Case study grid */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((cs, i) => (
              <Reveal key={i} delay={(i % 3) * 0.1}>
                <div className="border border-gray-200 rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-200 h-full flex flex-col">
                  <div className="aspect-video bg-gray-100">
                    <img src={cs.image} className="w-full h-full object-cover" alt={cs.shop} />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {cs.tags.map((tag, ti) => (
                        <span key={ti} className="text-xs bg-orange-50 text-orange-600 font-semibold px-2.5 py-1 rounded-full">{tag}</span>
                      ))}
                    </div>
                    <p className="text-sm text-gray-500 mb-1">{cs.shop} — {cs.location}</p>
                    <p className="text-4xl font-black text-orange-500 mb-1">{cs.stat}</p>
                    <p className="text-sm font-semibold text-gray-700 mb-4">{cs.metric}</p>
                    <p className="text-gray-600 text-sm leading-relaxed flex-1">{cs.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#1a2332" }} className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">Your Shop<span className="text-orange-500">.</span> Next<span className="text-orange-500">.</span></h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">Ready to become our next success story? Let's talk.</p>
            <Link href="/contact" className="bg-white text-gray-900 font-bold px-8 py-4 rounded-full hover:bg-orange-500 hover:text-white transition-colors duration-200">Start Your Growth →</Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
