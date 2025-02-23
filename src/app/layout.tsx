import { Inter } from 'next/font/google'
// import { ThemeProvider } from '@/components/theme-provider'
import { getPayload } from 'payload'
import { Payload } from 'payload'
import config from '@payload-config'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

// export async function generateMetadata(): Promise<Metadata> {
//   const payload: Payload = await getPayload({ config })

//   const metaData = await payload.findGlobal({
//     slug: 'metadata',
//   })

//   return {
//     title: metaData.title,
//     description: metaData.description,
//     icons: {
//       icon: (metaData.favicon as any)?.url || '/favicon.ico',
//     },
//     keywords: metaData.keywords.map((kw) => kw.keyword),
//     robots: {
//       index: metaData.robots?.index ?? true,
//       follow: metaData.robots?.follow ?? true,
//     },
//     themeColor: metaData.themeColor,
//     authors: [
//       {
//         name: metaData.authors.name,
//         url: metaData.authors.url || '',
//       },
//     ],
//     openGraph: {
//       type: 'website',
//       url: metaData.openGraph.websiteUrl,
//       title: metaData.openGraph.title,
//       description: metaData.openGraph.description,
//       siteName: metaData.openGraph.siteName,
//       images: [
//         {
//           url: (metaData.openGraph?.openGraphImage as any)?.url || '',
//           width: (metaData.openGraph?.openGraphImage as any)?.width || 1200,
//           height: (metaData.openGraph?.openGraphImage as any)?.height || 630,
//           alt: (metaData.openGraph?.openGraphImage as any)?.alt || '',
//         },
//       ],
//     },
//     alternates: {
//       canonical: metaData.alternates?.canonical || '',
//     },
//   }
// }

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
        </ThemeProvider> */}
                {children}
            </body>
        </html>
    )
}