'use client'

import services from '@/data/services.json'

import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { MotionInView } from '@/components/ui/MotionInView'
import { ServiceCard } from '@/components/ServiceCard'
import { useLanguage } from '@/hooks/useLanguage'

type ServiceJson = {
  id: string
  titleKey: string
  descKey: string
  bulletsKeys: string[]
  ctaKey: string
}

export function ServicesSection() {
  const { t } = useLanguage()
  return (
    <section id="services" className="section-cyan border-t border-white/10 py-20 md:py-28">
      <Container>
        <MotionInView>
          <SectionHeading title={t('services.title')} subtitle={t('services.subtitle')} />
        </MotionInView>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {(services as ServiceJson[]).map((s, idx) => (
            <MotionInView key={s.id} delay={idx * 0.05}>
              <ServiceCard
                id={s.id}
                index={idx + 1}
                titleKey={s.titleKey}
                descKey={s.descKey}
                bulletsKeys={s.bulletsKeys}
                ctaKey={s.ctaKey}
              />
            </MotionInView>
          ))}
        </div>
      </Container>
    </section>
  )
}
