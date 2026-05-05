'use client'

import Image from 'next/image'
import { Link2 } from 'lucide-react'

import team from '@/data/team.json'

import { Container } from '@/components/ui/Container'
import { MotionInView } from '@/components/ui/MotionInView'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { useLanguage } from '@/hooks/useLanguage'

type TeamJson = {
  id: string
  nameKey: string
  roleKey: string
  bioKey: string
}

export function AboutSection() {
  const { t } = useLanguage()
  const people = team as TeamJson[]
  const profileImageById: Record<string, string> = {
    jesus: '/feng.jpg',
    ali: '/aj.png',
    isa: '/isabella.jpg',
    isabella: '/isabella.jpg',
  }

  return (
    <section id="about" className="section-cyan border-t border-white/10 py-20 md:py-28">
      <Container>
        <MotionInView>
          <SectionHeading title={t('about.title')} subtitle={t('about.subtitle')} />
        </MotionInView>

        <div className="mt-8 grid gap-6 md:grid-cols-12">
          <MotionInView className="md:col-span-7">
            <div className="max-w-3xl text-base leading-relaxed text-ink2">{t('about.mission')}</div>
          </MotionInView>
          <MotionInView className="md:col-span-5" delay={0.05}>
            <div className="overflow-hidden rounded-2xl ring-1 ring-white/10">
              <Image
                src="/equipo_metodo_responsabilidad.png"
                alt="FDS team collaboration"
                width={1200}
                height={760}
                className="h-48 w-full object-cover"
              />
            </div>
          </MotionInView>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {people.map((p, idx) => {
            const name = t(p.nameKey)
            return (
              <MotionInView key={p.id} delay={idx * 0.06}>
                <div className="rounded-2xl bg-white/5 p-7 ring-1 ring-white/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 overflow-hidden rounded-2xl ring-1 ring-white/10">
                        <Image
                          src={profileImageById[p.id] ?? '/feng.jpg'}
                          alt={name}
                          width={96}
                          height={96}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-ink">{name}</div>
                        <div className="text-xs text-ink2">{t(p.roleKey)}</div>
                      </div>
                    </div>
                    <a
                      href="#"
                      aria-label="LinkedIn"
                      className="rounded-xl bg-white/5 p-2 text-ink2 ring-1 ring-white/10 hover:bg-white/8 hover:text-ink"
                    >
                      <Link2 size={18} />
                    </a>
                  </div>
                  <div className="mt-4 text-sm leading-relaxed text-ink2">{t(p.bioKey)}</div>
                </div>
              </MotionInView>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
