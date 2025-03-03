"use client";

import React, { useEffect, useState } from "react";
import { ThemeToggler } from "@/components/theme/themeToggler";
import { Button } from "../ui/button";
import Link from "next/link";
import { X } from "lucide-react";
import Image from "next/image";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { HeaderTypes } from "@/types/Header";

interface HeaderProps {
    header: HeaderTypes
}

const Header: React.FC<HeaderProps> = ({ header }) => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const ToggleNav = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className="max-w-7xl fixed top-4 mx-auto inset-x-0 z-50 w-[95%] lg:w-full"
            style={{ transform: "none" }}
        >
            <div className="hidden lg:block w-full">
                <div
                    className={`flex relative justify-between px-4 py-2 rounded-full dark:border-none mx-auto ${scrolled
                        ? "w-[80%]  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-[0px_0px_9.39138px_rgba(0,0,0,0.1)]"
                        : "w-full bg-transparent shadow-none"
                        } transition-all duration-500 ease-in-out`}
                >
                    <div className="flex flex-row gap-2 items-center">
                        {header.logo.logoType === "text" && (
                            <Link
                                className="font-normal flex space-x-2 items-center text-sm mr-4 text-black px-2 py-1 relative z-20 dark:text-white"
                                href="/"
                            >
                                <span className="text-lg font-bold">{header.logo.logoText}</span>
                            </Link>
                        )}
                        {header.logo.logoType === "image" && header.logo.logoImage?.image?.url && (
                            <Link
                                className="px-2 py-1 relative z-20"
                                href="/"
                            >
                                <Image
                                    src={header.logo.logoImage.image.url}
                                    alt="logo"
                                    height={header.logo.logoImage.height}
                                    width={header.logo.logoImage.width}
                                />
                            </Link>
                        )}
                        {header.logo.logoType === "both" && header.logo.logoImage?.image?.url && (
                            <Link
                                className="px-2 py-1 relative z-20 flex items-center jusitfy-start gap-2"
                                href="/"
                            >
                                <Image
                                    src={header.logo.logoImage.image.url}
                                    alt="logo"
                                    height={header.logo.logoImage.height}
                                    width={header.logo.logoImage.width}
                                />
                                <span className="text-lg font-bold">{header.logo.logoText}</span>
                            </Link>
                        )}
                        {header.navLinks.length > 0 && (
                            <div className="flex items-center gap-1.5">
                                {header.navLinks.map((link: { id: string; label: string; href: string; openInNewTab: boolean }) => (
                                    <Link key={link.id} href={link.href} target={link.openInNewTab ? "_blank" : "_self"}>
                                        <Button variant="ghost">
                                            {link.label}
                                        </Button>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="flex space-x-2 items-center">
                        <ThemeToggler className="rounded-full" />
                        {(header.ctaButton.label && header.ctaButton.href) && (
                            <Link
                                href={header.ctaButton.href}
                                target={header.ctaButton.openInNewTab ? "_blank" : "_self"}
                            >
                                <Button
                                    className="rounded-xl"
                                >
                                    {header.ctaButton.label}
                                </Button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex h-full w-full items-center lg:hidden ">
                <div className={`flex justify-between bg-transparent items-center w-full rounded-lg px-2.5 py-1.5 transition duration-200 
        ${scrolled ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90 shadow-md dark:shadow-[0px_0px_9.39138px_rgba(0,0,0,0.1)]" : ""}`}>
                    {header.logo.logoType === "text" && (
                        <Link
                            className="font-normal flex space-x-2 items-center text-sm mr-4 text-black px-2 py-1 relative z-20 dark:text-white"
                            href="/"
                        >
                            <span className="text-lg font-bold">{header.logo.logoText}</span>
                        </Link>
                    )}
                    {header.logo.logoType === "image" && header.logo.logoImage?.image?.url && (
                        <Link
                            className="px-2 py-1 relative z-20"
                            href="/"
                        >
                            <Image
                                src={header.logo.logoImage.image.url}
                                alt="logo"
                                height={header.logo.logoImage.height}
                                width={header.logo.logoImage.width}
                            />
                        </Link>
                    )}
                    {header.logo.logoType === "both" && header.logo.logoImage?.image?.url && (
                        <Link
                            className="px-2 py-1 relative z-20 flex items-center jusitfy-start gap-2"
                            href="/"
                        >
                            <Image
                                src={header.logo.logoImage.image.url}
                                alt="logo"
                                height={header.logo.logoImage.height}
                                width={header.logo.logoImage.width}
                            />
                            <span className="text-lg font-bold">{header.logo.logoText}</span>
                        </Link>
                    )}
                    <div className="flex items-center justify-end space-x-2">
                        <ThemeToggler className="rounded-full" />
                        <div onClick={ToggleNav}>
                            <HamburgerMenuIcon className="size-5" />
                        </div>
                    </div>
                </div>
                <div
                    className={`fixed inset-0  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 flex flex-col items-start justify-start space-y-10 pt-5 text-xl transition duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                >
                    <div className="flex items-center justify-between w-full px-5">
                        {header.logo.logoType === "text" && (
                            <Link
                                onClick={ToggleNav}
                                className="font-normal flex space-x-2 items-center text-sm mr-4 text-black px-2 py-1 relative z-20 dark:text-white"
                                href="/"
                            >
                                <span className="text-lg font-bold">{header.logo.logoText}</span>
                            </Link>
                        )}
                        {header.logo.logoType === "image" && header.logo.logoImage?.image?.url && (
                            <Link
                                onClick={ToggleNav}
                                className="px-2 py-1 relative z-20"
                                href="/"
                            >
                                <Image
                                    src={header.logo.logoImage.image.url}
                                    alt="logo"
                                    height={header.logo.logoImage.height}
                                    width={header.logo.logoImage.width}
                                />
                            </Link>
                        )}
                        {header.logo.logoType === "both" && header.logo.logoImage?.image?.url && (
                            <Link
                                onClick={ToggleNav}
                                className="px-2 py-1 relative z-20 flex items-center jusitfy-start gap-2"
                                href="/"
                            >
                                <Image
                                    src={header.logo.logoImage.image.url}
                                    alt="logo"
                                    height={header.logo.logoImage.height}
                                    width={header.logo.logoImage.width}
                                />
                                <span className="text-lg font-bold">{header.logo.logoText}</span>
                            </Link>
                        )}
                        <div className="flex items-center space-x-2" onClick={ToggleNav}>
                            <X className="size-5" />
                        </div>
                    </div>
                    {header.navLinks.length > 0 && (
                        <div
                            className="flex flex-col items-start justify-start gap-2 px-4 w-full"
                        >
                            {header.navLinks.map((link: { id: string; label: string; href: string; openInNewTab: boolean }) => (
                                <Link
                                    key={link.id}
                                    href={link.href}
                                    target={link.openInNewTab ? "_blank" : "_self"}
                                    onClick={ToggleNav}
                                >
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-start text-lg"
                                    >
                                        {link.label}
                                    </Button>
                                </Link>
                            ))}
                        </div>
                    )}

                    <div
                        className="flex flex-row w-full items-start gap-2.5 px-8 py-4 border-t"
                    >
                        {(header.ctaButton.label && header.ctaButton.href) && (
                            <Link
                                href={header.ctaButton.href}
                                target={header.ctaButton.openInNewTab ? "_blank" : "_self"}
                                onClick={ToggleNav}
                            >
                                <Button
                                    className="rounded-xl"
                                >
                                    {header.ctaButton.label}
                                </Button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav >
    );
};

export default Header;