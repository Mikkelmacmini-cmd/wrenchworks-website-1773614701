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
      <Head><title>WrenchWorks — Audit, Pilot & Scale Operations</title></Head>
      <main className="min-h-screen">
        <header className="hero-bg py-28 text-white">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} className="text-center">
              <h1 className="text-4xl sm:text-5xl font-extrabold drop-shadow">Stop Firefighting. Build an Operating System That Scales.</h1>
              <p className="mt-4 text-lg max-w-2xl mx-auto text-white/90">Find and fix operational bottlenecks with a diagnostic audit, validate improvements with a pilot, then scale proven systems with measurable results.</p>
              <div className="mt-6">
                <CTA label="Start My Diagnostic Audit" sub="Get a clear baseline, priority map, and next-step plan." href="/contact" />
              </div>
            </motion.div>
          </div>
        </header>

        <section className="max-w-5xl mx-auto px-6 -mt-20">
          <div className="card p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h2 className="text-2xl font-bold">We build hardware & systems</h2>
                <p className="mt-2 text-slate-700">Rapid prototyping to production — diagnostics, pilots, and scale.</p>
              </div>
              <div className="w-56">
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
