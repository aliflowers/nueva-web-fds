'use client'

import { AnimatePresence, motion } from 'framer-motion'

import { cn } from '@/utils/cn'

export function Modal({
  open,
  onClose,
  title,
  children,
  className,
}: {
  open: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            aria-label="Close"
            className="absolute inset-0 bg-black/70 backdrop-blur"
            onClick={onClose}
            type="button"
          />
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={title}
              initial={{ y: 12, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 12, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className={cn(
                'w-full max-w-lg rounded-2xl bg-surface ring-1 ring-white/10 shadow-glow',
                className
              )}
            >
              <div className="flex items-center justify-between gap-4 border-b border-white/10 px-6 py-4">
                <div className="font-display text-lg text-ink">{title}</div>
                <button
                  className="rounded-lg px-2 py-1 text-ink2 hover:bg-white/5 hover:text-ink"
                  onClick={onClose}
                  type="button"
                >
                  ×
                </button>
              </div>
              <div className="px-6 py-5">{children}</div>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

