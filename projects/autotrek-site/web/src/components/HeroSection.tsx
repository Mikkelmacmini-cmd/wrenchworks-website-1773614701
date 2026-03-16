"use client"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Link from "next/link"

const HEADLINE_LINES = [
  "Reliable Repairs.",
  "Honest Service.",
  "Local Team.",
]

function AnimatedHeadline() {
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 300)
    return () => clearTimeout(t)
  }, [])

  let globalIndex = 0

  return (
    <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white leading-tight">
      {HEADLINE_LINES.map((line, li) => (
        <span key={li} className="block">
          {line.split("").map((char, ci) => {
            const idx = globalIndex++
            return (
              <motion.span
                key={ci}
                className="hero-char"
                initial={{ opacity: 0, y: 20 }}
                animate={started ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: idx * 0.025, ease: "easeOut" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            )
          })}
        </span>
      ))}
    </h1>
  )
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background image + overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-shop.jpg"
          alt="AutoTrek Service Center shop exterior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0f1a0f]/82" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1a0f]/40 via-transparent to-[#0f1a0f]/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-24 pb-12 w-full">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-6"
        >
          <span className="bg-[#2d6a2d] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">
            NAPA AutoCare Center — Littleton, CO
          </span>
        </motion.div>

        {/* Animated headline */}
        <AnimatedHeadline />

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-6 text-xl text-white/80 max-w-2xl leading-relaxed"
        >
          AutoTrek Service Center keeps Littleton drivers safe and on the road — without dealership pricing or runaround.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <a
            href="tel:+13033283356"
            className="bg-[#c0392b] hover:bg-[#a93226] text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#c0392b]/30"
          >
            Schedule Service
          </a>
          <Link
            href="/services"
            className="border-2 border-white/60 hover:border-white text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:-translate-y-0.5 hover:bg-white/10"
          >
            See Our Services
          </Link>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-16 pt-8 border-t border-white/20 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { icon: "✓", label: "NAPA AutoCare" },
            { icon: "🛡", label: "36k/36-Month Warranty" },
            { icon: "⚡", label: "EV & Hybrid Ready" },
            { icon: "🕐", label: "Mon–Fri 9–5" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-white/90">
              <span className="text-[#c0392b] text-lg">{item.icon}</span>
              <span className="text-sm font-semibold">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50"
      >
        <span className="text-xs tracking-widest uppercase">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-lg"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  )
}
