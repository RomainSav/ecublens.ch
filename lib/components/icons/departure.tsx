import { ReactElement, SVGProps } from "react";

export const DepartureIcon = ({ className }: SVGProps<SVGSVGElement>): ReactElement => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={className}>
            <path d="M29.9,13c-0.3,0.7-1.2,1-1.2,1.1L7.4,21.8l-5.4-5L3.8,15l3.7,2l5.3-1.8l-7.1-3.8l0.2-0.2c0.3-0.2,1.4-1,1.8-1   c0.3,0,12.2,1.6,13.7,1.8l2.8-1.1c0.5,0,4.7-0.4,5.5,0.9C30,12.2,30.1,12.6,29.9,13z" />
            <rect width="28" height="2" x="2" y="28" />
        </svg>
    );
}