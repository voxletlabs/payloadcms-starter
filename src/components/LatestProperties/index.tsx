import React from 'react'
import PropertyCard from '../PropertyCard'
import SectionHead from '../SectionHead'
import { Button } from '../ui/button'
import Link from 'next/link'
import { ChevronRight, Divide } from 'lucide-react'
import { getPayload } from 'payload'
import config from '@payload-config'
import { latestPropertiesSection } from '@/data/sectionsData'

const LatestProperties = async () => {
    const payload = await getPayload({ config })

    const PropertiesData = await payload.find({
        collection: 'properties',
    })

    const properties = PropertiesData.docs

    if (!properties || properties.length === 0) {
        return null
    }

    return (
        <div className="pt-[7rem] pb-40 px-4 sm:px-6 max-w-7xl mx-auto">
            <SectionHead
                title={latestPropertiesSection.title}
                supportLine={latestPropertiesSection.supportline}
                className="pt-8 pb-12"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {properties.slice(0, 6).map((property) => {
                    const imageUrl = (property.images?.[0]?.image as any)?.url
                    return (
                        <PropertyCard
                            key={property.id}
                            image={imageUrl}
                            title={property.title}
                            price={property.priceOrRent}
                            location={property.location}
                            availability={property.availability}
                            propertyType={property.propertyType}
                        />
                    )
                })}
            </div>

            {/* Show "See More" button only if there are more than 6 properties */}
            {properties.length > 6 && (
                <div
                    className="w-full flex item-center justify-center mt-8"
                >
                    <Link href="/properties">
                        <Button size={'lg'} className="rounded-full">
                            See More <ChevronRight className="size-4" />
                        </Button>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default LatestProperties