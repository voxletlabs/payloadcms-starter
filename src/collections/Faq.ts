import { CollectionConfig } from 'payload'
import { createRevalidateHook } from '@/hooks/revalidate'

export const Faqs: CollectionConfig = {
    slug: 'faqs',
    admin: {
        useAsTitle: 'question',
    },
    fields: [
        {
            name: 'question',
            type: 'text',
            required: true,
        },
        {
            name: 'answer',
            type: 'textarea',
            required: true,
        },
    ],
    hooks: createRevalidateHook(['/', '/contact'], 'faqs-section'),
}