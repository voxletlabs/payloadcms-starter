// @ts-nocheck

import { Metadata } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'
import { slugify } from '@/utils/slugify'

export async function generateMetadata({ params }: any): Promise<Metadata> {
    const payload = await getPayload({ config })

    const PropertiesData = await payload.find({
        collection: 'properties',
    })

    const Property = PropertiesData.docs.find(
        (prop: { title: string }) => slugify(prop.title) === params.slug,
    )

    if (!Property) {
        return {
            title: 'Property not found - Payload Real Estate',
            description: 'The requested property could not be found.',
        }
    }

    return {
        title: `${Property.title} - Payload Real Estate`,
        description: Property.description,
    }
}

export default function Layout({ children, params }) {
    return <main>{children}</main>
}