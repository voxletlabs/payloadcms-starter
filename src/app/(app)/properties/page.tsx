import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import PropertyCard from '@/components/PropertyCard'
// import Search from '@/components/Search'
import { Info } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Properties - Payload Real Estate',
}

const PropertiesPage = async () => {
    const payload = await getPayload({ config })

    const PropertiesData = await payload.find({
        collection: 'properties',
    })

    const properties = PropertiesData.docs

    if (!properties || properties.length === 0) {
        return (
            <div className="max-w-7xl mx-auto py-[6rem]">
                <div className="flex shrink-0 items-center justify-center rounded-md border bg-muted/50 dark:bg-muted/20 border-dashed h-[30vh] md:h-[50vh]">
                    <div className="mx-auto flex w-full flex-col items-center justify-center text-center">
                        <Info className="size-8" />
                        <h3 className="mt-4 text-lg font-semibold">No Properties Found</h3>
                        <p className="mb-4 mt-2 text-sm text-muted-foreground max-w-lg">
                            It seems there are no properties available at the moment. Please check back later.
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className="pt-[6rem] pb-40 px-4 sm:px-6 max-w-7xl mx-auto">
                {/* <Search /> */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {properties.map((property) => {
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
            </div>
        </div>
    )
}

export default PropertiesPage