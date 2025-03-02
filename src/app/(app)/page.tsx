import React from 'react'
import FaqSection from '@/components/FaqSection'
import Services from '@/components/ServiecsSection'

export default async function HomePage() {

  return (
    <div className="pt-[5rem]">
      <Services />
      <FaqSection />
    </div>
  )
}
