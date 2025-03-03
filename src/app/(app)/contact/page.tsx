import MyFormComponent from "@/components/MyFormComponent";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const ContactPage: React.FC = () => {
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
                            Contact us
                        </h2>
                        <h2 className="text-sm md:text-base max-w-4xl my-4 mx-auto font-normal text-left text-muted-foreground">
                            We are always looking for ways to improve our products and services. Contact us and let us know how we can help you.
                        </h2>
                        <div className="text-sm mt-10">
                            <p className="text-sm">Email</p>
                            <p className="text-sm text-muted-foreground">hello@gmail.com</p>
                        </div>
                        <div className="text-sm mt-6">
                            <p className="text-sm">Social</p>
                            <div className="flex gap-2 items-center justify-start mt-2">
                                {/* {ContactData.social.map((item, idx) => (
                                    <Link href={item.link} target="_blank" key={idx}>
                                        <Button size={'icon'} variant={"outline"}>
                                            <item.icon className="size-4" />
                                        </Button>
                                    </Link>
                                ))} */}
                            </div>
                        </div>
                        <div className="text-sm mt-6">
                            <p className="text-sm">Have a Chat</p>
                            <div className="flex flex-coll sm:flex-row gap-2 items-center justify-start mt-2">
                                <Link href={`https://wa.me/`} target="_blank" className="w-full">
                                    <Button className="w-full relative" size={'lg'} variant={'outline'}>
                                        Whatsapp
                                    </Button>
                                </Link>
                                <Button className="w-full relative" size={'lg'} variant={'outline'}>
                                    Book a Call
                                </Button>
                            </div>
                        </div>
                    </div>

                    <MyFormComponent formId="1" />
                </div>
            </div>
        </main>
    );
};

export default ContactPage;
