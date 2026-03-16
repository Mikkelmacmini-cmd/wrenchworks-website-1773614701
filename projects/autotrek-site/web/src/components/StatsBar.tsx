"use client"
import { useEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer"

interface Stat {
  value: string
  numericTarget?: number
  suffix?: string
  label: string
}

const STATS: Stat[] = [
  { value: "22+", numericTarget: 22, suffix: "+", label: "Services Offered" },
  { value: "4.1★", label: "Google Rating" },
  { value: "36k", label: "Mile Warranty" },
  { value: "Mon–Fri", label: "9AM–5PM" },
]

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true })
  const started = useRef(false)

  useEffect(() => {
    if (inView && !started.current) {
      started.current = true
      const duration = 1500
      const steps = 30
      const step = target / steps
      let current = 0
      const interval = setInterval(() => {
        current = Math.min(current + step, target)
        setCount(Math.floor(current))
        if (current >= target) clearInterval(interval)
      }, duration / steps)
      return () => clearInterval(interval)
    }
  }, [inView, target])

  return <span ref={ref}>{count}{suffix}</span>
}

export function StatsBar() {
  return (
    <section className="bg-[#2d6a2d] py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {STATS.map((stat) => (
            <div key={stat.label} className="space-y-1">
              <div className="text-4xl md:text-5xl font-black tracking-tight">
                {stat.numericTarget != null ? (
                  <CountUp target={stat.numericTarget} suffix={stat.suffix} />
                ) : (
                  stat.value
                )}
              </div>
              <div className="text-white/70 text-sm font-semibold uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
