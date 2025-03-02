import { CircleCheckBig } from 'lucide-react'

import React from 'react'
import SectionHead from '../SectionHead'
import { getPayload } from 'payload'
import config from '@payload-config'

const Services = async () => {
    const payload = await getPayload({ config })

    const ServicesData = await payload.find({
        collection: 'services',
    })

    if (!ServicesData.docs.length) {
        return null;
    }

    return (
        <main
            className="my-[6rem] sm:my-[8rem] lg:my-[10rem] px-4 sm:px-6 max-w-7xl mx-auto"
            id="services"
        >
            <SectionHead
                title="Comprehensive Real Estate Solutions for Your Every Need"
                supportLine="Explore our range of services designed to simplify your property journey, from buying and selling to property management and beyond."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto gap-2">
                {ServicesData.docs.reverse().map((service) => (
                    <ServiceCard key={service.id} {...service} />
                ))}
            </div>
        </main>
    )
}

export default Services

const ServiceCard = ({ title, supportline }: { title: string; supportline: string }) => {
    return (
        <div className="flex flex-col border rounded-lg py-10 relative hover:bg-accent dark:border-neutral-800 transition duration-200">
            <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
                <CircleCheckBig className="size-5" />
            </div>
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <span className="transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
                    {title}
                </span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
                {supportline}
            </p>
        </div>
    )
}