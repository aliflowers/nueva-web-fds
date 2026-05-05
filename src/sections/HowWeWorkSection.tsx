'use client'

import { Container } from '@/components/ui/Container'
import { MotionInView } from '@/components/ui/MotionInView'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { useLanguage } from '@/hooks/useLanguage'

export function HowWeWorkSection() {
  const { t } = useLanguage()
  const steps = [
    { n: '01', titleKey: 'process.s1.title', descKey: 'process.s1.desc' },
    { n: '02', titleKey: 'process.s2.title', descKey: 'process.s2.desc' },
    { n: '03', titleKey: 'process.s3.title', descKey: 'process.s3.desc' },
    { n: '04', titleKey: 'process.s4.title', descKey: 'process.s4.desc' },
  ]

  return (
    <section id="process" className="section-gold border-t border-white/10 py-20 md:py-28">
      <Container>
        <MotionInView>
          <SectionHeading title={t('process.title')} subtitle={t('process.subtitle')} />
        </MotionInView>

        <div className="mt-10 grid gap-4">
          {steps.map((s, idx) => (
            <MotionInView key={s.n} delay={idx * 0.06}>
              <div className="relative overflow-hidden rounded-2xl bg-white/5 p-7 ring-1 ring-white/10">
                <div className="absolute right-6 top-6 font-display text-5xl text-white/10">{s.n}</div>
                <div className="max-w-2xl">
                  <div className="font-display text-xl tracking-tight text-ink">{t(s.titleKey)}</div>
                  <div className="mt-2 text-sm leading-relaxed text-ink2">{t(s.descKey)}</div>
                </div>
              </div>
            </MotionInView>
          ))}
        </div>
      </Container>
    </section>
  )
}
