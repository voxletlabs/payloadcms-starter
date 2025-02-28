import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { FooterTypes } from '@/types/Footer';

interface FooterProps {
    footer: FooterTypes;
}

const Footer: React.FC<FooterProps> = ({ footer }) => {
    return (
        <div className="border-t px-8 py-20 bg-background w-full relative overflow-hidden">
            <div className="max-w-7xl mx-auto text-sm text-neutral-500 flex sm:flex-row flex-col justify-between items-start md:px-4">
                <div>
                    <div className="mr-0 md:mr-4 md:flex mb-4">
                        {footer.logo.logoType === "text" && (
                            <Link
                                className="font-normal flex space-x-2 items-center text-sm mr-4 text-black px-2 py-1 relative z-20"
                                href="/"
                            >
                                <span className="font-bold text-xl text-black dark:text-white">{footer.logo.logoText}</span>
                            </Link>
                        )}
                        {footer.logo.logoType === "image" && footer.logo.logoImage && (
                            <Link
                                className="font-normal flex space-x-2 items-center text-sm mr-4 text-black px-2 py-1 relative z-20"
                                href="/"
                            >
                                <Image
                                    src={footer.logo.logoImage.image.url}
                                    alt="logo"
                                    height={footer.logo.logoImage.height}
                                    width={footer.logo.logoImage.width}
                                />
                            </Link>
                        )}
                        {footer.logo.logoType === "both" && footer.logo.logoImage && (
                            <Link
                                className="font-normal flex space-x-2 items-center text-sm mr-4 text-black px-2 py-1 relative z-20"
                                href="/"
                            >
                                <Image
                                    src={footer.logo.logoImage.image.url}
                                    alt="logo"
                                    height={footer.logo.logoImage.height}
                                    width={footer.logo.logoImage.width}
                                />
                                <span className="font-bold text-xl text-black dark:text-white">{footer.logo.logoText}</span>
                            </Link>
                        )}
                    </div>
                    <div className="mt-2 ml-2">{footer.copywriteText}</div>
                </div>
                <div
                    className={`grid ${footer.footerLinks.linksGroups.length === 1 && "grid-cols-1"} ${footer.footerLinks.linksGroups.length === 2 && "grid-cols-2"
                        } ${footer.footerLinks.linksGroups.length === 3 && "grid-cols-2 lg:grid-cols-3"} ${footer.footerLinks.linksGroups.length >= 4 && "grid-cols-2 lg:grid-cols-4"
                        } gap-10 items-start mt-10 sm:mt-0 md:mt-0`}
                >
                    {footer.footerLinks.linksGroups.map((group) => (
                        <div key={group.id} className="flex justify-center space-y-4 flex-col w-full">
                            <p className="text-black dark:text-white font-bold">{group.groupName}</p>
                            <ul className="text-muted-foreground list-none space-y-4">
                                {group.links.map((link) => (
                                    <li className="list-none" key={link.id}>
                                        <Link
                                            className="transition duration-200 hover:text-primary"
                                            href={link.href}
                                            target={link.openInNewTab ? "_blank" : "_self"}
                                            rel={link.openInNewTab ? "noopener noreferrer" : undefined}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Footer;
