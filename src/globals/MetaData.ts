import type { GlobalConfig } from 'payload'
import { createRevalidateHook } from '../hooks/revalidate'

export const MetaData: GlobalConfig = {
  slug: 'metadata',
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
      name: 'favicon',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'keywords',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'keyword',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'robots',
      type: 'group',
      fields: [
        {
          name: 'index',
          type: 'checkbox',
          defaultValue: true,
        },
        {
          name: 'follow',
          type: 'checkbox',
          defaultValue: true,
        },
      ],
    },
    {
      name: 'themeColor',
      type: 'text',
      defaultValue: '#ffffff',
      required: true,
    },
    {
      name: 'authors',
      type: 'group',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
        },
      ],
    },
    {
      name: 'openGraph',
      type: 'group',
      fields: [
        {
          name: 'websiteUrl',
          type: 'text',
          required: true,
        },
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
          name: 'siteName',
          type: 'text',
          required: true,
        },
        {
          name: 'openGraphImage',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'alternates',
      type: 'group',
      fields: [
        {
          name: 'canonical',
          type: 'text',
        },
      ],
    },
  ],
  hooks: createRevalidateHook(['/'], 'meta-data'),
}