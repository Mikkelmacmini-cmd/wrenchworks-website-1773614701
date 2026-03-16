import Head from "next/head";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact — WrenchWorks Digital</title>
        <meta name="description" content="Get in touch with WrenchWorks Digital. Let's talk about growing your auto repair shop." />
      </Head>
      <Header />

      <section className="min-h-screen bg-white pt-16">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="text-sm font-medium text-gray-500 mb-4 uppercase tracking-wide">Let's Talk</p>
              <h1 className="text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
                Ready to Fill<br />Your Bays<span className="text-orange-500">?</span>
              </h1>
              <p className="text-gray-600 leading-relaxed mb-10 max-w-md">
                Tell us about your shop and your goals. We'll put together a custom growth plan — no commitment required.
              </p>
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Email</p>
                  <a href="mailto:hello@wrenchworksdigital.com" className="text-gray-900 font-medium hover:text-orange-500 transition-colors">hello@wrenchworksdigital.com</a>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Response Time</p>
                  <p className="text-gray-900 font-medium">Within 24 hours, weekdays</p>
                </div>
                <div className="flex flex-wrap gap-3 pt-4">
                  {["Website Build", "Local SEO", "GBP", "Reviews", "Hosting"].map((svc) => (
                    <span key={svc} className="border border-gray-200 text-sm text-gray-600 px-4 py-1.5 rounded-full">{svc}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right — Formspree form */}
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <form action="https://formspree.io/f/xwplgqzv" method="POST" className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input type="text" name="first_name" required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-orange-500 transition-colors" placeholder="Mike" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input type="text" name="last_name" required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-orange-500 transition-colors" placeholder="Rodriguez" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" name="email" required className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-orange-500 transition-colors" placeholder="mike@allstarauto.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Shop Name</label>
                  <input type="text" name="shop_name" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-orange-500 transition-colors" placeholder="All-Star Auto Repair" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">What do you need?</label>
                  <select name="service" className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-orange-500 transition-colors bg-white">
                    <option value="">Select a service...</option>
                    <option>Website Build</option>
                    <option>Local SEO</option>
                    <option>Google Business Profile</option>
                    <option>Review Funnels</option>
                    <option>Managed Hosting</option>
                    <option>Full Package</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tell us about your shop</label>
                  <textarea name="message" rows={5} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-orange-500 transition-colors resize-none" placeholder="Location, number of bays, biggest challenge right now..."></textarea>
                </div>
                <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-colors duration-200">
                  Send Message →
                </button>
                <p className="text-xs text-gray-400 text-center">No spam. No long-term contracts. Just results.</p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
