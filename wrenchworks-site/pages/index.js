import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import CTA from '../components/CTA';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Home(){
  return (
    <div>
      <Head><title>WrenchWorks Digital — Websites for Auto Repair Shops</title></Head>
      <main className="min-h-screen">
        <header className="hero-bg py-28 text-white">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} className="text-center">
              <h1 className="text-4xl sm:text-5xl font-extrabold drop-shadow">Websites that bring customers through your shop door</h1>
              <p className="mt-4 text-lg max-w-2xl mx-auto text-white/90">WrenchWorks Digital builds fast, mobile-first websites for auto repair shops that convert local searchers into booked appointments. Clear CTAs, easy booking, and optimized local SEO.</p>
              <div className="mt-6">
                <CTA label="Get My Shop Online" sub="Simple, fast websites + local SEO for auto shops" href="/contact" />
              </div>
            </motion.div>
          </div>
        </header>

        <section className="max-w-5xl mx-auto px-6 -mt-20">
          <div className="card p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <Hero />
              </div>
            </div>
            <Services />
            <Testimonials />
          </div>

          <Footer />
        </section>
      </main>
    </div>
  )
}
