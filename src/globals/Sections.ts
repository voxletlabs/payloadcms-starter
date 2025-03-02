import type { GlobalConfig } from 'payload'
import { createRevalidateHook } from '../hooks/revalidate'

export const Sections: GlobalConfig = {
    slug: 'sections',
    fields: [
        {
            name: 'heroSection',
            label: 'Hero Section',
            type: 'group',
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    required: true,
                },
                {
                    name: 'calltoaction',
                    label: 'Call To Action',
                    type: 'group',
                    fields: [
                        {
                            name: 'title',
                            type: 'text',
                            required: true,
                        },
                        {
                            name: 'description',
                            type: 'text',
                            required: true,
                        },
                        {
                            label: 'CTA Button',
                            type: 'collapsible',
                            fields: [
                                {
                                    name: 'ctaButton',
                                    type: 'group',
                                    fields: [
                                        {
                                            name: 'label',
                                            type: 'text',
                                            required: true,
                                        },
                                        {
                                            name: 'href',
                                            type: 'text',
                                            required: true,
                                        },
                                        {
                                            name: 'openInNewTab',
                                            type: 'checkbox',
                                            label: 'Open link in a new tab',
                                            defaultValue: false,
                                        },
                                    ]
                                },
                            ],
                        },
                    ]
                },
                {
                    name: 'heroImage',
                    type: 'upload',
                    relationTo: 'media',
                    required: true,
                },
            ]
        },
        {
            name: 'latestPropertiesSection',
            label: 'Latest Properties Section',
            type: 'group',
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
            ]
        },
        {
            name: 'servicesSection',
            label: 'Services Section',
            type: 'group',
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
            ]
        },
        {
            name: 'testimonialsSection',
            label: 'Testimonials Section',
            type: 'group',
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
            ]
        },
        {
            name: 'faqsSection',
            label: 'Faqs Section',
            type: 'group',
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
            ]
        },
    ],
    hooks: createRevalidateHook(['/'], 'sections'),
}