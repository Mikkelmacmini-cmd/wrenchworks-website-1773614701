import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FadeIn, { StaggerContainer, StaggerItem } from '../components/FadeIn'

const services = [
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <rect x="4" y="8" width="32" height="24" rx="3" stroke="#E85D2A" strokeWidth="2" />
        <path d="M4 14h32" stroke="#E85D2A" strokeWidth="2" />
        <rect x="9" y="20" width="8" height="5" rx="1" fill="#E85D2A" fillOpacity="0.3" stroke="#E85D2A" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Website Build & Design',
    desc: 'Professional, fast, mobile-first sites built to convert local searchers into booked appointments.',
    href: '/services',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="20" cy="20" r="14" stroke="#E85D2A" strokeWidth="2" />
        <path d="M20 9v11l7 4" stroke="#E85D2A" strokeWidth="2" strokeLinecap="round" />
        <circle cx="20" cy="20" r="3" fill="#E85D2A" />
      </svg>
    ),
    title: 'Local SEO & Google Maps',
    desc: 'Dominate the map pack in your city so customers find you first — not the shop down the street.',
    href: '/services',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <path d="M20 6l3.6 7.3 8.1 1.2-5.85 5.7 1.38 8.05L20 24.3l-7.23 3.95 1.38-8.05L8.3 14.5l8.1-1.2L20 6z" stroke="#E85D2A" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Review Generation & Reputation',
    desc: 'Automated systems that turn happy customers into 5-star reviews on autopilot.',
    href: '/services',
  },
]

const journey = [
  { img: '/images/scene-01.png', caption: '1. Customer has a problem' },
  { img: '/images/scene-02.png', caption: '2. They search Google' },
  { img: '/images/scene-03.png', caption: '3. They find your shop' },
  { img: '/images/scene-04.png', caption: '4. They approve the quote' },
  { img: '/images/scene-05.png', caption: '5. Keys returned, happy customer' },
  { img: '/images/scene-06.png', caption: '6. They leave you a 5-star review' },
]

const testimonials = [
  { quote: 'We went from page 3 to the #1 spot in 6 weeks.', author: 'Dave R.', shop: 'Denver Auto Care' },
  { quote: 'Our phone calls doubled. Best investment we ever made.', author: 'Maria S.', shop: 'Precision Tune' },
  { quote: 'The website looks incredible and actually converts.', author: 'Tom H.', shop: 'Eagle Auto' },
]

