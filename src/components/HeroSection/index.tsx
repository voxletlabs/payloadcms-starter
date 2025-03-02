import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'
import SearchProperties from '../SearchProperties'

export default function HeroSection() {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 pt-[7rem]">
            <div className="grid md:grid-cols-[1fr,auto] gap-16 mb-12">
                <div className="space-y-2">
                    <h1 className="text-[2.75rem] flex items-end justify-start max-w-xl leading-snug font-semibold max-md:text-4xl text-center mx-auto md:text-start md:mx-0">
                        Unlock the Door to Your Dream Home, Where Every Day is Dream Day.
                    </h1>
                </div>
                <div className="flex flex-col items-center md:items-start ">
                    <div className="w-full flex items-center justify-center md:justify-start gap-2 mb-4 md:mb-2">
                        <CheckCircle2 className="size-4 text-green-500" />
                        <span className="font-medium">Dream Living</span>
                    </div>
                    <p className="text-sm text-muted-foreground max-w-[280px] mb-4 leading-relaxed text-center md:text-start">
                        Discover premium properties tailored to your lifestyle, blending comfort, design, and
                        location to create your perfect home.
                    </p>
                    <Link href="/properties" className="">
                        <Button variant={'outline'}>Properties →</Button>
                    </Link>
                </div>
            </div>

            <SearchProperties />

            <div className="relative w-full h-[25rem] rounded-xl bg-accent overflow-hidden">
                <Image
                    src="/"
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