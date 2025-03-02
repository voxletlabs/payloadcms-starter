import type { CollectionConfig } from 'payload'
import { createRevalidateHook } from '@/hooks/revalidate'

export const Properties: CollectionConfig = {
    slug: 'properties',
    admin: {
        useAsTitle: 'title',
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'description',
            type: 'textarea',
            required: true,
        },
        {
            name: 'propertyType',
            type: 'select',
            options: ['Apartment', 'House', 'Commercial'],
            required: true,
        },
        {
            name: 'location',
            type: 'text',
            required: true,
        },
        {
            name: 'availability',
            type: 'select',
            options: ['Sale', 'Rent'],
            required: true,
        },
        {
            name: 'priceOrRent',
            type: 'text',
            required: true,
        },
        {
            name: 'features',
            type: 'array',
            required: true,
            fields: [
                {
                    name: 'feature',
                    type: 'text',
                },
            ],
        },
        {
            name: 'images',
            type: 'array',
            required: true,
            fields: [
                {
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media',
                },
            ],
        },
    ],
    hooks: createRevalidateHook((doc) => ['/', '/properties', `/properties/${doc.slug}`]),
}