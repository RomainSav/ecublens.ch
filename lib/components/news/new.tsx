import { ReactElement } from "react";
import Link from "next/link";
import { New as NewType } from "./new.util";

export const New = ({ newData }: { newData: NewType }): ReactElement => {
    return (
        <div className="border-b border-gray-200 py-5 first:pt-0 last:pb-0 last:border-transparent">
            <Link href="/" className="flex items-center">
                <img src={newData.thumbnail} alt="" className="w-44 aspect-video object-cover rounded-md pointer-events-none" />

                <div className="ml-3">
                    <h3 className="font-medium text-ellipsis">{newData.title}</h3>
                    <p className="text-gray-500 text-sm line-clamp-2">{newData.description}</p>
                </div>
            </Link>
        </div>
    );
}