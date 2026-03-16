"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import type { ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "left" | "right" | "none"
}

export function ScrollReveal({ children, className = "", delay = 0, direction = "up" }: ScrollRevealProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const initialY = direction === "up" ? 40 : direction === "none" ? 0 : 0
  const initialX = direction === "left" ? -40 : direction === "right" ? 40 : 0

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: initialY, x: initialX }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
