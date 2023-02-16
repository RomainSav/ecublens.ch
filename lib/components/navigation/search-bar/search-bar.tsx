import { ReactElement } from "react";
import { clsx } from "clsx";

export const SearchBar = (): ReactElement => {
    return (
        <form className="ml-auto w-full">
            <label htmlFor="search" />
            <input id="search" type="text" placeholder="Rechercher" className={clsx(
                "border py-2 px-4 w-full text-base rounded-md outline-none",
                "focus:ring-2 focus:ring-blue-500"
            )} />
        </form>
    );
}