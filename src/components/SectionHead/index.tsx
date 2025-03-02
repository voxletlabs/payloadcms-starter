import React from 'react'
import { cn } from '@/lib/utils'

interface SectionHeadProps {
    title: string
    supportLine: string
    className?: string
}

const SectionHead: React.FC<SectionHeadProps> = ({ title, supportLine, className }) => {
    return (
        <div className={cn('px-8', className)}>
            <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
                {title}
            </h4>
            <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
                {supportLine}
            </p>
        </div>
    )
}

export default SectionHead