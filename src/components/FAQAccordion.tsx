'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

import { cn } from '@/utils/cn'

export type FAQItem = {
  id: string
  q: string
  a: string
}

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<string | null>(items[0]?.id ?? null)

  return (
    <div className="grid gap-3">
      {items.map((it) => {
        const isOpen = open === it.id
        return (
          <div key={it.id} className="overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
            <button
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : it.id)}
            >
              <div className="text-sm font-medium text-ink">{it.q}</div>
              <ChevronDown
                size={18}
                className={cn('shrink-0 text-ink2 transition', isOpen && 'rotate-180 text-ink')}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="px-6 pb-6 text-sm leading-relaxed text-ink2">{it.a}</div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}

