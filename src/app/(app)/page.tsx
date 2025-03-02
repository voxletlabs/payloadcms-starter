import React from 'react'
import FaqSection from '@/components/FaqSection'
import Services from '@/components/ServiecsSection'
import Testimonials from '@/components/TestimonialsSection'

export default async function HomePage() {

  return (
    <div className="pt-[5rem]">
      <Services />
      <Testimonials />
      <FaqSection />
    </div>
  )
}
