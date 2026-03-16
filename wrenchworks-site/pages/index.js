import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

const services = [
  {
    icon: '🖥️',
    title: 'Website Build & Design',
    desc: 'Professional, fast, mobile-first sites built to convert local searchers into booked appointments.',
    href: '/services',
  },
  {
    icon: '📍',
    title: 'Local SEO & Google Maps',
    desc: 'Dominate the map pack in your city so customers find you first — not the shop down the street.',
    href: '/services',
  },
  {
    icon: '⭐',
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
    <div>
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

      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/hero_shop_owner_laptop.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(26,35,50,0.65)' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center text-white py-24">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            More Booked Appointments.<br />
            <span style={{ color: '#f97316' }}>Less Guesswork.</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-10">
            We help auto repair shops dominate local search, convert more visitors, and fill their bays.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              style={{ backgroundColor: '#f97316' }}
              className="px-8 py-4 rounded-lg text-white font-bold text-lg hover:opacity-90 transition-opacity shadow-lg"
            >
              Get Your Free Growth Plan
            </Link>
            <Link href="/case-studies" className="text-white font-semibold text-lg hover:text-orange-400 transition-colors">
              See Our Work →
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Lead Form — floats over hero/services boundary */}
      <div className="relative z-20 -mt-16 sm:-mt-20 px-4 sm:px-6 pb-0">
        <div
          className="max-w-3xl mx-auto rounded-2xl p-6 sm:p-8"
          style={{
            backgroundColor: '#1a2332',
            boxShadow: '0 20px 60px rgba(0,0,0,0.35)',
            border: '1px solid rgba(249,115,22,0.3)',
          }}
        >
          {heroFormSent ? (
            <div className="text-center py-6">
              <p className="text-green-400 font-bold text-lg">Thanks! We will be in touch within 1 business day.</p>
            </div>
          ) : (
            <>
              <h3 className="text-white font-extrabold text-xl sm:text-2xl mb-1 text-center">Get My Free Growth Plan</h3>
              <p className="text-gray-400 text-sm text-center mb-6">No spam. We respond within 1 business day.</p>
              <form onSubmit={handleHeroSubmit} className="flex flex-col gap-4">
                <input type="hidden" name="_subject" value="New WrenchWorks Lead (Hero Form)" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="first_name"
                    required
                    placeholder="First Name"
                    className="rounded-lg px-4 py-3 text-sm bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email Address"
                    className="rounded-lg px-4 py-3 text-sm bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="rounded-lg px-4 py-3 text-sm bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                  <input
                    type="text"
                    name="shop_city"
                    required
                    placeholder="What city is your shop in?"
                    className="rounded-lg px-4 py-3 text-sm bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>
                <button
                  type="submit"
                  style={{ backgroundColor: '#f97316' }}
                  className="w-full py-4 rounded-lg text-white font-bold text-base hover:opacity-90 transition-opacity mt-1"
                >
                  Get My Free Growth Plan
                </button>
                <p className="text-center text-xs text-gray-500">No spam. We respond within 1 business day.</p>
              </form>
            </>
          )}
        </div>
      </div>

      {/* Services */}
      <section className="py-20 bg-gray-50" style={{ paddingTop: '5rem' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: '#1a2332' }}>What We Do</h2>
            <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto">Everything your shop needs to win online — under one roof.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-xl shadow-sm p-8 flex flex-col gap-4 border-b-4 border-transparent hover:border-orange-400 transition-all duration-200"
              >
                <div className="text-4xl">{s.icon}</div>
                <h3 className="text-xl font-bold" style={{ color: '#1a2332' }}>{s.title}</h3>
                <p className="text-gray-500 text-sm flex-1">{s.desc}</p>
                <Link href={s.href} style={{ color: '#f97316' }} className="text-sm font-semibold hover:underline">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works / Storyline */}
      <section className="py-20" style={{ backgroundColor: '#1a2332' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">The Shop Owner Journey</h2>
            <p className="text-gray-400 mt-3 text-lg">From problem to 5-star review — we help you win every step.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {journey.map((step) => (
              <div key={step.caption} className="flex flex-col items-center gap-3">
                <div className="w-full aspect-square rounded-xl overflow-hidden">
                  <img
                    src={step.img}
                    alt={step.caption}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-300 text-xs sm:text-sm text-center font-medium">{step.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: '#1a2332' }}>What Shop Owners Are Saying</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.author} className="bg-gray-50 rounded-xl p-8 flex flex-col gap-4 shadow-sm">
                <div className="text-2xl" style={{ color: '#f97316' }}>&#8220;</div>
                <p className="text-gray-700 text-base italic flex-1">{t.quote}</p>
                <div>
                  <p className="font-bold text-sm" style={{ color: '#1a2332' }}>{t.author}</p>
                  <p className="text-gray-400 text-sm">{t.shop}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ backgroundColor: '#f97316' }} className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Ready to fill your bays?</h2>
          <p className="text-white text-lg mb-8 opacity-90">Let's build a growth plan tailored to your shop — completely free.</p>
          <Link
            href="/contact"
            style={{ backgroundColor: '#1a2332' }}
            className="inline-block px-8 py-4 rounded-lg text-white font-bold text-lg hover:opacity-90 transition-opacity shadow-lg"
          >
            Schedule a Free Call
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
