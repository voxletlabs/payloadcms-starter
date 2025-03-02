import { getPayload } from 'payload'
import { Payload } from 'payload'
import config from '@payload-config'
import { SectionHeadTypes } from '@/types/SectionHead'

const payload: Payload = await getPayload({ config })

const sections = await payload.findGlobal({
    slug: 'sections',
})

export const heroSection: any = sections.heroSection
export const latestPropertiesSection: SectionHeadTypes = sections.latestPropertiesSection
export const servicesSection: SectionHeadTypes = sections.servicesSection
export const testimonialsSection: SectionHeadTypes = sections.testimonialsSection
export const faqsSection: SectionHeadTypes = sections.faqsSection
