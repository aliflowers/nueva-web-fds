'use client'

import { Mail, Phone } from 'lucide-react'
import { useMemo, useState } from 'react'

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { MotionInView } from '@/components/ui/MotionInView'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { useLanguage } from '@/hooks/useLanguage'

export function ContactSection() {
  const { t } = useLanguage()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(t('contact.subject'))
    const body = encodeURIComponent(`${t('contact.body.name')}: ${name}\n${t('contact.body.email')}: ${email}\n\n${message}`)
    return `mailto:contact_us@fengdigitalservices.com?subject=${subject}&body=${body}`
  }, [email, message, name, t])

  return (
    <section id="contact" className="section-blue border-t border-white/10 py-20 md:py-28">
      <Container>
        <MotionInView>
          <SectionHeading title={t('contact.title')} subtitle={t('contact.subtitle')} />
        </MotionInView>

        <div className="mt-10 grid gap-6 md:grid-cols-12">
          <MotionInView className="md:col-span-5">
            <div className="rounded-2xl bg-white/5 p-7 ring-1 ring-white/10">
              <div className="text-sm font-medium text-ink">{t('contact.direct')}</div>
              <div className="mt-5 grid gap-3">
                <a
                  className="flex items-center gap-3 rounded-xl bg-black/20 px-4 py-3 text-sm text-ink ring-1 ring-white/10 hover:bg-black/30"
                  href="mailto:contact_us@fengdigitalservices.com"
                >
                  <Mail size={18} className="text-brand-600" />
                  <span>contact_us@fengdigitalservices.com</span>
                </a>
                <a
                  className="flex items-center gap-3 rounded-xl bg-black/20 px-4 py-3 text-sm text-ink ring-1 ring-white/10 hover:bg-black/30"
                  href="tel:+17867063986"
                >
                  <Phone size={18} className="text-brand-600" />
                  <span>+1 786 706 3986</span>
                </a>
              </div>
              <div className="mt-6 text-sm leading-relaxed text-ink2">{t('contact.note')}</div>
            </div>
          </MotionInView>

          <MotionInView delay={0.08} className="md:col-span-7">
            <div className="rounded-2xl bg-white/5 p-7 ring-1 ring-white/10">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-xs font-medium tracking-[0.2em] text-ink2">{t('contact.form.name')}</span>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-11 rounded-xl bg-black/20 px-4 text-sm text-ink outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-brand-700/50"
                    placeholder={t('contact.form.namePh')}
                  />
                </label>
                <label className="grid gap-2">
                  <span className="text-xs font-medium tracking-[0.2em] text-ink2">{t('contact.form.email')}</span>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-11 rounded-xl bg-black/20 px-4 text-sm text-ink outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-brand-700/50"
                    placeholder={t('contact.form.emailPh')}
                  />
                </label>
              </div>

              <label className="mt-4 grid gap-2">
                <span className="text-xs font-medium tracking-[0.2em] text-ink2">{t('contact.form.message')}</span>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="rounded-xl bg-black/20 px-4 py-3 text-sm text-ink outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-brand-700/50"
                  placeholder={t('contact.form.messagePh')}
                />
              </label>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-xs text-ink2">{t('contact.form.disclaimer')}</div>
                <Button
                  size="lg"
                  onClick={() => window.open(mailto, '_self')}
                  type="button"
                >
                  {t('contact.form.send')}
                </Button>
              </div>
            </div>
          </MotionInView>
        </div>
      </Container>
    </section>
  )
}
