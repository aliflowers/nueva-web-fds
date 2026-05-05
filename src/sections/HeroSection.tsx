'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, BarChart3, ChevronDown, Sparkles } from 'lucide-react'
import { useRef } from 'react'

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { useLanguage } from '@/hooks/useLanguage'
import { cn } from '@/utils/cn'

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function HeroSection() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const panelY = useTransform(scrollYProgress, [0, 1], ['0%', '-6%'])
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '-10%'])

  return (
    <section ref={sectionRef} className="section-red relative overflow-hidden pt-10 md:pt-16">
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <div className="absolute -left-24 top-20 h-[520px] w-[520px] rounded-full bg-brand-700/20 blur-3xl" />
        <div className="absolute -right-24 top-40 h-[420px] w-[420px] rounded-full bg-white/8 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.07)_1px,transparent_0)] [background-size:24px_24px] opacity-40" />
      </motion.div>

      <Container className="relative">
        <div className="grid items-start gap-12 pb-20 pt-10 md:grid-cols-12 md:pb-32 md:pt-16">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs font-medium tracking-[0.2em] text-ink2 ring-1 ring-white/10">
              <span className="h-2 w-2 rounded-full bg-brand-700" />
              {t('hero.kicker')}
            </div>

            <h1 className="mt-6 font-display text-5xl tracking-tight text-ink md:text-7xl">
              <span className="block">{t('hero.title.line1')}</span>
              <span className="block">{t('hero.title.line2')}</span>
              <span className={cn('block text-brand-600')}>{t('hero.title.line3')}</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink2 md:text-lg">
              {t('hero.subtitle')}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" onClick={() => scrollTo('pricing')}>
                {t('hero.primary')} <ArrowRight size={18} />
              </Button>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => window.open('mailto:contact_us@fengdigitalservices.com?subject=FDS%20-%20Propuesta', '_self')}
              >
                {t('hero.secondary')}
              </Button>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {[t('hero.badge1'), t('hero.badge2'), t('hero.badge3'), t('hero.badge4')].map((b) => (
                <div
                  key={b}
                  className="rounded-2xl bg-white/5 px-5 py-4 text-sm text-ink ring-1 ring-white/10"
                >
                  <span className="text-ink2">{b}</span>
                </div>
              ))}
            </div>
          </div>

          <motion.div className="md:col-span-5" style={{ y: panelY }}>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.2, 0.8, 0.2, 1] }}
              className="relative overflow-hidden rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 shadow-soft"
            >
              <div className="absolute -right-12 -top-14 h-48 w-48 rounded-full bg-brand-700/20 blur-2xl" />
              <div className="absolute -left-16 bottom-10 h-40 w-40 rounded-full bg-cyan-400/20 blur-2xl" />
              <div className="relative">
                <div className="text-xs font-medium tracking-[0.2em] text-ink2">FDS</div>
                <div className="mt-3 font-display text-2xl tracking-tight text-ink">{t('hero.panel.title')}</div>
                <div className="mt-3 text-sm leading-relaxed text-ink2">{t('hero.panel.subtitle')}</div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <motion.div
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-xl bg-black/25 px-4 py-3 ring-1 ring-white/10"
                  >
                    <div className="flex items-center gap-2 text-xs text-ink2">
                      <Sparkles size={14} className="text-brand-400" />
                      Creative
                    </div>
                    <div className="mt-1 text-sm font-medium text-ink">Brand System</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-xl bg-black/25 px-4 py-3 ring-1 ring-white/10"
                  >
                    <div className="flex items-center gap-2 text-xs text-ink2">
                      <BarChart3 size={14} className="text-cyan-300" />
                      Performance
                    </div>
                    <div className="mt-1 text-sm font-medium text-ink">Weekly Optimization</div>
                  </motion.div>
                </div>

                <motion.div className="mt-5 overflow-hidden rounded-xl ring-1 ring-white/10" style={{ y: imageY }}>
                  <Image
                    src="/listo_para_convertir.png"
                    alt="Dashboard preview"
                    width={1200}
                    height={760}
                    className="h-32 w-full object-cover md:h-36"
                  />
                </motion.div>

                <div className="mt-6 grid gap-3">
                  {[
                    t('hero.panel.l1'),
                    t('hero.panel.l2'),
                    t('hero.panel.l3'),
                    t('hero.panel.l4'),
                  ].map((line) => (
                    <div
                      key={line}
                      className="rounded-xl bg-black/20 px-4 py-3 text-sm text-ink ring-1 ring-white/10"
                    >
                      {line}
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-4 py-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-700/20 ring-1 ring-brand-700/30">
                    <Sparkles size={16} className="text-brand-300" />
                  </div>
                  <div className="text-sm text-ink">{t('hero.panel.note')}</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>

      <div className="relative pb-12">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-center">
          <motion.button
            type="button"
            onClick={() => scrollTo('services')}
            className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs text-ink2 ring-1 ring-white/10 hover:bg-white/8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span>{t('hero.scroll')}</span>
            <motion.span animate={{ y: [0, 4, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
              <ChevronDown size={16} />
            </motion.span>
          </motion.button>
        </div>
      </div>
    </section>
  )
}
