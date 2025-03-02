import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import SectionHead from '@/components/SectionHead'
import { getPayload } from 'payload'
import config from '@payload-config'

const FaqSection = async () => {
    const payload = await getPayload({ config })

    const FaqData = await payload.find({
        collection: 'faqs',
    })

    return (
        <>
            <div id="faqs" className="pt-[7rem] pb-40 px-4 sm:px-6 max-w-7xl mx-auto">
                <SectionHead
                    title="Frequently Asked Questions"
                    supportLine="Find answers to the most common questions"
                    className="py-8"
                />
                <div className="max-w-4xl mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                        {[...FaqData.docs].reverse().map((faq) => (
                            <AccordionItem value={faq.question} key={faq.question}>
                                <AccordionTrigger>{faq.question}</AccordionTrigger>
                                <AccordionContent>{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </>
    )
}

export default FaqSection