import { render, screen } from '@testing-library/react'
import React from 'react'

import { LanguageProvider } from '@/context/LanguageContext'
import { PricingSection } from '@/sections/PricingSection'

describe('PricingSection', () => {
  it('renders pricing title', () => {
    render(
      <LanguageProvider>
        <PricingSection />
      </LanguageProvider>
    )

    expect(screen.getByText(/Planes claros|Clear plans/)).toBeInTheDocument()
  })
})

