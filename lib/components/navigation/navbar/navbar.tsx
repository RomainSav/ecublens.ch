"use client"

import { ReactElement } from "react";
import Link from "next/link";
import { type Menu, links } from "./navbar.util";

export const Navbar = (): ReactElement => {
    return (
        <nav className="container relative">
            <ul className="flex gap-32 justify-center">
                {links.map((link, i) => (
                    <li key={link.id} className="group">
                        <span className="flex py-3 uppercase tracking-wide cursor-pointer">{link.name}</span>
                        <div className="hidden group-hover:block">
                            <Dropdown menus={link.menu} />
                        </div>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

const Dropdown = ({ menus }: { menus: Menu[] }): ReactElement => {
    return (
        <div className="absolute pt-3 left-0 right-0 mx-32">
            <div className=" bg-white top-10 grid grid-cols-5 gap-8 p-10 rounded-md shadow-md">
                {menus.map((menu, i) => (
                    <div key={i}>
                        <h2 className="font-semibold tracking-wide uppercase">{'>'} {menu.title}</h2>
                        <ul>
                            {menu.links.map((link, i) => (
                                <li>
                                    <Link key={i} href={link.href} className="text-neutral-700 text-sm hover:underline">
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