/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

/**
 * Supported timezones in IANA format.
 *
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "supportedTimezones".
 */
export type SupportedTimezones =
  | 'Pacific/Midway'
  | 'Pacific/Niue'
  | 'Pacific/Honolulu'
  | 'Pacific/Rarotonga'
  | 'America/Anchorage'
  | 'Pacific/Gambier'
  | 'America/Los_Angeles'
  | 'America/Tijuana'
  | 'America/Denver'
  | 'America/Phoenix'
  | 'America/Chicago'
  | 'America/Guatemala'
  | 'America/New_York'
  | 'America/Bogota'
  | 'America/Caracas'
  | 'America/Santiago'
  | 'America/Buenos_Aires'
  | 'America/Sao_Paulo'
  | 'Atlantic/South_Georgia'
  | 'Atlantic/Azores'
  | 'Atlantic/Cape_Verde'
  | 'Europe/London'
  | 'Europe/Berlin'
  | 'Africa/Lagos'
  | 'Europe/Athens'
  | 'Africa/Cairo'
  | 'Europe/Moscow'
  | 'Asia/Riyadh'
  | 'Asia/Dubai'
  | 'Asia/Baku'
  | 'Asia/Karachi'
  | 'Asia/Tashkent'
  | 'Asia/Calcutta'
  | 'Asia/Dhaka'
  | 'Asia/Almaty'
  | 'Asia/Jakarta'
  | 'Asia/Bangkok'
  | 'Asia/Shanghai'
  | 'Asia/Singapore'
  | 'Asia/Tokyo'
  | 'Asia/Seoul'
  | 'Australia/Sydney'
  | 'Pacific/Guam'
  | 'Pacific/Noumea'
  | 'Pacific/Auckland'
  | 'Pacific/Fiji';

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  blocks: {};
  collections: {
    users: User;
    media: Media;
    services: Service;
    properties: Property;
    testimonials: Testimonial;
    customers: Customer;
    faqs: Faq;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    users: UsersSelect<false> | UsersSelect<true>;
    media: MediaSelect<false> | MediaSelect<true>;
    services: ServicesSelect<false> | ServicesSelect<true>;
    properties: PropertiesSelect<false> | PropertiesSelect<true>;
    testimonials: TestimonialsSelect<false> | TestimonialsSelect<true>;
    customers: CustomersSelect<false> | CustomersSelect<true>;
    faqs: FaqsSelect<false> | FaqsSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: number;
  };
  globals: {
    metadata: Metadatum;
    sections: Section;
    header: Header;
    footer: Footer;
  };
  globalsSelect: {
    metadata: MetadataSelect<false> | MetadataSelect<true>;
    sections: SectionsSelect<false> | SectionsSelect<true>;
    header: HeaderSelect<false> | HeaderSelect<true>;
    footer: FooterSelect<false> | FooterSelect<true>;
  };
  locale: null;
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: number;
  name?: string | null;
  image?: (number | null) | Media;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: number;
  alt: string;
  prefix?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "services".
 */
