import { ReactElement, SVGProps } from "react";
import { ArrivalIcon, CertificateIcon, DepartureIcon, MoveIcon, TrainIcon } from "@lib/components/icons";

export type Prestation = {
    id: number;
    name: string;
    icon: ({ className }: SVGProps<SVGSVGElement>) => ReactElement;
};

export const prestations: Prestation[] = [
    {
        id: 0,
        name: "Changement d'adresse",
        icon: MoveIcon
    },
    {
        id: 1,
        name: "Départ de la commune",
        icon: DepartureIcon
    },
    {
        id: 2,
        name: "Commander d'attestations",
        icon: CertificateIcon
    },
    {
        id: 3,
        name: "Cartes journalières",
        icon: TrainIcon
    },
    {
        id: 4,
        name: "Arriver à Ecublens",
        icon: ArrivalIcon
    }
];