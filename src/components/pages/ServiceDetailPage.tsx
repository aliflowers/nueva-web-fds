'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import services from '@/data/services.json'

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { MotionInView } from '@/components/ui/MotionInView'
import { useLanguage } from '@/hooks/useLanguage'

type ServiceJson = {
  id: string
  titleKey: string
  descKey: string
  bulletsKeys: string[]
  ctaKey: string
}

const accentByService: Record<string, string> = {
  strategy: 'section-red',
  ads: 'section-blue',
  design: 'section-violet',
  seo: 'section-gold',
  social: 'section-cyan',
  consulting: 'section-neutral-elevated',
}

const imageByService: Record<string, string> = {
  strategy: '/estrategia_digital_fds.png',
  ads: '/publicidad_paga_fds.png',
  design: '/diseño_grafico_fds.png',
  seo: '/seo_optimizacion.png',
  social: '/marketing_en_redes_sociales.png',
  consulting: '/consultoria.png',
}

export function ServiceDetailPage({ serviceId }: { serviceId: string }) {
  const { t } = useLanguage()
  const item = (services as ServiceJson[]).find((entry) => entry.id === serviceId)

  if (!item) {
    return (
      <section className="section-neutral-elevated border-t border-white/10 py-24">
        <Container>
          <MotionInView>
            <h1 className="font-display text-4xl tracking-tight text-ink">{t('service.page.notFound.title')}</h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink2">{t('service.page.notFound.subtitle')}</p>
            <Link href="/#services" className="mt-8 inline-flex">
              <Button>{t('service.page.back')}</Button>
            </Link>
          </MotionInView>
        </Container>
      </section>
    )
  }

  const serviceVisual = imageByService[item.id] ?? '/estrategia_digital_fds.png'

  return (
    <section className={`${accentByService[item.id] ?? 'section-neutral-elevated'} border-t border-white/10 py-20 md:py-28`}>
      <Container>
        <MotionInView>
          <div className="text-xs font-medium tracking-[0.22em] text-ink2">{t('service.page.kicker')}</div>
          <h1 className="mt-4 max-w-4xl font-display text-4xl tracking-tight text-ink md:text-6xl">{t(item.titleKey)}</h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-ink2 md:text-lg">{t(item.descKey)}</p>
        </MotionInView>

        <MotionInView delay={0.03}>
          <div className="mt-8 overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
            <div className="grid md:grid-cols-12">
              <div className="p-6 md:col-span-4 md:p-7">
                <div className="text-xs font-medium tracking-[0.22em] text-ink2">CASE STUDY PREVIEW</div>
                <div className="mt-3 font-display text-2xl tracking-tight text-ink">{t(item.titleKey)}</div>
                <p className="mt-3 text-sm leading-relaxed text-ink2">{t('service.page.caseSubtitle')}</p>
                <div className="mt-6 grid gap-3">
                  {[t('service.page.metric1'), t('service.page.metric2'), t('service.page.metric3')].map((m) => (
                    <div key={m} className="rounded-xl bg-black/20 px-4 py-3 text-sm text-ink2 ring-1 ring-white/10">
                      {m}
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:col-span-8">
                <motion.div whileHover={{ scale: 1.015 }} transition={{ duration: 0.35 }} className="h-full">
                  <Image
                    src={serviceVisual}
                    alt={t(item.titleKey)}
                    width={960}
                    height={600}
                    className="h-full min-h-64 w-full object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </MotionInView>

        <div className="mt-10 grid gap-6 md:grid-cols-12">
          <MotionInView className="md:col-span-7" delay={0.05}>
            <div className="rounded-2xl bg-white/5 p-7 ring-1 ring-white/10 md:p-8">
              <div className="text-sm font-medium text-ink">{t('service.page.includes')}</div>
              <div className="mt-5 grid gap-3">
                {item.bulletsKeys.map((key, index) => (
                  <motion.div
                    key={key}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-xl bg-black/20 px-4 py-3 text-sm text-ink2 ring-1 ring-white/10"
                  >
                    <span className="mr-2 text-brand-400">{String(index + 1).padStart(2, '0')}</span>
                    {t(key)}
                  </motion.div>
                ))}
              </div>
            </div>
          </MotionInView>

          <MotionInView className="md:col-span-5" delay={0.1}>
            <div className="rounded-2xl bg-white/5 p-7 ring-1 ring-white/10 md:p-8">
              <div className="text-sm font-medium text-ink">{t('service.page.ctaTitle')}</div>
              <p className="mt-3 text-sm leading-relaxed text-ink2">{t('service.page.ctaSubtitle')}</p>
              <div className="mt-6 grid gap-3">
                <Link href="/#pricing">
                  <Button className="w-full">{t('service.page.ctaPrimary')}</Button>
                </Link>
                <a href="mailto:contact_us@fengdigitalservices.com?subject=FDS%20-%20Service%20Detail">
                  <Button className="w-full" variant="secondary">{t('service.page.ctaSecondary')}</Button>
                </a>
                <Link href="/#services">
                  <Button className="w-full" variant="ghost">{t('service.page.back')}</Button>
                </Link>
              </div>
            </div>
          </MotionInView>
        </div>
      </Container>
    </section>
  )
}