export interface Service {
  id: number;
  title: string;
  supportline: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "properties".
 */
export interface Property {
  id: number;
  title: string;
  description: string;
  propertyType: 'Apartment' | 'House' | 'Commercial';
  location: string;
  availability: 'Sale' | 'Rent';
  priceOrRent: string;
  features: {
    feature?: string | null;
    id?: string | null;
  }[];
  images: {
    image?: (number | null) | Media;
    id?: string | null;
  }[];
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "testimonials".
 */
export interface Testimonial {
  id: number;
  customer: number | Customer;
  quote: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "customers".
 */
export interface Customer {
  id: number;
  name: string;
  jobTitle: string;
  socialMediaHandleOrWebsite: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "faqs".
 */
export interface Faq {
  id: number;
  question: string;
  answer: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: number;
  document?:
    | ({
        relationTo: 'users';
        value: number | User;
      } | null)
    | ({
        relationTo: 'media';
        value: number | Media;
      } | null)
    | ({
        relationTo: 'services';
        value: number | Service;
      } | null)
    | ({
        relationTo: 'properties';
        value: number | Property;
      } | null)
    | ({
        relationTo: 'testimonials';
        value: number | Testimonial;
      } | null)
    | ({
        relationTo: 'customers';
        value: number | Customer;
      } | null)
    | ({
        relationTo: 'faqs';
        value: number | Faq;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: number;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: number;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  name?: T;
  image?: T;
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  alt?: T;
  prefix?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "services_select".
 */
export interface ServicesSelect<T extends boolean = true> {
  title?: T;
  supportline?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "properties_select".
 */
export interface PropertiesSelect<T extends boolean = true> {
  title?: T;
  description?: T;
  propertyType?: T;
  location?: T;
  availability?: T;
  priceOrRent?: T;
  features?:
    | T
    | {
        feature?: T;
        id?: T;
      };
  images?:
    | T
    | {
        image?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "testimonials_select".
 */
export interface TestimonialsSelect<T extends boolean = true> {
  customer?: T;
  quote?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "customers_select".
 */
export interface CustomersSelect<T extends boolean = true> {
  name?: T;
  jobTitle?: T;
  socialMediaHandleOrWebsite?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "faqs_select".
 */
export interface FaqsSelect<T extends boolean = true> {
  question?: T;
  answer?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "metadata".
 */
export interface Metadatum {
  id: number;
  title: string;
  description: string;
  favicon: number | Media;
  keywords: {
    keyword: string;
    id?: string | null;
  }[];
  robots?: {
    index?: boolean | null;
    follow?: boolean | null;
  };
  themeColor: string;
  authors: {
    name: string;
    url?: string | null;
  };
  openGraph: {
    websiteUrl: string;
    title: string;
    description: string;
    siteName: string;
    openGraphImage: number | Media;
  };
  alternates?: {
    canonical?: string | null;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "sections".
 */
export interface Section {
  id: number;
  heroSection: {
    title: string;
    calltoaction: {
      title: string;
      description: string;
      ctaButton: {
        label: string;
        href: string;
        openInNewTab?: boolean | null;
      };
    };
    heroImage: number | Media;
  };
  latestPropertiesSection: {
    title: string;
    supportline: string;
  };
  servicesSection: {
    title: string;
    supportline: string;
  };
  testimonialsSection: {
    title: string;
    supportline: string;
  };
  faqsSection: {
    title: string;
    supportline: string;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "header".
 */
export interface Header {
  id: number;
  logo?: {
    logoType?: ('text' | 'image' | 'both') | null;
    logoText?: string | null;
    logoImage?: {
      image?: (number | null) | Media;
      height?: string | null;
      width?: string | null;
    };
  };
  navLinks?:
    | {
        label?: string | null;
        href?: string | null;
        openInNewTab?: boolean | null;
        id?: string | null;
      }[]
    | null;
  ctaButton?: {
    label?: string | null;
    href?: string | null;
    openInNewTab?: boolean | null;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footer".
 */
export interface Footer {
  id: number;
  logo?: {
    logoType?: ('text' | 'image' | 'both') | null;
    logoText?: string | null;
    logoImage?: {
      image?: (number | null) | Media;
      height?: string | null;
      width?: string | null;
    };
  };
  copywriteText?: string | null;
  footerLinks?: {
    linksGroups?:
      | {
          groupName?: string | null;
          links?:
            | {
                label?: string | null;
                href?: string | null;
                openInNewTab?: boolean | null;
                id?: string | null;
              }[]
            | null;
          id?: string | null;
        }[]
      | null;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "metadata_select".
 */
export interface MetadataSelect<T extends boolean = true> {
  title?: T;
  description?: T;
  favicon?: T;
  keywords?:
    | T
    | {
        keyword?: T;
        id?: T;
      };
  robots?:
    | T
    | {
        index?: T;
        follow?: T;
      };
  themeColor?: T;
  authors?:
    | T
    | {
        name?: T;
        url?: T;
      };
  openGraph?:
    | T
    | {
        websiteUrl?: T;
        title?: T;
        description?: T;
        siteName?: T;
        openGraphImage?: T;
      };
  alternates?:
    | T
    | {
        canonical?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "sections_select".
 */
export interface SectionsSelect<T extends boolean = true> {
  heroSection?:
    | T
    | {
        title?: T;
        calltoaction?:
          | T
          | {
              title?: T;
              description?: T;
              ctaButton?:
                | T
                | {
                    label?: T;
                    href?: T;
                    openInNewTab?: T;
                  };
            };
        heroImage?: T;
      };
  latestPropertiesSection?:
    | T
    | {
        title?: T;
        supportline?: T;
      };
  servicesSection?:
    | T
    | {
        title?: T;
        supportline?: T;
      };
  testimonialsSection?:
    | T
    | {
        title?: T;
        supportline?: T;
      };
  faqsSection?:
    | T
    | {
        title?: T;
        supportline?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "header_select".
 */
export interface HeaderSelect<T extends boolean = true> {
  logo?:
    | T
    | {
        logoType?: T;
        logoText?: T;
        logoImage?:
          | T
          | {
              image?: T;
              height?: T;
              width?: T;
            };
      };
  navLinks?:
    | T
    | {
        label?: T;
        href?: T;
        openInNewTab?: T;
        id?: T;
      };
  ctaButton?:
    | T
    | {
        label?: T;
        href?: T;
        openInNewTab?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footer_select".
 */
export interface FooterSelect<T extends boolean = true> {
  logo?:
    | T
    | {
        logoType?: T;
        logoText?: T;
        logoImage?:
          | T
          | {
              image?: T;
              height?: T;
              width?: T;
            };
      };
  copywriteText?: T;
  footerLinks?:
    | T
    | {
        linksGroups?:
          | T
          | {
              groupName?: T;
              links?:
                | T
                | {
                    label?: T;
                    href?: T;
                    openInNewTab?: T;
                    id?: T;
                  };
              id?: T;
            };
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}