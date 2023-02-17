import { ReactElement, SVGProps } from "react";

export const CertificateIcon = ({ className }: SVGProps<SVGSVGElement>): ReactElement => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={className}>
            <path d="M28.962 21.744h-3.941a1 1 0 0 1-.867-1.499 5.523 5.523 0 0 0-1.265-7.015c-1.292-1.07-2.931-1.487-4.614-1.168-2.211.416-3.963 2.195-4.36 4.426a5.506 5.506 0 0 0 .65 3.757 1 1 0 0 1-.867 1.5H3.038A2.04 2.04 0 0 1 1 19.706V3.038A2.04 2.04 0 0 1 3.038 1h25.924A2.04 2.04 0 0 1 31 3.038v16.669a2.04 2.04 0 0 1-2.038 2.037zm-2.417-2h2.417L29 3.038 28.962 3H3.038L3 19.707l9.168.032a7.514 7.514 0 0 1-.222-3.6c.541-3.046 2.936-5.474 5.959-6.042 2.246-.424 4.528.158 6.26 1.594a7.516 7.516 0 0 1 2.38 8.053z" />
            <path d="M19.36 25.026c-4.155 0-7.534-3.38-7.534-7.534s3.38-7.533 7.533-7.533c4.154 0 7.534 3.379 7.534 7.533s-3.38 7.534-7.534 7.534zm0-13.067a5.54 5.54 0 0 0-5.534 5.533 5.54 5.54 0 0 0 5.533 5.534 5.54 5.54 0 0 0 5.534-5.534 5.54 5.54 0 0 0-5.534-5.533z" />
            <circle cx="19.359" cy="17.493" r="3" />
            <path d="M25.724 31a.999.999 0 0 1-.707-.293l-5.993-5.993a1 1 0 0 1 .65-1.705 5.51 5.51 0 0 0 4.48-2.764 1 1 0 0 1 1.574-.208l4.979 4.98A1 1 0 0 1 30 26.724h-3.276V30a1 1 0 0 1-1 1zm-3.96-6.374 2.96 2.96v-1.862a1 1 0 0 1 1-1h1.862l-2.429-2.43a7.486 7.486 0 0 1-3.393 2.332z" />
            <path d="M12.995 31a1 1 0 0 1-1-1v-3.276H8.718a1.001 1.001 0 0 1-.707-1.707l4.98-4.98a1 1 0 0 1 1.574.208 5.512 5.512 0 0 0 4.478 2.764.998.998 0 0 1 .651 1.705l-5.992 5.993a.999.999 0 0 1-.707.293zm-1.862-6.276h1.862a1 1 0 0 1 1 1v1.862l2.96-2.96a7.489 7.489 0 0 1-3.394-2.331l-2.428 2.429zM16 6.734H5.733a1 1 0 1 1 0-2H16a1 1 0 1 1 0 2zm-4.025 3.718H5.733a1 1 0 1 1 0-2h6.242a1 1 0 1 1 0 2z" />
        </svg>
    );
}