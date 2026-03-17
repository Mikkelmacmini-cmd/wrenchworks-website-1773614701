import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FadeIn from '../components/FadeIn'

const cases = [
  {
    client: 'Denver Auto Care',
    location: 'Denver, CO',
    image: '/images/topdown_laptop_coffee_paperwork.png',
    result: '+340% Organic Traffic',
    period: '4 Months',
    challenge: 'Denver Auto Care was invisible online — no Google presence, an outdated website, and losing customers to newer shops with better SEO.',
    solution: 'We rebuilt their website from scratch, optimized their Google Business Profile, and launched a full local SEO campaign targeting high-intent keywords in the Denver metro.',
    metrics: [
      { label: 'Organic Traffic', value: '+340%' },
      { label: 'Google Map Pack', value: 'Top 3' },
      { label: 'Monthly Leads', value: '3× increase' },
    ],
    overlayColor: 'rgba(28,28,30,0.75)',
  },
  {
    client: 'Precision Tune Mesa',
    location: 'Mesa, AZ',
    image: '/images/diagnostic_dashboard_mock.png',
    result: '#1 Google Maps Ranking',
    period: '6 Weeks',
    challenge: 'Precision Tune was stuck at position #7 in the local map pack despite being one of the best shops in Mesa. They were losing walk-ins to competitors with less experience.',
    solution: 'We performed a full Google Business Profile audit, built 40+ local citations, and ran a review funnel that collected 38 new 5-star reviews in the first two months.',
    metrics: [
      { label: 'Map Pack Position', value: '#1' },
      { label: 'New Reviews', value: '38 in 60 days' },
      { label: 'Time to Rank #1', value: '6 Weeks' },
    ],
    overlayColor: 'rgba(44,42,40,0.75)',
  },
  {
    client: 'Eagle Auto Colorado Springs',
    location: 'Colorado Springs, CO',
    image: '/images/virtual_meeting_shop_owner.png',
    result: '2× Phone Call Volume',
    period: '90 Days',
    challenge: 'Eagle Auto had a dated website that drove almost no inbound calls. Customers would land on the page and immediately bounce to a competitor.',
    solution: 'A full website rebuild with mobile-first design, click-to-call buttons, and a homepage built around local search intent doubled their inbound call volume within 90 days.',
    metrics: [
      { label: 'Phone Calls', value: '2× increase' },
      { label: 'Bounce Rate', value: '−48%' },
      { label: 'Page Speed Score', value: '94/100' },
    ],
    overlayColor: 'rgba(28,28,30,0.75)',
  },
]

export default function CaseStudies() {
  return (
    <div style={{ backgroundColor: '#FEFCF9' }}>
      <Head>
        <title>Case Studies | WrenchWorks Digital</title>
        <meta name="description" content="Real results for auto repair shops: +340% traffic, #1 Google Maps ranking, 2x phone calls." />
        <link rel="canonical" href="https://www.wrenchworksdigital.com/case-studies/" />
        <meta property="og:title" content="Case Studies | WrenchWorks Digital" />
        <meta property="og:description" content="Real results for auto repair shops: +340% traffic, #1 Google Maps ranking, 2x phone calls." />
        <meta property="og:image" content="/images/hero_shop_owner_laptop.png" />
        <meta property="og:url" content="https://www.wrenchworksdigital.com/case-studies" />
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
        {/* Decorative circles */}
        <svg className="absolute top-8 left-8 opacity-10 hidden lg:block" width="200" height="200" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="98" stroke="#D4A853" strokeWidth="1" />
          <circle cx="100" cy="100" r="60" stroke="#D4A853" strokeWidth="0.5" />
        </svg>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
          <p className="eyebrow mb-4" style={{ color: '#D4A853' }}>Proof of Work</p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5">
            Case Studies
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: '#E8E2DC' }}>
            Real shops. Real results. Here is what we have helped our clients achieve.
          </p>
        </div>
      </section>

      {/* ── Case Studies ── */}
      <section className="py-24 sm:py-32" style={{ backgroundColor: '#F5F0EB' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col gap-14">
          {cases.map((c) => (
            <FadeIn key={c.client}>
              <div
                className="rounded-2xl overflow-hidden"
                style={{ backgroundColor: '#FEFCF9', boxShadow: '0 4px 32px rgba(28,28,30,0.09)' }}
              >
                {/* Hero Image */}
                <div className="relative h-60 sm:h-80">
                  <img src={c.image} alt={c.client} className="w-full h-full object-cover" />
                  <div className="absolute inset-0" style={{ backgroundColor: c.overlayColor }} />
                  <div className="absolute inset-0 flex flex-col items-start justify-end p-8">
                    <p className="eyebrow mb-2" style={{ color: '#D4A853' }}>{c.location}</p>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">{c.client}</h2>
                    <p className="font-semibold mt-1 text-lg" style={{ color: '#E85D2A' }}>
                      {c.result} in {c.period}
                    </p>
                  </div>
                </div>

                <div className="p-8 sm:p-10">
                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-10">
                    {c.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="text-center p-5 rounded-2xl"
                        style={{ backgroundColor: '#F5F0EB' }}
                      >
                        <p className="font-serif text-2xl font-bold" style={{ color: '#E85D2A' }}>{m.value}</p>
                        <p className="text-xs mt-1 font-medium uppercase tracking-wider" style={{ color: '#6B6560' }}>{m.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <p className="eyebrow mb-3">The Challenge</p>
                      <p className="text-sm leading-relaxed" style={{ color: '#6B6560' }}>{c.challenge}</p>
                    </div>
                    <div>
                      <p className="eyebrow mb-3">Our Solution</p>
                      <p className="text-sm leading-relaxed" style={{ color: '#6B6560' }}>{c.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
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
            Get My Free Growth Plan
          </Link>
        </FadeIn>
      </section>

      <Footer />
    </div>
  )
}
