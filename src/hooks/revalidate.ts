import { revalidatePath, revalidateTag } from 'next/cache'
import type { PayloadRequest } from 'payload'

type RevalidateOptions = {
    paths: string | string[]
    tag?: string
}

type HookParams = {
    doc: Record<string, unknown>
    req: PayloadRequest & {
        context?: {
            disableRevalidate?: boolean
        }
    }
}

export const revalidate = ({ paths, tag }: RevalidateOptions) => {
    const allPaths = Array.isArray(paths) ? paths : [paths]

    allPaths.forEach((path) => {
        console.log(`Revalidating path: ${path}`)
        revalidatePath(path)
    })

    if (tag) {
        console.log(`Revalidating tag: ${tag}`)
        revalidateTag(tag)
    }
}

export const createRevalidateHook = (
    paths: string[] | ((doc: Record<string, unknown>) => string[]),
    tag?: string,
) => ({
    afterChange: [
        ({ doc, req }: HookParams) => {
            if (!req.context?.disableRevalidate) {
                const resolvedPaths = typeof paths === 'function' ? paths(doc) : paths
                revalidate({ paths: resolvedPaths, tag })
            }
            return doc
        },
    ],
    afterDelete: [
        ({ doc, req }: HookParams) => {
            if (!req.context?.disableRevalidate) {
                const resolvedPaths = typeof paths === 'function' ? paths(doc) : paths
                revalidate({ paths: resolvedPaths, tag })
            }
        },
    ],
})