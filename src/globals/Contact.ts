import type { GlobalConfig } from 'payload'
import { createRevalidateHook } from '../hooks/revalidate'

export const Contact: GlobalConfig = {
    slug: 'contact',
    fields: [
        {
            name: 'title',
            type: 'text',
        },
        {
            name: 'description',
            type: 'text',
        },
        {
            name: 'emails',
            type: 'array',
            fields: [
                {
                    name: 'email',
                    type: 'email',
                },
            ]
        },
        {
            name: 'phoneNumbers',
            type: 'array',
            fields: [
                {
                    name: 'phoneNumber',
                    type: 'text',
                },
            ]
        },
        {
            name: 'social',
            type: 'array',
            fields: [
                {
                    name: 'label',
                    type: 'text',
                },
                {
                    name: 'link',
                    type: 'text',
                },
            ]
        },
    ],
    hooks: createRevalidateHook(['/contact'], 'contact'),
}