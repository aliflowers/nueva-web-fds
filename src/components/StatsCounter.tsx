'use client'

import { motion, useInView } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'

export function StatsCounter({ label, value }: { label: string; value: number }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: false, margin: '-10% 0px -10% 0px' })
  const [displayValue, setDisplayValue] = useState(0)

  const formattedTarget = useMemo(() => new Intl.NumberFormat().format(value), [value])

  useEffect(() => {
    if (!inView) return
    const start = performance.now()
    const duration = 950

    let raf = 0
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setDisplayValue(Math.round(value * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  return (
    <div ref={ref} className="rounded-2xl bg-surface p-7 ring-1 ring-white/10">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0.15, y: 8 }}
        transition={{ duration: 0.5 }}
        className="font-display text-4xl tracking-tight text-ink"
      >
        {displayValue >= value ? formattedTarget : new Intl.NumberFormat().format(displayValue)}
      </motion.div>
      <div className="mt-3 text-sm text-ink2">{label}</div>
    </div>
  )
}
