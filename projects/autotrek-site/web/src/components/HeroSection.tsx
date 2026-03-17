"use client"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Link from "next/link"

const HEADLINE_LINES = ["Reliable Repairs.", "Honest Service.", "Local Team."]

function AnimatedHeadline() {
  const [started, setStarted] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 300)
    return () => clearTimeout(t)
  }, [])
  let globalIndex = 0
  return (
    <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
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

function ScheduleForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      await fetch("https://formspree.io/f/xwplgqzv", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      })
      setSubmitted(true)
    } catch {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="text-4xl mb-3">✅</div>
        <p className="text-[#2d6a2d] font-bold text-lg">Request received!</p>
        <p className="text-gray-600 text-sm mt-1">We&apos;ll call you back same day.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">First Name</label>
          <input name="first_name" type="text" placeholder="First Name" required
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#2d6a2d] focus:ring-1 focus:ring-[#2d6a2d]" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">Last Name</label>
          <input name="last_name" type="text" placeholder="Last Name" required
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#2d6a2d] focus:ring-1 focus:ring-[#2d6a2d]" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">Phone *</label>
          <input name="phone" type="tel" placeholder="(303) 000-0000" required
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#2d6a2d] focus:ring-1 focus:ring-[#2d6a2d]" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">Email</label>
          <input name="email" type="email" placeholder="you@email.com"
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#2d6a2d] focus:ring-1 focus:ring-[#2d6a2d]" />
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold text-gray-600 mb-1">Vehicle (Year / Make / Model)</label>
        <input name="vehicle" type="text" placeholder="e.g. 2019 Toyota Camry"
          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#2d6a2d] focus:ring-1 focus:ring-[#2d6a2d]" />
      </div>
      <div>
        <label className="block text-xs font-semibold text-gray-600 mb-1">What do you need?</label>
        <textarea name="message" placeholder="Describe the issue or service needed..." rows={2}
          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#2d6a2d] focus:ring-1 focus:ring-[#2d6a2d] resize-none" />
      </div>
      <button type="submit" disabled={loading}
        className="w-full bg-[#D32F2F] hover:bg-[#b71c1c] disabled:opacity-60 text-white font-bold py-3 rounded-lg text-base transition-all hover:-translate-y-0.5 hover:shadow-md">
        {loading ? "Sending..." : "Schedule Service →"}
      </button>
      <p className="text-center text-xs text-gray-400">We respond same day · Mon–Fri 9AM–5PM</p>
    </form>
  )
}

export function HeroSection() {
  return (
    <section className="relative flex flex-col">
      <div className="flex flex-col md:flex-row min-h-screen">

        {/* LEFT — dark content panel */}
        <div className="relative md:w-1/2 bg-[#0f1a0f] flex flex-col justify-center px-8 md:px-12 pt-28 pb-12 md:py-24 overflow-y-auto">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2d6a2d]/10 to-transparent pointer-events-none" />

          <div className="relative z-10">
            {/* Animated headline */}
            <AnimatedHeadline />

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mt-4 text-base text-white/70 leading-relaxed max-w-md">
              AutoTrek Service Center keeps Littleton drivers safe and on the road — without dealership pricing or runaround.
            </motion.p>

            {/* Schedule form — inside hero */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="mt-7 bg-white rounded-2xl p-6 border-l-4 border-[#2d6a2d] shadow-xl">
              <h2 className="text-lg font-black text-gray-900 mb-4">Schedule Service</h2>
              <ScheduleForm />
            </motion.div>

            {/* CTA buttons — below form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.9 }}
              className="mt-5 flex flex-wrap gap-3">
              <Link href="/services"
                className="border border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-full text-base transition-all hover:-translate-y-0.5 hover:bg-white/10">
                Our Services →
              </Link>
            </motion.div>
          </div>
        </div>

        {/* RIGHT — mechanic photo */}
        <div className="md:w-1/2 relative min-h-[50vh] md:min-h-full">
          <img
            src="/images/hero-mechanic.jpg"
            alt="AutoTrek mechanic working on vehicle engine"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1a0f]/50 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}
