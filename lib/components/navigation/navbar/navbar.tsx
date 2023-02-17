"use client"

import { ReactElement } from "react";
import Link from "next/link";
import { clsx } from "clsx";
import { type Menu, links } from "./navbar.util";
import { InstagramIcon, FacebookIcon, LinkedinIcon } from "@lib/components/icons";

export const Navbar = (): ReactElement => {
    return (
        <nav className="container relative z-50">
            <ul className="flex gap-32 justify-center">
                {links.map((link) => (
                    <li key={link.id} className="group">
                        <span className="flex py-3 font-medium uppercase tracking-wide cursor-pointer">{link.name}</span>
                        <div className={clsx(
                            "pointer-events-none opacity-0 transition-opacity duration-150",
                            "group-hover:block group-hover:opacity-100 group-hover:pointer-events-auto"
                        )}>
                            <Dropdown menus={link.menus} />
                        </div>
                    </li>
                ))}
                <li className="flex items-center gap-2">
                    <Link href="https://www.instagram.com/ville_ecublens/" target="_blank">
                        <InstagramIcon className="fill-black h-6 w-6" />
                    </Link>
                    <Link href="https://fr.linkedin.com/company/ville-d-ecublens-vd" target="_blank">
                        <LinkedinIcon className="fill-black h-6 w-6" />
                    </Link>
                    <Link href="https://www.facebook.com/villeecublens" target="_blank">
                        <FacebookIcon className="fill-black h-6 w-6" />
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

const Dropdown = ({ menus }: { menus: Menu[] }): ReactElement => {
    return (
        <div className="absolute z-50 pt-3 left-0 right-0 mx-32">
            <div className=" bg-white top-10 grid grid-cols-5 gap-8 p-10 rounded-md shadow-md">
                {menus.map((menu, i) => (
                    <div key={i}>
                        <h2 className="font-semibold tracking-wide uppercase">{'>'} {menu.title}</h2>
                        <ul>
                            {menu.links.map((link, i) => (
                                <li key={i}>
                                    <Link href={link.href} className="text-neutral-700 text-sm break-words hover:underline">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}