import React from 'react'

import { InfiniteMovingCards } from '@/components/ui/InfiniteCards'
import SectionHead from '../SectionHead'
import { getPayload } from 'payload'
import config from '@payload-config'
import { testimonialsSection } from '@/data/sectionsData'

interface Customer {
    id: number
    name: string
    jobTitle: string
    socialMediaHandleOrWebsite: string
}

interface Testimonial {
    id: number
    quote: string
    customer: Customer | null | number
}

const Testimonials = async () => {
    const payload = await getPayload({ config })

    const TestimonialsData = await payload.find({
        collection: 'testimonials',
    })

    if (!TestimonialsData.docs.length) {
        return null;
    }

    const items = TestimonialsData.docs.map((testimonial: Testimonial) => {
        const customer = typeof testimonial.customer === 'object' ? testimonial.customer : null

        return {
            quote: testimonial.quote,
            name: customer?.name ?? 'Anonymous',
            title: customer?.jobTitle ?? 'Unknown',
            socialMedia: customer?.socialMediaHandleOrWebsite ?? '',
        }
    })

    return (
        <section id="testimonials" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
            <SectionHead
                title={testimonialsSection.title}
                supportLine={testimonialsSection.supportline}
                className="py-8"
            />
            <div className="flex flex-col items-center max-lg:mt-10">
                <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
                    <InfiniteMovingCards items={items} direction="right" speed="slow" />
                </div>
            </div>
        </section>
    )
}

export default Testimonials