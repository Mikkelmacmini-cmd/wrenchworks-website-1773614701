import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

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
    color: '#1a2332',
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
    color: '#f97316',
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
    color: '#1a2332',
  },
]

export default function CaseStudies() {
  return (
    <div>
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

      {/* Page Header */}
      <section style={{ backgroundColor: '#1a2332' }} className="py-16 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Case Studies</h1>
          <p className="text-gray-300 text-lg">Real shops. Real results. Here is what we have helped our clients achieve.</p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col gap-16">
          {cases.map((c, i) => (
            <div key={c.client} className="bg-white rounded-2xl shadow-sm overflow-hidden">
              {/* Hero Image */}
              <div className="relative h-56 sm:h-72">
                <img
                  src={c.image}
                  alt={c.client}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0" style={{ backgroundColor: `${c.color}cc` }} />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-8">
                  <p className="text-sm font-semibold uppercase tracking-widest text-orange-300 mb-1">{c.location}</p>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white">{c.client}</h2>
                  <p className="text-white text-lg font-bold mt-1" style={{ color: '#f97316' }}>{c.result} in {c.period}</p>
                </div>
              </div>

              <div className="p-8">
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {c.metrics.map((m) => (
                    <div key={m.label} className="text-center p-4 rounded-xl" style={{ backgroundColor: '#f9fafb' }}>
                      <p className="text-2xl font-extrabold" style={{ color: '#f97316' }}>{m.value}</p>
                      <p className="text-xs text-gray-500 mt-1 font-medium">{m.label}</p>
                    </div>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-sm uppercase tracking-wider mb-2" style={{ color: '#1a2332' }}>The Challenge</h3>
                    <p className="text-gray-600 text-sm">{c.challenge}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm uppercase tracking-wider mb-2" style={{ color: '#1a2332' }}>Our Solution</h3>
                    <p className="text-gray-600 text-sm">{c.solution}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#f97316' }} className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Your shop could be next.</h2>
          <p className="text-white text-lg mb-8 opacity-90">Let us show you what is possible with a free growth plan tailored to your market.</p>
          <Link
            href="/contact"
            style={{ backgroundColor: '#1a2332' }}
            className="inline-block px-8 py-4 rounded-lg text-white font-bold text-lg hover:opacity-90 transition-opacity"
          >
            Get My Free Growth Plan
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
