import { Card } from '@/components/ui/card'
import { CircleDollarSign, KeyRound, Square } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { slugify } from '@/utils/slugify'

interface PropertyCardProps {
    image: string
    title: string
    price: string
    location: string
    availability: string
    propertyType: string
}

export default function PropertyCard({
    image,
    title,
    price,
    location,
    availability,
    propertyType,
}: PropertyCardProps) {
    return (
        <Link href={`/properties/${slugify(title)}`} className="w-full max-w-md">
            <Card className="bg-background border-none p-0 shadow-none group">
                <div className="relative aspect-video overflow-hidden rounded-lg">
                    <Image
                        src={image}
                        alt={title}
                        width={800}
                        height={400}
                        className="object-cover w-full h-full group-hover:scale-[1.03] transition duration-500"
                    />
                </div>

                <div className="py-4 space-y-2">
                    <div className="space-y-1">
                        <h3 className="font-semibold text-lg line-clamp-1">{title}</h3>
                        <div className="flex justify-between items-center gap-1">
                            <p className="text-muted-foreground text-sm">{location}</p>
                            <p className="font-semibold  text-sm">{price}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 text-muted-foreground">
                        {availability === 'Rent' && (
                            <div className="flex items-center gap-1 text-sm">
                                <KeyRound className="h-4 w-4" />
                                <span>Available for Rent</span>
                            </div>
                        )}
                        {availability === 'Sale' && (
                            <div className="flex items-center gap-1 text-sm">
                                <CircleDollarSign className="h-4 w-4" />
                                <span>Available for Sale</span>
                            </div>
                        )}
                        <div className="flex items-center gap-1 text-sm">
                            <Square className="h-4 w-4" />
                            <span>{propertyType}</span>
                        </div>
                    </div>
                </div>
            </Card>
        </Link>
    )
}