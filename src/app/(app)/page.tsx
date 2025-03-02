import React from 'react'
import FaqSection from '@/components/FaqSection'
import Services from '@/components/ServiecsSection'
import Testimonials from '@/components/TestimonialsSection'
import LatestProperties from '@/components/LatestProperties'

export default async function HomePage() {

  return (
    <div className="pt-[5rem]">
      <LatestProperties />
      <Services />
      <Testimonials />
      <FaqSection />
    </div>
  )
}
