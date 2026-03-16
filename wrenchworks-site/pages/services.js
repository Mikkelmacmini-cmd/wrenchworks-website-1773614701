import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

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
  },
]

export default function Services() {
  return (
    <div>
      <Head>
        <title>Services — WrenchWorks Digital</title>
        <meta name="description" content="Digital marketing services for auto repair shops: website design, local SEO, Google Business Profile, review funnels, and managed hosting." />
      </Head>

      <Header />

      {/* Page Header */}
      <section style={{ backgroundColor: '#1a2332' }} className="py-16 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Our Services</h1>
          <p className="text-gray-300 text-lg">Everything your shop needs to dominate locally — from a brand-new website to a full growth system.</p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col gap-12">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`bg-white rounded-xl shadow-sm overflow-hidden flex flex-col md:flex-row ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="md:w-1/3 flex items-center justify-center p-10" style={{ backgroundColor: i % 2 === 0 ? '#1a2332' : '#f97316' }}>
                <div className="text-6xl">{s.icon}</div>
              </div>
              <div className="flex-1 p-8 flex flex-col gap-4">
                <h2 className="text-2xl font-extrabold" style={{ color: '#1a2332' }}>{s.title}</h2>
                <p className="text-gray-600">{s.description}</p>
                <ul className="flex flex-col gap-2 mt-2">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-gray-700">
                      <span style={{ color: '#f97316' }} className="font-bold mt-0.5">✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  style={{ backgroundColor: '#f97316' }}
                  className="inline-block mt-4 px-6 py-3 rounded-lg text-white font-semibold text-sm hover:opacity-90 transition-opacity w-fit"
                >
                  Get Started →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#f97316' }} className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Not sure where to start?</h2>
          <p className="text-white text-lg mb-8 opacity-90">Book a free 30-minute strategy call and we will build a custom plan for your shop.</p>
          <Link
            href="/contact"
            style={{ backgroundColor: '#1a2332' }}
            className="inline-block px-8 py-4 rounded-lg text-white font-bold text-lg hover:opacity-90 transition-opacity"
          >
            Book Your Free Call
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
