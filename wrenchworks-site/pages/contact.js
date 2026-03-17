import { useState } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

const inputStyle = {
  backgroundColor: '#FEFCF9',
  color: '#1C1C1E',
  border: '1.5px solid #D6CFC7',
}

const inputClass = 'rounded-xl px-4 py-3 text-sm focus:outline-none transition w-full'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    await fetch('https://formspree.io/f/xwplgqzv', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    })
    setSubmitted(true)
  }

  function handleFocus(e) {
    e.target.style.boxShadow = '0 0 0 2.5px #D4A853'
    e.target.style.borderColor = '#D4A853'
  }
  function handleBlur(e) {
    e.target.style.boxShadow = 'none'
    e.target.style.borderColor = '#D6CFC7'
  }

  return (
    <div style={{ backgroundColor: '#FEFCF9' }}>
      <Head>
        <title>Contact | WrenchWorks Digital</title>
        <meta name="description" content="Get your free shop growth plan. Fill out the form and we will be in touch within 1 business day." />
        <link rel="canonical" href="https://www.wrenchworksdigital.com/contact/" />
        <meta property="og:title" content="Contact | WrenchWorks Digital" />
        <meta property="og:description" content="Get your free shop growth plan. Fill out the form and we will be in touch within 1 business day." />
        <meta property="og:image" content="/images/hero_shop_owner_laptop.png" />
        <meta property="og:url" content="https://www.wrenchworksdigital.com/contact" />
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
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
          <p className="eyebrow mb-4" style={{ color: '#D4A853' }}>Contact Us</p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5">
            Let's Grow Your Shop
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: '#E8E2DC' }}>
            Fill out the form below and we will build a custom growth plan for your shop — completely free.
          </p>
        </div>
      </section>

      {/* ── Form Section ── */}
      <section className="py-24 sm:py-32" style={{ backgroundColor: '#F5F0EB' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="rounded-2xl p-8 sm:p-12"
            style={{ backgroundColor: '#FEFCF9', boxShadow: '0 4px 32px rgba(28,28,30,0.09)' }}
          >
            <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-2" style={{ color: '#1C1C1E' }}>
              Get Your Free Growth Plan
            </h2>
            <p className="text-sm mb-8 leading-relaxed" style={{ color: '#6B6560' }}>
              No pitch. No pressure. Just a clear look at how to grow your shop online.
            </p>

            {submitted ? (
              <div className="py-8 text-center">
                <p className="font-bold text-lg" style={{ color: '#D4A853' }}>
                  Thanks! We will be in touch within 1 business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <input type="hidden" name="_subject" value="New WrenchWorks Lead" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs uppercase tracking-widest font-semibold" style={{ color: '#1C1C1E' }}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="John Smith"
                      className={inputClass}
                      style={inputStyle}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs uppercase tracking-widest font-semibold" style={{ color: '#1C1C1E' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="john@yourshop.com"
                      className={inputClass}
                      style={inputStyle}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs uppercase tracking-widest font-semibold" style={{ color: '#1C1C1E' }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="(303) 555-0100"
                      className={inputClass}
                      style={inputStyle}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs uppercase tracking-widest font-semibold" style={{ color: '#1C1C1E' }}>
                      Shop Name *
                    </label>
                    <input
                      type="text"
                      name="shop_name"
                      required
                      placeholder="Denver Auto Care"
                      className={inputClass}
                      style={inputStyle}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs uppercase tracking-widest font-semibold" style={{ color: '#1C1C1E' }}>
                    City & State *
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    placeholder="Denver, CO"
                    className={inputClass}
                    style={inputStyle}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs uppercase tracking-widest font-semibold" style={{ color: '#1C1C1E' }}>
                    What is your biggest challenge? *
                  </label>
                  <textarea
                    name="challenge"
                    required
                    rows={4}
                    placeholder="e.g. We don't show up on Google, our website is old, we need more reviews..."
                    className="rounded-xl px-4 py-3 text-sm focus:outline-none transition resize-none w-full"
                    style={inputStyle}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-white font-bold text-base transition-all duration-200 shadow-md mt-2"
                  style={{ backgroundColor: '#E85D2A' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.01)'; e.currentTarget.style.backgroundColor = '#cf4e1e' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.backgroundColor = '#E85D2A' }}
                >
                  Send Message
                </button>

                <p className="text-center text-xs" style={{ color: '#6B6560' }}>
                  We respond within 1 business day. No spam, ever.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* ── Trust Signals ── */}
      <section className="py-16" style={{ backgroundColor: '#FEFCF9' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center"
          >
            {[
              { icon: '⚡', title: 'Fast Response', desc: 'We respond within 1 business day — usually same day.' },
              { icon: '🎯', title: 'Custom Plan', desc: 'Every growth plan is tailored to your shop and your market.' },
              { icon: '🔒', title: 'No Obligation', desc: 'No pressure, no contracts until you are ready to move forward.' },
            ].map(({ icon, title, desc }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="p-8 rounded-2xl"
                style={{ backgroundColor: '#F5F0EB' }}
              >
                <div className="text-3xl mb-3">{icon}</div>
                <h3 className="font-bold text-sm uppercase tracking-wider mb-2" style={{ color: '#1C1C1E' }}>{title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: '#6B6560' }}>{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
