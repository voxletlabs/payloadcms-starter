'use client'

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Building2, Info, MapPin, Wallet } from 'lucide-react'
import { Button } from '../ui/button'
import { useEffect, useState } from 'react'
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import LoadingScreen from '../LoadingScreen'
import PropertyCard from '@/components/PropertyCard'
import Link from 'next/link'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog'

type Property = {
    id: string
    location: string
    propertyType: string
    availability: string
    title: string
    priceOrRent: string
    images: Array<{ image: { url: string } }>
}

export default function SearchProperties() {
    const [PropertiesData, setPropertiesData] = useState<Property[]>([])
    const [loadingProerties, setLoadingProerties] = useState(true)
    const [selectedLocation, setSelectedLocation] = useState<string | null>(null)
    const [selectedType, setSelectedType] = useState<string | null>(null)
    const [selectedAvailability, setSelectedAvailability] = useState<string | null>(null)
    const [readyToSearch, setReadyToSearch] = useState(false)

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await fetch('/api/getProperties')
                if (!response.ok) {
                    throw new Error('Failed to fetch properties')
                }
                const data: Property[] = await response.json()
                setPropertiesData(data)
            } catch (error) {
                console.error('Error fetching properties:', error)
            } finally {
                setLoadingProerties(false)
            }
        }

        fetchProperties()
    }, [])

    useEffect(() => {
        if (selectedLocation && selectedType && selectedAvailability) {
            setReadyToSearch(true)
        } else {
            setReadyToSearch(false)
        }
    }, [selectedLocation, selectedType, selectedAvailability])

    if (loadingProerties) {
        return <LoadingScreen />
    }

    const filteredProperties = PropertiesData.filter((property) => {
        return (
            (selectedLocation ? property.location === selectedLocation : true) &&
            (selectedType ? property.propertyType === selectedType : true) &&
            (selectedAvailability ? property.availability === selectedAvailability : true)
        )
    })

    return (
        <div className="bg-accent dark:bg-card border rounded-xl p-3 flex flex-col md:flex-row gap-3 mb-8">
            <Select onValueChange={(value) => setSelectedLocation(value)}>
                <SelectTrigger className="flex-1 flex h-max border-none hover:bg-accent shadow-none">
                    <div className="flex-1 flex items-center gap-3 px-4 py-2">
                        <MapPin className="w-5 h-5 text-[#666]" />
                        <div className="flex flex-col items-start justify-start">
                            <div className="text-sm font-medium mb-0.5 text-start">Location</div>
                            <SelectValue
                                className="w-full text-sm text-muted-foreground text-start"
                                placeholder="Select Location"
                            />
                        </div>
                    </div>
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {[...new Set(PropertiesData.map((property) => property.location))].map(
                            (location, index) => (
                                <SelectItem key={index} value={location}>
                                    {location}
                                </SelectItem>
                            ),
                        )}
                    </SelectGroup>
                </SelectContent>
            </Select>

            <div className="w-px bg-zinc-300 dark:bg-zinc-900 hidden md:block" />

            <Select onValueChange={(value) => setSelectedType(value)}>
                <SelectTrigger className="flex-1 flex h-max border-none hover:bg-accent shadow-none">
                    <div className="flex-1 flex items-center gap-3 px-4 py-2">
                        <Building2 className="w-5 h-5 text-[#666]" />
                        <div className="flex flex-col items-start justify-start">
                            <div className="text-sm font-medium mb-0.5 text-start">Type</div>
                            <SelectValue
                                className="w-full text-sm text-muted-foreground text-start"
                                placeholder="Select Type"
                            />
                        </div>
                    </div>
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {[...new Set(PropertiesData.map((property) => property.propertyType))].map(
                            (type, index) => (
                                <SelectItem key={index} value={type}>
                                    {type}
                                </SelectItem>
                            ),
                        )}
                    </SelectGroup>
                </SelectContent>
            </Select>

            <div className="w-px bg-zinc-300 dark:bg-zinc-900 hidden md:block" />

            <Select onValueChange={(value) => setSelectedAvailability(value)}>
                <SelectTrigger className="flex-1 flex h-max border-none hover:bg-accent shadow-none">
                    <div className="flex-1 flex items-center gap-3 px-4 py-2">
                        <Wallet className="w-5 h-5 text-[#666]" />
                        <div className="flex flex-col items-start justify-start">
                            <div className="text-sm font-medium mb-0.5 text-start">Availability</div>
                            <SelectValue
                                className="w-full text-sm text-muted-foreground text-start"
                                placeholder="Select Availability"
                            />
                        </div>
                    </div>
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {[...new Set(PropertiesData.map((property) => property.availability))].map(
                            (availability, index) => (
                                <SelectItem key={index} value={availability}>
                                    For {availability}
                                </SelectItem>
                            ),
                        )}
                    </SelectGroup>
                </SelectContent>
            </Select>

            {readyToSearch ? (
                <Drawer>
                    <DrawerTrigger asChild>
                        <Button className="bg-green-600 hover:bg-green-700 my-auto text-white font-semibold">
                            Search Property →
                        </Button>
                    </DrawerTrigger>
                    <DrawerContent>
                        <div className="h-[90vh] w-full overflow-y-auto px-4 sm:px-6 max-w-7xl mx-auto py-8">
                            {filteredProperties.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {filteredProperties.map((property) => {
                                        const imageUrl = property.images?.[0]?.image?.url
                                        return (
                                            <PropertyCard
                                                key={property.id}
                                                image={imageUrl}
                                                title={property.title}
                                                price={property.priceOrRent}
                                                location={property.location}
                                                availability={property.availability}
                                                propertyType={property.propertyType}
                                            />
                                        )
                                    })}
                                </div>
                            ) : (
                                <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-[5rem]">
                                    <div className="flex shrink-0 items-center justify-center rounded-md border bg-card border-dashed h-[30vh] md:h-[50vh]">
                                        <div className="mx-auto flex w-full flex-col items-center justify-center text-center">
                                            <Info className="size-8" />
                                            <h3 className="mt-4 text-lg font-semibold">No Properties Found</h3>
                                            <p className="mb-4 mt-2 text-sm text-muted-foreground max-w-lg">
                                                No properties match your criteria.
                                            </p>
                                            <Link href="/properties">
                                                <Button className="font-semibold">View all Properties</Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </DrawerContent>
                </Drawer>
            ) : (
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button className="bg-green-600 hover:bg-green-700 my-auto text-white font-semibold">
                            Search Property →
                        </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Please Complete Your Search Criteria</AlertDialogTitle>
                            <AlertDialogDescription>
                                To begin your property search, make sure to select a location, type, and
                                availability.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogAction>OK</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            )}
        </div>
    )
}