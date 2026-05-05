'use client'

import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { MotionInView } from '@/components/ui/MotionInView'
import { useLanguage } from '@/hooks/useLanguage'

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function FinalCTASection() {
  const { t } = useLanguage()
  return (
    <section className="relative overflow-hidden border-t border-white/10 py-20 md:py-28">
      <div className="absolute inset-0">
        <div className="absolute -left-24 top-10 h-[420px] w-[420px] rounded-full bg-brand-700/20 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-[420px] w-[420px] rounded-full bg-white/10 blur-3xl" />
      </div>
      <Container className="relative">
        <MotionInView>
          <div className="rounded-2xl bg-white/5 p-10 ring-1 ring-white/10 md:p-12">
            <div className="max-w-3xl">
              <div className="font-display text-4xl tracking-tight text-ink md:text-5xl">{t('final.title')}</div>
              <div className="mt-4 text-base leading-relaxed text-ink2 md:text-lg">{t('final.subtitle')}</div>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" onClick={() => scrollTo('pricing')}>
                {t('final.primary')} <ArrowRight size={18} />
              </Button>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => window.open('mailto:contact_us@fengdigitalservices.com?subject=FDS%20-%20Asesor', '_self')}
              >
                {t('final.secondary')}
              </Button>
            </div>
          </div>
        </MotionInView>
      </Container>
    </section>
  )
}

