import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

const services = [
  {
    icon: '🖥️',
    title: 'Website Build & Design',
    description: 'Professional, fast, mobile-first sites built for conversions. We design around your local market, your services, and the customers you want to attract.',
    benefits: [
      'Mobile-first responsive design',
      'Fast load times (Core Web Vitals optimized)',
      'Clear calls-to-action that drive bookings',
      'Integrated contact forms and click-to-call',
    ],
    accent: '#E85D2A',
  },
  {
    icon: '📍',
    title: 'Local SEO & Google Maps',
    description: 'Dominate the map pack in your city. We optimize every signal Google looks for to rank your shop above competitors in local search results.',
    benefits: [
      'On-page SEO for every service page',
      'Local citation building',
      'Google Maps pack ranking strategy',
      'Monthly ranking reports',
    ],
    accent: '#D4A853',
  },
  {
    icon: '📋',
    title: 'Google Business Profile Optimization',
    description: 'Your GBP is your most powerful local marketing tool. We do complete setup, ongoing management, and regular posts to keep you top of mind.',
    benefits: [
      'Complete profile setup & verification',
      'Keyword-optimized business description',
      'Photo and post management',
      'Q&A and review response management',
    ],
    accent: '#E85D2A',
  },
  {
    icon: '⭐',
    title: 'Review Funnels',
    description: 'Automated systems to get more 5-star reviews. We build a follow-up sequence that turns happy customers into public advocates — hands free.',
    benefits: [
      'Post-visit automated follow-up',
      'SMS and email review requests',
      'Filter unhappy customers before they post',
      'Review dashboard for all platforms',
    ],
    accent: '#D4A853',
  },
  {
    icon: '🔧',
    title: 'Managed Hosting & Support',
    description: 'Hands-off hosting with monthly updates. We handle the technical side so you can focus on fixing cars, not managing a website.',
    benefits: [
      'Fast, secure managed hosting',
      'Monthly content updates',
      'Security monitoring and backups',
      'Priority support from our team',
    ],
    accent: '#E85D2A',
  },
]

export default function Services() {
  return (
    <div style={{ backgroundColor: '#FEFCF9' }}>
      <Head>
        <title>Services | WrenchWorks Digital</title>
        <meta name="description" content="Digital marketing services for auto repair shops: website design, local SEO, Google Business Profile, review funnels, and managed hosting." />
        <link rel="canonical" href="https://www.wrenchworksdigital.com/services/" />
        <meta property="og:title" content="Services | WrenchWorks Digital" />
        <meta property="og:description" content="Digital marketing services for auto repair shops: website design, local SEO, Google Business Profile, review funnels, and managed hosting." />
        <meta property="og:image" content="/images/hero_shop_owner_laptop.png" />
        <meta property="og:url" content="https://www.wrenchworksdigital.com/services" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="WrenchWorks Digital" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Header />

      {/* ── Page Header ── */}
      <section
        className="grain-overlay py-24 text-center relative overflow-hidden"
        style={{ backgroundColor: '#1C1C1E' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 70% at 50% 50%, rgba(212,168,83,0.1) 0%, transparent 70%)' }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
          <p className="eyebrow mb-4" style={{ color: '#D4A853' }}>What We Offer</p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5">
            Our Services
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: '#E8E2DC' }}>
            Everything your shop needs to dominate locally — from a brand-new website to a full growth system.
          </p>
        </div>
      </section>

      {/* ── Services List ── */}
      <section className="py-24 sm:py-32" style={{ backgroundColor: '#F5F0EB' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col gap-10">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className={`rounded-2xl overflow-hidden flex flex-col md:flex-row ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              style={{ backgroundColor: '#FEFCF9', boxShadow: '0 4px 24px rgba(28,28,30,0.08)' }}
            >
              <div
                className="md:w-1/3 flex items-center justify-center p-12"
                style={{ backgroundColor: i % 2 === 0 ? '#1C1C1E' : '#2C2A28' }}
              >
                <div className="text-6xl">{s.icon}</div>
              </div>
              <div className="flex-1 p-8 sm:p-10 flex flex-col gap-5">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold" style={{ color: '#1C1C1E' }}>{s.title}</h2>
                <p className="leading-relaxed" style={{ color: '#6B6560' }}>{s.description}</p>
                <ul className="flex flex-col gap-2.5 mt-1">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm" style={{ color: '#2C2A28' }}>
                      <span className="font-bold mt-0.5" style={{ color: s.accent }}>✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-block mt-2 px-7 py-3 rounded-xl text-white font-semibold text-sm transition-all duration-200 shadow-md w-fit"
                  style={{ backgroundColor: '#E85D2A' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.backgroundColor = '#cf4e1e' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.backgroundColor = '#E85D2A' }}
                >
                  Get Started →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="grain-overlay py-24 sm:py-32 relative overflow-hidden"
        style={{ backgroundColor: '#2C2A28' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(232,93,42,0.15) 0%, transparent 70%)' }}
        />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center"
        >
          <p className="eyebrow mb-5" style={{ color: '#D4A853' }}>Start Today</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Not sure where to start?
          </h2>
          <p className="text-lg mb-10 leading-relaxed" style={{ color: '#E8E2DC' }}>
            Book a free 30-minute strategy call and we will build a custom plan for your shop.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 rounded-xl text-white font-bold text-lg shadow-lg transition-all duration-200"
            style={{ backgroundColor: '#E85D2A' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(232,93,42,0.4)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '' }}
          >
            Book Your Free Call
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}
