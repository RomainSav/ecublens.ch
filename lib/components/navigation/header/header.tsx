import { ReactElement } from "react";
import Link from "next/link";
import { LogoIcon } from "@lib/components/icons";
import { SearchBar } from "@lib/components/navigation/search-bar";
import { Navbar } from "@lib/components/navigation/navbar";

export const Header = (): ReactElement => {
    return (
        <header className="shadow-md relative z-20">
            <div className="border-b">
                <div className="container py-2 grid grid-cols-[2fr_1fr] justify-between items-center">
                    <div>
                        <Link href="/" className="flex w-min">
                            <LogoIcon className="h-24 w-52" />
                        </Link>
                    </div>
                    <SearchBar />
                </div>
            </div>

            <Navbar />
        </header>
    );
}