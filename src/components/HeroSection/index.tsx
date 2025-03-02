import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'
import SearchProperties from '../SearchProperties'
import { heroSection } from '@/data/sectionsData'

export default async function HeroSection() {

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 pt-[7rem]">
            <div className="grid md:grid-cols-[1fr,auto] gap-16 mb-12">
                <div className="space-y-2">
                    <h1 className="text-[2.75rem] flex items-end justify-start max-w-xl leading-snug font-semibold max-md:text-4xl text-center mx-auto md:text-start md:mx-0">
                        {heroSection.title}
                    </h1>
                </div>
                <div className="flex flex-col items-center md:items-start ">
                    <div className="w-full flex items-center justify-center md:justify-start gap-2 mb-4 md:mb-2">
                        <CheckCircle2 className="size-4 text-green-500" />
                        <span className="font-medium">{heroSection.calltoaction.title}</span>
                    </div>
                    <p className="text-sm text-muted-foreground max-w-[280px] mb-4 leading-relaxed text-center md:text-start">
                        {heroSection.calltoaction.description}
                    </p>
                    <Link href={heroSection.calltoaction.ctaButton.href} target={heroSection.calltoaction.ctaButton.title ? '_blank' : '_self'} className="">
                        <Button variant={'outline'}>{heroSection.calltoaction.ctaButton.label} →</Button>
                    </Link>
                </div>
            </div>

            <SearchProperties />

            <div className="relative w-full h-[25rem] rounded-xl bg-accent overflow-hidden">
                <Image
                    src={heroSection.heroImage.url}
                    alt="Payload Real Estate"
                    width={1400}
                    height={600}
                    className="object-cover w-full h-full"
                />

                <div className="absolute left-0 bottom-0 w-full p-8 bg-gradient-to-t from-black/60 via-black/40 to-transparent" />
            </div>
        </div>
    )
}