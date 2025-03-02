import type { CollectionConfig } from 'payload'
import { createRevalidateHook } from '@/hooks/revalidate'

export const Testimonials: CollectionConfig = {
    slug: 'testimonials',
    admin: {
        useAsTitle: 'customer',
    },
    fields: [
        {
            name: 'customer',
            type: 'relationship',
            relationTo: 'customers',
            required: true,
        },
        {
            name: 'quote',
            type: 'textarea',
            required: true,
        },
    ],
    hooks: createRevalidateHook(['/'], 'testimonials-section'),
}