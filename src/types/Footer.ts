export interface FooterTypes {
    id: number;
    globalType: string;
    logo: {
        logoType: "text" | "image" | "both";
        logoText?: string;
        logoImage?: {
            image: { url: string };
            height: number;
            width: number;
        };
    };
    copywriteText: string;
    footerLinks: {
        linksGroups: {
            id: string;
            groupName: string;
            links: {
                id: string;
                label: string;
                href: string;
                openInNewTab: boolean;
            }[];
        }[];
    };
    updatedAt: string;
    createdAt: string;
}