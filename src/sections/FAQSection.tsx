'use client'

import faq from '@/data/faq.json'

import { Container } from '@/components/ui/Container'
import { MotionInView } from '@/components/ui/MotionInView'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FAQAccordion, type FAQItem } from '@/components/FAQAccordion'
import { useLanguage } from '@/hooks/useLanguage'

type FAQJson = { id: string; qKey: string; aKey: string }

export function FAQSection() {
  const { t } = useLanguage()
  const items: FAQItem[] = (faq as FAQJson[]).map((f) => ({ id: f.id, q: t(f.qKey), a: t(f.aKey) }))

  return (
    <section id="faq" className="section-neutral-elevated border-t border-white/10 py-20 md:py-28">
      <Container>
        <MotionInView>
          <SectionHeading title={t('faq.title')} subtitle={t('faq.subtitle')} />
        </MotionInView>

        <div className="mt-10">
          <FAQAccordion items={items} />
        </div>
      </Container>
    </section>
  )
}
