import config from "@public/config/menu.json";

export type Link = {
    id: number;
    name: string;
    menu: Menu[];
};

export type Menu = {
    title: string;
    links: MenuLink[];
};

export type MenuLink = {
    name: string;
    href: string;
};



export const links: Link[] = config;

