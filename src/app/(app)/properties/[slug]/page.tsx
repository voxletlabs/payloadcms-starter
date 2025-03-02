'use client'

import { useEffect, useState } from 'react'
import { useParams, usePathname } from 'next/navigation'
import { slugify } from '@/utils/slugify'
import Image from 'next/image'
import { MapPin, Share, Check, Info } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { Copy } from 'lucide-react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import LoadingScreen from '@/components/LoadingScreen'

const PropertyPage = () => {
    const params = useParams()
    const { slug } = params
    const pathname = usePathname()

    const [property, setProperty] = useState<any>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string>('')
    const [copied, setCopied] = useState(false)

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const res = await fetch('/api/getProperties')
                const data = await res.json()

                // Matching the slug with the slugified title
                const matchedProperty = data.find((prop: any) => slugify(prop.title) === slug)

                if (matchedProperty) {
                    setProperty(matchedProperty)
                }
            } catch (err) {
                setError('Failed to fetch properties')
            } finally {
                setLoading(false)
            }
        }

        fetchProperties()
    }, [slug])

    if (loading) {
        return <LoadingScreen />
    }

    if (error) {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-[6rem]">
                <div className="flex shrink-0 items-center justify-center rounded-md border bg-muted/50 dark:bg-muted/20 border-dashed h-[30vh] md:h-[50vh]">
                    <div className="mx-auto flex w-full flex-col items-center justify-center text-center">
                        <Info className="size-8" />
                        <h3 className="mt-4 text-lg font-semibold">{error}</h3>
                        <p className="mb-4 mt-2 text-sm text-muted-foreground max-w-lg">
                            Something went wrong while fetching the property details. Please try refreshing the page or come back later. If the issue persists, contact support.
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    if (!property) {
        return (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-[6rem]">
                <div className="flex shrink-0 items-center justify-center rounded-md border bg-muted/50 dark:bg-muted/20 border-dashed h-[30vh] md:h-[50vh]">
                    <div className="mx-auto flex w-full flex-col items-center justify-center text-center">
                        <Info className="size-8" />
                        <h3 className="mt-4 text-lg font-semibold">Property Not Found</h3>
                        <p className="mb-4 mt-2 text-sm text-muted-foreground max-w-lg">
                            The property you&apos;re looking for might have been removed, sold, or doesn&apos;t
                            exist. Please explore other listings or refine your search.
                        </p>
                        <Link href="/properties">
                            <Button className="font-semibold">View all Properties</Button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(`${window.location.origin}${pathname}`)
        setCopied(true)
        setTimeout(() => setCopied(false), 1000)
    }

    return (
        <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-[6rem] space-y-6">
                <div className="w-full max-md:aspect-video md:h-[30rem] rounded-xl overflow-hidden">
                    <Image
                        key={property.images[0].id}
                        src={property.images[0].image.url}
                        alt={property.images[0].image.alt}
                        width={property.images[0].image.width}
                        height={property.images[0].image.height}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="grid lg:grid-cols-[2fr_1fr] gap-6 min-h-screen">
                    <div className="space-y-2">
                        <div className="flex justify-between items-start gap-2">
                            <div>
                                <div className="flex items-center">
                                    <h1 className="text-xl sm:text-2xl font-bold">{property.title}</h1>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button variant="outline" size="icon">
                                            <Share className="w-4 h-4" />
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent className="w-[25rem] max-w-[90vw]">
                                        <DialogHeader>
                                            <DialogTitle>Share This Property</DialogTitle>
                                            <DialogDescription>
                                                Share this link with others to give them direct access to view the details
                                                of this property.
                                            </DialogDescription>
                                        </DialogHeader>
                                        <div className="flex items-center space-x-2">
                                            <div className="flex items-center gap-2 w-full">
                                                <Label htmlFor="link" className="sr-only">
                                                    Link
                                                </Label>
                                                <Input
                                                    className="w-full"
                                                    id="link"
                                                    value={`${window.location.origin}${pathname}`}
                                                    readOnly
                                                />
                                                <Button
                                                    variant="outline"
                                                    onClick={handleCopy}
                                                    className="px-3 flex items-center"
                                                >
                                                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                                </Button>
                                            </div>
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            </div>
                        </div>

                        <div
                            className="flex items-center gap-2 text-muted-foreground"
                        >
                            <MapPin className="w-4 h-4" />
                            <span>{property.location}</span>
                        </div>

                        <div
                            className="gap-4 py-4 border-y grid grid-cols-1 md:grid-cols-2"
                        >
                            {property.features.map((feature: any) => (
                                <p key={feature.id} className="">
                                    {feature.feature}
                                </p>
                            ))}
                        </div>

                        <div className="space-y-4">
                            <p className="text-muted-foreground">{property.description}</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {property.images.map((image: any) => (
                                    <Link
                                        href={image.image.url}
                                        key={image.id}
                                        target="_blank"
                                        className="w-full group aspect-video rounded-lg overflow-hidden relative block"
                                    >
                                        <div className="w-full h-full relative">
                                            <Image
                                                src={image.image.url}
                                                alt={image.image.alt}
                                                width={image.image.width}
                                                height={image.image.height}
                                                className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-60"
                                            />
                                            {/* Button with smooth transition */}
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100 group-hover:pointer-events-auto">
                                                <Button variant="secondary" className="rounded-full">
                                                    Open in New Tab
                                                </Button>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <Card className="p-6 sticky top-[5rem] h-max bg-background">
                        <div className="space-y-6">
                            <Badge className="rounded-full">{property.propertyType}</Badge>
                            <div className="space-y-6">
                                <div className="pb-8 flex flex-col gap-2">
                                    <div className="text-2xl font-bold">{property.priceOrRent}</div>
                                    <div className="text-muted-foreground">
                                        Available for {property.availability}
                                    </div>
                                </div>
                                <Link href="/contact">
                                    <Button className="w-full rounded-lg" size="lg">
                                        Contact Us
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default PropertyPage