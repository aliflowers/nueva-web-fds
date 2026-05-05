import { render, screen } from '@testing-library/react'
import React from 'react'

import { LanguageProvider } from '@/context/LanguageContext'
import { useLanguage } from '@/hooks/useLanguage'

function Probe() {
  const { t } = useLanguage()
  return <div>{t('nav.services')}</div>
}

describe('LanguageProvider', () => {
  it('provides translations', () => {
    render(
      <LanguageProvider>
        <Probe />
      </LanguageProvider>
    )

    expect(screen.getByText(/Servicios|Services/)).toBeInTheDocument()
  })
})

