import type { CollectionConfig } from 'payload'
import { createRevalidateHook } from '@/hooks/revalidate'

export const Services: CollectionConfig = {
    slug: 'services',
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
            name: 'supportline',
            type: 'text',
            required: true,
        },
    ],
    hooks: createRevalidateHook(['/'], 'services-section'),
}