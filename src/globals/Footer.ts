import type { GlobalConfig } from 'payload'
import { createRevalidateHook } from '../hooks/revalidate'

export const Footer: GlobalConfig = {
    slug: 'footer',
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
            name: 'copywriteText',
            type: 'text',
        },
        {
            name: 'footerLinks',
            type: 'array',
            fields: [
                {
                    name: 'linksGroup',
                    type: 'group',
                    fields: [
                        {
                            name: 'groupName',
                            type: 'text',
                        },
                        {
                            name: 'links',
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
                    ],
                },
            ],
        },
    ],
    hooks: createRevalidateHook(['/'], 'footer'),
}