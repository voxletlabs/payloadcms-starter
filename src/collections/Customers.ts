import type { CollectionConfig } from 'payload'

export const Customers: CollectionConfig = {
    slug: 'customers',
    admin: {
        useAsTitle: 'name',
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
        },
        {
            name: 'jobTitle',
            type: 'text',
            required: true,
        },
        {
            name: 'socialMediaHandleOrWebsite',
            type: 'text',
            required: true,
        },
    ],
}