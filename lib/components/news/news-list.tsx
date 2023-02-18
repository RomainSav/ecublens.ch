import Link from "next/link";
import { ReactElement } from "react";
import { New } from "./new";
import { news } from "./new.util";

export const NewsList = (): ReactElement => {
    return (
        <div className="relative w-fit">
            <div className="absolute -left-3 -top-3 bg-blue-500 py-1 px-4 rounded-md">
                <h2 className="text-gray-200 text-xl font-medium">Actualités</h2>
            </div>

            <div className="bg-white rounded-md shadow-md border px-5 pt-10 pb-5">
                <div>
                    {news.map((data, i) => (
                        <New key={i} newData={data} />
                    ))}
                </div>

                <div className="flex mt-8">
                    <Link href="/" className="ml-auto text-blue-500 hover:underline">{'>'} Tout afficher</Link>
                </div>
            </div>

        </div>
    );
}