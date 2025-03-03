import MyFormComponent from "@/components/MyFormComponent";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { getPayload } from 'payload'
import { Payload } from 'payload'
import config from '@payload-config'

const ContactPage: React.FC = async () => {
    const payload: Payload = await getPayload({ config })

    const contact: any = await payload.findGlobal({
        slug: 'contact',
    })

    return (
        <main>
            <div className="relative overflow-hidden">
                <div className="absolute top-0 left-0 w-screen h-screen z-40 pointer-events-none">
                    <div
                        className="absolute top-0 left-0"
                        style={{
                            transform: "translateY(-350px) rotate(-45deg)",
                            width: "560px",
                            height: "1380px",
                            background:
                                "radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(217, 217, 217, 0.08) 0px, rgba(140, 140, 140, 0.02) 50%, rgba(115, 115, 115, 0) 80%)",
                        }}
                    ></div>
                </div>

                <div className="max-w-7xl mx-auto py-40 grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
                    <div>
                        <h2 className="max-w-5xl mx-auto tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b bg-black dark:from-neutral-800 dark:via-white dark:to-white text-3xl md:text-5xl md:leading-tight text-left">
                            {contact.title}
                        </h2>
                        <h2 className="text-sm md:text-base max-w-4xl my-4 mx-auto font-normal text-left text-muted-foreground">
                            {contact.description}
                        </h2>
                        {contact.emails?.length > 0 && (
                            <div className="text-sm mt-10">
                                <p className="text-sm">Email</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-1">
                                    {contact.emails.map((email: any) => (
                                        <a key={email.id} href={`mailto:${email.email}`} className="w-max">
                                            <p
                                                className="text-sm hover:text-primary transition duration-200 text-muted-foreground"
                                            >
                                                {email.email}
                                            </p>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                        {contact.phoneNumbers?.length > 0 && (
                            <div className="text-sm mt-10">
                                <p className="text-sm">Phone</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-1">
                                    {contact.phoneNumbers.map((phoneNumber: any) => (
                                        <a
                                            key={phoneNumber.id}
                                            href={`tel:${phoneNumber.phoneNumber}`}
                                            className="w-max"
                                        >
                                            <p
                                                className="text-sm hover:text-primary transition duration-200 text-muted-foreground"
                                            >
                                                {phoneNumber.phoneNumber}
                                            </p>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                        {contact.social?.length > 0 && (
                            <div className="text-sm mt-6">
                                <p className="text-sm">Social</p>
                                <div className="gap-2 grid grid-cols-1 md:grid-cols-2 mt-2">
                                    {contact.social.map((social: any) => (
                                        <Link
                                            key={social.id}
                                            href={social.link}
                                            target={social.openInNewTab ? "_blank" : "_self"}
                                            className="w-full"
                                        >
                                            <Button
                                                className="w-full relative"
                                                size={'lg'}
                                                variant={'outline'}
                                            >
                                                {social.label}
                                            </Button>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <MyFormComponent formId="1" />
                </div>
            </div>
        </main>
    );
};

export default ContactPage;
