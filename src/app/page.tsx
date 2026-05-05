import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

import { AboutSection } from '@/sections/AboutSection'
import { ContactSection } from '@/sections/ContactSection'
import { FAQSection } from '@/sections/FAQSection'
import { FinalCTASection } from '@/sections/FinalCTASection'
import { HeroSection } from '@/sections/HeroSection'
import { HowWeWorkSection } from '@/sections/HowWeWorkSection'
import { PricingSection } from '@/sections/PricingSection'
import { ResultsSection } from '@/sections/ResultsSection'
import { ServicesSection } from '@/sections/ServicesSection'
import { TestimonialsSection } from '@/sections/TestimonialsSection'

export default function Page() {
  return (
    <div id="top" className="bg-bg">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <HowWeWorkSection />
        <PricingSection />
        <ResultsSection />
        <TestimonialsSection />
        <AboutSection />
        <FAQSection />
        <ContactSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  )
}
