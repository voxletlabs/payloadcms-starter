import type { GlobalConfig } from 'payload'
import { createRevalidateHook } from '../hooks/revalidate'

export const Header: GlobalConfig = {
    slug: 'header',
    fields: [
        {
            name: 'logo',
            type: 'group',
            fields: [
                {
                    name: 'logoType',
                    type: 'radio',
                    options: [
                        {
                            label: 'Text',
                            value: 'text',
                        },
                        {
                            label: 'Image',
                            value: 'image',
                        },
                        {
                            label: 'both',
                            value: 'both',
                        },
                    ],
                    defaultValue: 'text',
                    admin: {
                        layout: 'horizontal',
                    },
                },
                {
                    name: 'logoText',
                    type: 'text',
                },
                {
                    name: 'logoImage',
                    type: 'group',
                    fields: [
                        {
                            name: 'image',
                            type: 'upload',
                            relationTo: 'media',
                        },
                        {
                            name: 'height',
                            type: 'text',
                        },
                        {
                            name: 'width',
                            type: 'text',
                        },
                    ]
                },
            ],
        },
        {
            name: 'navLinks',
            type: 'array',
            fields: [
                {
                    name: 'label',
                    type: 'text',
                },
                {
                    name: 'href',
                    type: 'text',
                },
                {
                    name: 'openInNewTab',
                    type: 'checkbox',
                    label: 'Open link in a new tab',
                    defaultValue: false,
                },
            ],
        },
        {
            name: 'ctaButton',
            type: 'group',
            fields: [
                {
                    name: 'label',
                    type: 'text',
                },
                {
                    name: 'href',
                    type: 'text',
                },
                {
                    name: 'openInNewTab',
                    type: 'checkbox',
                    label: 'Open link in a new tab',
                    defaultValue: false,
                },
            ],
        },

    ],
    hooks: createRevalidateHook(['/'], 'header'),
}