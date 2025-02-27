import '@/app/globals.css'
import Footer from '@/components/Footer'
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

    console.log(header)
    console.log(header?.logo?.logoImage?.image)

    return (
        <main className="overflow-x-hidden">
            <Header header={header} />
            {children}
            <Footer />
        </main>
    )
}