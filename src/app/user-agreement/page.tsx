'use client'

import Link from 'next/link'

import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { MotionInView } from '@/components/ui/MotionInView'
import { useLanguage } from '@/hooks/useLanguage'

export default function UserAgreementPage() {
  const { t } = useLanguage()

  return (
    <div className="bg-bg">
      <Navbar />
      <main>
        <section className="section-neutral-elevated border-t border-white/10 py-20 md:py-28">
          <Container>
            <MotionInView>
              <div className="text-xs font-medium tracking-[0.22em] text-ink2">{t('terms.kicker')}</div>
              <h1 className="mt-4 font-display text-4xl tracking-tight text-ink md:text-6xl">{t('terms.title')}</h1>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-ink2 md:text-lg">{t('terms.subtitle')}</p>
            </MotionInView>

            <div className="mt-10 grid gap-5">
              <MotionInView delay={0.04}>
                <article className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 md:p-7">
                  <h2 className="font-display text-2xl tracking-tight text-ink">{t('terms.s1.title')}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink2">{t('terms.s1.body')}</p>
                </article>
              </MotionInView>

              <MotionInView delay={0.08}>
                <article className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 md:p-7">
                  <h2 className="font-display text-2xl tracking-tight text-ink">{t('terms.s2.title')}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink2">{t('terms.s2.body')}</p>
                </article>
              </MotionInView>

              <MotionInView delay={0.12}>
                <article className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 md:p-7">
                  <h2 className="font-display text-2xl tracking-tight text-ink">{t('terms.s3.title')}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink2">{t('terms.s3.body')}</p>
                </article>
              </MotionInView>

              <MotionInView delay={0.16}>
                <article className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 md:p-7">
                  <h2 className="font-display text-2xl tracking-tight text-ink">{t('terms.s4.title')}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink2">{t('terms.s4.body')}</p>
                </article>
              </MotionInView>

              <MotionInView delay={0.2}>
                <article className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 md:p-7">
                  <h2 className="font-display text-2xl tracking-tight text-ink">{t('terms.s5.title')}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink2">{t('terms.s5.body')}</p>
                </article>
              </MotionInView>

              <MotionInView delay={0.24}>
                <article className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 md:p-7">
                  <h2 className="font-display text-2xl tracking-tight text-ink">{t('terms.s6.title')}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink2">{t('terms.s6.body')}</p>
                </article>
              </MotionInView>
            </div>

            <MotionInView delay={0.28}>
              <div className="mt-10">
                <Link href="/">
                  <Button>{t('terms.back')}</Button>
                </Link>
              </div>
            </MotionInView>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  )
}
