import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact — WrenchWorks Digital</title>
        <meta name="description" content="Get your free shop growth plan. Fill out the form and we will be in touch within 1 business day." />
      </Head>

      <Header />

      {/* Page Header */}
      <section style={{ backgroundColor: '#1a2332' }} className="py-16 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Let's Grow Your Shop</h1>
          <p className="text-gray-300 text-lg">Fill out the form below and we will build a custom growth plan for your shop — completely free.</p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl shadow-sm p-8 sm:p-12">
            <h2 className="text-2xl font-extrabold mb-2" style={{ color: '#1a2332' }}>Get Your Free Growth Plan</h2>
            <p className="text-gray-500 text-sm mb-8">No pitch. No pressure. Just a clear look at how to grow your shop online.</p>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              className="flex flex-col gap-5"
            >
              <input type="hidden" name="form-name" value="contact" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold" style={{ color: '#1a2332' }}>Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Smith"
                    className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold" style={{ color: '#1a2332' }}>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@yourshop.com"
                    className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold" style={{ color: '#1a2332' }}>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="(303) 555-0100"
                    className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold" style={{ color: '#1a2332' }}>Shop Name *</label>
                  <input
                    type="text"
                    name="shop_name"
                    required
                    placeholder="Denver Auto Care"
                    className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold" style={{ color: '#1a2332' }}>City & State *</label>
                <input
                  type="text"
                  name="city"
                  required
                  placeholder="Denver, CO"
                  className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold" style={{ color: '#1a2332' }}>What is your biggest challenge? *</label>
                <textarea
                  name="challenge"
                  required
                  rows={4}
                  placeholder="e.g. We don't show up on Google, our website is old, we need more reviews..."
                  className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition resize-none"
                />
              </div>

              <button
                type="submit"
                style={{ backgroundColor: '#1a2332' }}
                className="w-full py-4 rounded-lg text-white font-bold text-base hover:opacity-90 transition-opacity mt-2"
              >
                Send Message
              </button>

              <p className="text-center text-xs text-gray-400">
                We respond within 1 business day. No spam, ever.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="p-6">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="font-bold text-sm" style={{ color: '#1a2332' }}>Fast Response</h3>
              <p className="text-gray-500 text-xs mt-1">We respond within 1 business day — usually same day.</p>
            </div>
            <div className="p-6">
              <div className="text-3xl mb-2">🎯</div>
              <h3 className="font-bold text-sm" style={{ color: '#1a2332' }}>Custom Plan</h3>
              <p className="text-gray-500 text-xs mt-1">Every growth plan is tailored to your shop and your market.</p>
            </div>
            <div className="p-6">
              <div className="text-3xl mb-2">🔒</div>
              <h3 className="font-bold text-sm" style={{ color: '#1a2332' }}>No Obligation</h3>
              <p className="text-gray-500 text-xs mt-1">No pressure, no contracts until you are ready to move forward.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
