import { slugify } from '@/utils/slugify'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface PostCardProps {
    title: string
    imageUrl: string
    date: string
    description?: string
}

const PostCard: React.FC<PostCardProps> = ({ title, imageUrl, date, description }) => {
    return (
        <Link href={`/blog/${slugify(title)}`}>
            <div className="relative flex flex-col h-[27rem] rounded-3xl bg-background p-2 transition duration-300 hover:shadow-xl border">
                <div className="aspect-video w-full rounded-2xl overflow-hidden bg-accent">
                    <Image
                        alt={title}
                        src={imageUrl}
                        width={800}
                        height={400}
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="flex flex-1 flex-col p-8">
                    <div className="text-sm/5 text-muted-foreground">{date.slice(0, 10)}</div>
                    <div className="mt-2 text-base/7 font-medium">
                        <p className="line-clamp-2">{title}</p>
                    </div>
                    <div className="mt-2 flex-1 text-sm/6 text-muted-foreground line-clamp-2">
                        {description}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default PostCard