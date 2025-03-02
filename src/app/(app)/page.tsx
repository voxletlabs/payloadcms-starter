import React from 'react'
import FaqSection from '@/components/FaqSection'
import Services from '@/components/ServiecsSection'
import Testimonials from '@/components/TestimonialsSection'
import LatestProperties from '@/components/LatestProperties'
import HeroSection from '@/components/HeroSection'

export default async function HomePage() {

  return (
    <div className="">
      <HeroSection />
      <LatestProperties />
      <Services />
      <Testimonials />
      <FaqSection />
    </div>
  )
}
