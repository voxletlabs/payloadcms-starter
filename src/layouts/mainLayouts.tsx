import '@/app/globals.css'
import Footer, { FooterData } from '@/components/Footer'
import Header from '@/components/Header'
import { getPayload } from 'payload'
import { Payload } from 'payload'
import config from '@payload-config'

export default async function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const payload: Payload = await getPayload({ config })

    const header = await payload.findGlobal({
        slug: 'header',
    })

    const footer = await payload.findGlobal({
        slug: 'footer',
    }) as FooterData;


    console.log(footer)
    console.log(footer?.footerLinks?.linksGroups)

    return (
        <main className="overflow-x-hidden">
            <Header header={header} />
            {children}
            <Footer footer={footer} />
        </main>
    )
}