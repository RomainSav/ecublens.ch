import { ReactElement } from "react";

export const Agenda = (): ReactElement => {
    return (
        <div>
            <div className="relative w-fit h-full">
                <div className="absolute -left-3 -top-3 bg-blue-500 py-1 px-4 rounded-md">
                    <h2 className="text-gray-200 text-xl font-medium">Agenda</h2>
                </div>

                <div className="bg-white rounded-md shadow-md border px-5 pt-10 pb-5 h-full">
                   
                </div>
            </div>
        </div>
    );
}