export default function Home() {
  const [heroFormSent, setHeroFormSent] = useState(false)

  async function handleHeroSubmit(e) {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    await fetch('https://formspree.io/f/xwplgqzv', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    })
    setHeroFormSent(true)
  }

  return (
    <div style={{ backgroundColor: '#FEFCF9' }}>
      <Head>
        <title>WrenchWorks Digital | Auto Repair Marketing Agency</title>
        <meta name="description" content="We help auto repair shops dominate local search, get more 5-star reviews, and fill their bays. Website design, Local SEO, and Google Business Profile management." />
        <link rel="canonical" href="https://www.wrenchworksdigital.com/" />
        <meta property="og:title" content="WrenchWorks Digital | Auto Repair Marketing Agency" />
        <meta property="og:description" content="We help auto repair shops dominate local search, get more 5-star reviews, and fill their bays. Website design, Local SEO, and Google Business Profile management." />
        <meta property="og:image" content="/images/hero_shop_owner_laptop.png" />
        <meta property="og:url" content="https://www.wrenchworksdigital.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="WrenchWorks Digital" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Header />

      {/* ── Hero ── */}
      <section
        className="grain-overlay relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/hero_shop_owner_laptop.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(28,28,30,0.72)' }} />

        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 60%, rgba(232,93,42,0.12) 0%, transparent 70%)' }}
        />

        {/* Decorative SVG circle */}
        <svg className="absolute top-16 right-12 opacity-10 hidden lg:block" width="320" height="320" viewBox="0 0 320 320" fill="none">
          <circle cx="160" cy="160" r="158" stroke="#D4A853" strokeWidth="1.5" />
          <circle cx="160" cy="160" r="120" stroke="#D4A853" strokeWidth="0.75" />
        </svg>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center text-white py-28">
          <FadeIn delay={0}>
            <p className="eyebrow mb-5" style={{ color: '#D4A853' }}>
              Auto Repair Marketing Agency
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] mb-7">
              More Booked<br />
              Appointments.<br />
              <span style={{ color: '#E85D2A' }}>Less Guesswork.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p
              className="text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
              style={{ color: '#E8E2DC' }}
            >
              We help auto repair shops dominate local search, convert more visitors, and fill their bays.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="px-9 py-4 rounded-xl text-white font-bold text-lg shadow-lg transition-all duration-200"
                style={{ backgroundColor: '#E85D2A' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(232,93,42,0.4)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '' }}
              >
                Get Your Free Growth Plan
              </Link>
              <Link
                href="/case-studies"
                className="font-semibold text-lg transition-colors"
                style={{ color: '#E8E2DC' }}
                onMouseEnter={e => (e.target.style.color = '#E85D2A')}
                onMouseLeave={e => (e.target.style.color = '#E8E2DC')}
              >
                See Our Work →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Hero Lead Form ── */}
      <div className="relative z-20 -mt-16 sm:-mt-20 px-4 sm:px-6 pb-0">
        <FadeIn
          delay={0.4}
          className="max-w-3xl mx-auto rounded-2xl p-7 sm:p-10"
          style={{
            backgroundColor: '#1C1C1E',
            boxShadow: '0 24px 64px rgba(0,0,0,0.35)',
            border: '1px solid rgba(232,93,42,0.25)',
          }}
        >
          {heroFormSent ? (
            <div className="text-center py-6">
              <p className="font-bold text-lg" style={{ color: '#D4A853' }}>Thanks! We will be in touch within 1 business day.</p>
            </div>
          ) : (
            <>
              <h3 className="font-serif text-white font-bold text-xl sm:text-2xl mb-1 text-center">Get My Free Growth Plan</h3>
              <p className="text-sm text-center mb-6" style={{ color: '#6B6560' }}>No spam. We respond within 1 business day.</p>
              <form onSubmit={handleHeroSubmit} className="flex flex-col gap-4">
                <input type="hidden" name="_subject" value="New WrenchWorks Lead (Hero Form)" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="first_name"
                    required
                    placeholder="First Name"
                    className="rounded-xl px-4 py-3 text-sm focus:outline-none transition"
                    style={{ backgroundColor: '#2C2A28', color: '#E8E2DC', border: '1px solid #3a3835' }}
                    onFocus={e => (e.target.style.boxShadow = '0 0 0 2px #D4A853')}
                    onBlur={e => (e.target.style.boxShadow = 'none')}
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email Address"
                    className="rounded-xl px-4 py-3 text-sm focus:outline-none transition"
                    style={{ backgroundColor: '#2C2A28', color: '#E8E2DC', border: '1px solid #3a3835' }}
                    onFocus={e => (e.target.style.boxShadow = '0 0 0 2px #D4A853')}
                    onBlur={e => (e.target.style.boxShadow = 'none')}
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="rounded-xl px-4 py-3 text-sm focus:outline-none transition"
                    style={{ backgroundColor: '#2C2A28', color: '#E8E2DC', border: '1px solid #3a3835' }}
                    onFocus={e => (e.target.style.boxShadow = '0 0 0 2px #D4A853')}
                    onBlur={e => (e.target.style.boxShadow = 'none')}
                  />
                  <input
                    type="text"
                    name="shop_city"
                    required
                    placeholder="What city is your shop in?"
                    className="rounded-xl px-4 py-3 text-sm focus:outline-none transition"
                    style={{ backgroundColor: '#2C2A28', color: '#E8E2DC', border: '1px solid #3a3835' }}
                    onFocus={e => (e.target.style.boxShadow = '0 0 0 2px #D4A853')}
                    onBlur={e => (e.target.style.boxShadow = 'none')}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-white font-bold text-base transition-all duration-200 shadow-md mt-1"
                  style={{ backgroundColor: '#E85D2A' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.01)'; e.currentTarget.style.backgroundColor = '#cf4e1e' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.backgroundColor = '#E85D2A' }}
                >
                  Get My Free Growth Plan
                </button>
                <p className="text-center text-xs" style={{ color: '#6B6560' }}>No spam. We respond within 1 business day.</p>
              </form>
            </>
          )}
        </FadeIn>
      </div>

      {/* ── Services ── */}
      <section className="py-24 sm:py-32" style={{ backgroundColor: '#F5F0EB' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn className="text-center mb-16">
            <p className="eyebrow mb-4">Our Services</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#1C1C1E' }}>
              What We Do
            </h2>
            <p className="text-lg max-w-xl mx-auto leading-relaxed" style={{ color: '#6B6560' }}>
              Everything your shop needs to win online — under one roof.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s) => (
              <StaggerItem key={s.title}>
                <div
                  className="rounded-2xl p-10 flex flex-col gap-5 cursor-default transition-all duration-300"
                  style={{ backgroundColor: '#FEFCF9', boxShadow: '0 2px 12px rgba(28,28,30,0.07)' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(28,28,30,0.12)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(28,28,30,0.07)' }}
                >
                  <div>{s.icon}</div>
                  <h3 className="font-serif text-xl font-bold" style={{ color: '#1C1C1E' }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: '#6B6560' }}>{s.desc}</p>
                  <Link
                    href={s.href}
                    className="text-sm font-semibold transition-colors"
                    style={{ color: '#E85D2A' }}
                    onMouseEnter={e => (e.target.style.color = '#cf4e1e')}
                    onMouseLeave={e => (e.target.style.color = '#E85D2A')}
                  >
                    Learn More →
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── How It Works / Storyline ── */}
      <section className="grain-overlay py-24 sm:py-32" style={{ backgroundColor: '#1C1C1E' }}>
        {/* SVG dot-grid accent */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
          <svg className="absolute bottom-0 left-0 opacity-5" width="400" height="400" viewBox="0 0 400 400">
            {Array.from({ length: 10 }).map((_, row) =>
              Array.from({ length: 10 }).map((_, col) => (
                <circle key={`${row}-${col}`} cx={col * 40 + 20} cy={row * 40 + 20} r="2" fill="#D4A853" />
              ))
            )}
          </svg>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn className="text-center mb-16">
            <p className="eyebrow mb-4" style={{ color: '#D4A853' }}>The Journey</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              The Shop Owner Journey
            </h2>
            <p className="text-lg" style={{ color: '#6B6560' }}>
              From problem to 5-star review — we help you win every step.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {journey.map((step) => (
              <StaggerItem key={step.caption} className="flex flex-col items-center gap-3">
                <div className="w-full aspect-square rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(214,207,199,0.12)' }}>
                  <img src={step.img} alt={step.caption} className="w-full h-full object-cover" />
                </div>
                <p className="text-xs sm:text-sm text-center font-medium" style={{ color: '#E8E2DC' }}>{step.caption}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24 sm:py-32" style={{ backgroundColor: '#FEFCF9' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn className="text-center mb-16">
            <p className="eyebrow mb-4">Testimonials</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold" style={{ color: '#1C1C1E' }}>
              What Shop Owners Are Saying
            </h2>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <StaggerItem
                key={t.author}
                className="rounded-2xl p-10 flex flex-col gap-5"
                style={{
                  backgroundColor: '#F5F0EB',
                  boxShadow: '0 2px 12px rgba(28,28,30,0.06)',
                  borderLeft: '4px solid #E85D2A',
                }}
              >
                <p className="text-base leading-relaxed italic flex-1" style={{ color: '#2C2A28' }}>{t.quote}</p>
                <div>
                  <p className="font-bold text-sm" style={{ color: '#1C1C1E' }}>{t.author}</p>
                  <p className="text-sm" style={{ color: '#6B6560' }}>{t.shop}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section
        className="grain-overlay py-24 sm:py-32 relative overflow-hidden"
        style={{ backgroundColor: '#2C2A28' }}
      >
        {/* Radial accent */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(232,93,42,0.15) 0%, transparent 70%)' }}
        />

        <FadeIn className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="eyebrow mb-5" style={{ color: '#D4A853' }}>Let's Work Together</p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
            Ready to fill your bays?
          </h2>
          <p className="text-lg mb-10 leading-relaxed" style={{ color: '#E8E2DC' }}>
            Let's build a growth plan tailored to your shop — completely free.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 rounded-xl text-white font-bold text-lg shadow-lg transition-all duration-200"
            style={{ backgroundColor: '#E85D2A' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(232,93,42,0.4)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '' }}
          >
            Schedule a Free Call
          </Link>
        </FadeIn>
      </section>

      <Footer />
    </div>
  )
}
