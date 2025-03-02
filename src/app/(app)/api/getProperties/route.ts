import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function GET() {
    try {
        const payload = await getPayload({ config })
        const PropertiesData = await payload.find({
            collection: 'properties',
        })

        // Returning properties data as JSON
        return NextResponse.json(PropertiesData.docs)
    } catch (error) {
        console.error('Error fetching properties:', error)
        return NextResponse.json({ error: 'Failed to fetch properties' }, { status: 500 })
    }
}