import PostCard from '@/components/PostCard'
import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Blog - Payload CMS Starter',
}

const BlogPage = () => {
    return (
        <div className="px-4 sm:px-6 mx-auto max-w-7xl mt-[7rem]">
            <div className="">
                <div className="">
                    <h2 className="mt-16 font-mono text-xs/5 font-semibold uppercase tracking-widest text-muted-forground">
                        Blog
                    </h2>
                    <h1 className="mt-2 text-pretty text-4xl font-medium tracking-tighter sm:text-6xl">
                        What&apos;s happening in the World?.
                    </h1>
                    <p className="mt-6 max-w-3xl text-2xl font-medium text-muted-foreground">
                        Stay informed with product updates, company news, and insights on how to sell smarter at
                        your company.
                    </p>
                </div>
            </div>
            <div className="mt-16 pb-14">
                <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {Posts.map((post) => (
                        <PostCard
                            key={post.title}
                            title={post.title}
                            imageUrl={post.imageUrl}
                            date={post.date}
                            description={post.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

const Posts = [
    {
        title: 'Top 5 Cities for Real Estate Investment in 2024',
        imageUrl: '/images/real-estate-investment.jpg',
        date: 'December 17, 2024',
        description:
            'Explore the top-performing cities for real estate investments and why they stand out.',
    },
    {
        title: '10 Tips for First-Time Homebuyers',
        imageUrl: '/images/homebuyers.jpg',
        date: 'December 10, 2024',
        description:
            'Navigate the complex world of homebuying with these essential tips for first-timers.',
    },
    {
        title: 'The Rise of Sustainable Real Estate',
        imageUrl: '/images/sustainable-real-estate.jpg',
        date: 'November 25, 2024',
        description: 'Discover how eco-friendly properties are shaping the future of real estate.',
    },
    {
        title: 'Understanding Real Estate Market Trends',
        imageUrl: '/images/market-trends.jpg',
        date: 'November 15, 2024',
        description: 'Learn how to analyze real estate trends to make informed investment decisions.',
    },
    {
        title: 'The Ultimate Guide to Luxury Properties',
        imageUrl: '/images/luxury-properties.jpg',
        date: 'October 28, 2024',
        description:
            'Step into the world of luxury real estate and uncover what makes these properties unique.',
    },
    {
        title: 'How to Boost the Value of Your Property',
        imageUrl: '/images/property-value.jpg',
        date: 'October 10, 2024',
        description: 'Practical tips and tricks to enhance your property’s value before selling.',
    },
]

export default BlogPage