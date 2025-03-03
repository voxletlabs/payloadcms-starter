import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { s3Storage } from '@payloadcms/storage-s3'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import { formBuilderPlugin } from '@payloadcms/plugin-form-builder';
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { MetaData } from './globals/MetaData'
import { Header } from './globals/Header'
import { Footer } from './globals/Footer'
import { Faqs } from './collections/Faq'
import { Services } from './collections/Services'
import { Testimonials } from './collections/Testimonials'
import { Customers } from './collections/Customers'
import { Properties } from './collections/Properties'
import { Sections } from './globals/Sections'
import { Contact } from './globals/Contact'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  globals: [
    MetaData,
    Sections,
    Header,
    Footer,
    Contact,
  ],
  collections: [
    Users,
    Media,
    Services,
    Properties,
    Testimonials,
    Customers,
    Faqs,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    formBuilderPlugin({
      // Optional: Customize plugin options here
    }),
    s3Storage({
      collections: {
        media: {
          prefix: 'media',
        },
      },
      bucket:
        process.env.S3_BUCKET ??
        (() => {
          throw new Error('Missing environment variable: S3_BUCKET')
        })(),
      config: {
        forcePathStyle: true,
        credentials: {
          accessKeyId:
            process.env.S3_ACCESS_KEY_ID ??
            (() => {
              throw new Error('Missing environment variable: S3_ACCESS_KEY_ID')
            })(),
          secretAccessKey:
            process.env.S3_SECRET_ACCESS_KEY ??
            (() => {
              throw new Error('Missing environment variable: S3_SECRET_ACCESS_KEY')
            })(),
        },
        region: process.env.S3_REGION || 'us-east-1',
        endpoint: process.env.S3_ENDPOINT,
      },
    }),
  ],
})
