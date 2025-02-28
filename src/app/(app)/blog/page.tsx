import PostCard from '@/components/PostCard'
import React from 'react'
import type { Metadata } from 'next'
import { getPayload, Payload } from 'payload'
import config from '@payload-config'

export const metadata: Metadata = {
    title: 'Blog - Payload CMS Starter',
}

const BlogPage = async () => {
    const payload: Payload = await getPayload({ config })

    const postsData = await payload.find({
        collection: 'posts',
    })

    const posts = postsData.docs

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
                    {posts.map((post: any) => (
                        <PostCard
                            key={post.title}
                            title={post.title}
                            imageUrl={post.coverImage.url}
                            date={post.publishedAt}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BlogPage