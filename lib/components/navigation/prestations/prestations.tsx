import Link from "next/link";
import { ReactElement } from "react";
import { prestations } from "./prestations.util";

export const Prestations = (): ReactElement => {
    return (
        <div className="max-w-7xl mx-auto mt-10 z-10 shadow-md rounded-md grid grid-cols-5 gap-x-8 gap-y-6 bg-white left-0 right-0 p-6">
            {prestations.map((prestation) => (
                <Link href="/" key={prestation.id} className="group flex flex-col gap-2 items-center">
                    <prestation.icon className="h-12 w-12 group-hover:fill-blue-500 transition-all duration-150" />
                    <p className="break-words group-hover:text-blue-500 transition-all duration-150">
                        {prestation.name}
                    </p>
                </Link>
            ))}
        </div>
    );
}