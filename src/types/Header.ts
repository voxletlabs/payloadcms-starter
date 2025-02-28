
interface Logo {
    logoType: "text" | "image" | "both";
    logoText?: string;
    logoImage?: {
        image?: {
            url: string;
        };
        height?: number;
        width?: number;
    };
}

interface NavLink {
    id: string;
    label: string;
    href: string;
    openInNewTab: boolean;
}

interface CTAButton {
    label?: string;
    href?: string;
    openInNewTab?: boolean;
}

export interface HeaderTypes {
    logo: Logo;
    navLinks: NavLink[];
    ctaButton: CTAButton;
}
