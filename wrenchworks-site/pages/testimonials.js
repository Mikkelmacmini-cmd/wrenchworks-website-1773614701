import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FadeIn from '../components/FadeIn'

export default function Testimonials() {
  return (
    <div style={{ backgroundColor: '#FEFCF9' }}>
      <Head>
        <title>Testimonials | WrenchWorks Digital</title>
        <meta name="description" content="Real testimonials from auto repair shop owners who grew their business with WrenchWorks Digital." />
        <link rel="canonical" href="https://www.wrenchworksdigital.com/testimonials/" />
        <meta property="og:title" content="Testimonials | WrenchWorks Digital" />
        <meta property="og:description" content="Real testimonials from auto repair shop owners who grew their business with WrenchWorks Digital." />
        <meta property="og:image" content="/images/hero_shop_owner_laptop.png" />
        <meta property="og:url" content="https://www.wrenchworksdigital.com/testimonials" />
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
          style={{ background: 'radial-gradient(ellipse 60% 70% at 50% 50%, rgba(232,93,42,0.1) 0%, transparent 70%)' }}
        />
        <svg className="absolute top-8 left-8 opacity-10 hidden lg:block" width="200" height="200" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="98" stroke="#D4A853" strokeWidth="1" />
          <circle cx="100" cy="100" r="60" stroke="#D4A853" strokeWidth="0.5" />
        </svg>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
          <p className="eyebrow mb-4" style={{ color: '#D4A853' }}>What Shops Are Saying</p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5">
            Testimonials
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: '#E8E2DC' }}>
            Real shops. Real results. Here is what we have helped our clients achieve.
          </p>
        </div>
      </section>

      {/* ── Testimonials Placeholder ── */}
      <section className="py-24 sm:py-32" style={{ backgroundColor: '#F5F0EB' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="italic" style={{ color: '#6B6560' }}>Real testimonials coming soon.</p>
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
        <FadeIn className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="eyebrow mb-5" style={{ color: '#D4A853' }}>Your Turn</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Your shop could be next.
          </h2>
          <p className="text-lg mb-10 leading-relaxed" style={{ color: '#E8E2DC' }}>
            Let us show you what is possible with a free growth plan tailored to your market.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 rounded-xl text-white font-bold text-lg shadow-lg transition-all duration-200"
            style={{ backgroundColor: '#E85D2A' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(232,93,42,0.4)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '' }}
          >
            Schedule a Call
          </Link>
        </FadeIn>
      </section>

      <Footer />
    </div>
  )
}
