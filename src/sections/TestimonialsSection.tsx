'use client'

import testimonials from '@/data/testimonials.json'

import { Container } from '@/components/ui/Container'
import { MotionInView } from '@/components/ui/MotionInView'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { TestimonialCard } from '@/components/TestimonialCard'
import { useLanguage } from '@/hooks/useLanguage'

type TestimonialJson = {
  id: string
  quoteKey: string
  name: string
  role: string
  country: string
}

export function TestimonialsSection() {
  const { t } = useLanguage()
  return (
    <section id="testimonials" className="section-violet border-t border-white/10 py-20 md:py-28">
      <Container>
        <MotionInView>
          <SectionHeading title={t('testimonials.title')} subtitle={t('testimonials.subtitle')} />
        </MotionInView>

        <div className="mt-10 columns-1 gap-6 md:columns-3">
          {(testimonials as TestimonialJson[]).map((ts, idx) => (
            <div key={ts.id} className="mb-6 break-inside-avoid">
              <MotionInView delay={idx * 0.03}>
                <TestimonialCard quoteKey={ts.quoteKey} name={ts.name} role={ts.role} country={ts.country} />
              </MotionInView>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
