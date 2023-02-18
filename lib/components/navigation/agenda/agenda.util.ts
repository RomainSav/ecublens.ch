export type EventType = {
    id: number;
    title: string;
    description: string;
    startAt: Date;
    endAt?: Date;
};

export const events: EventType[] = [
    {
        id: 0,
        title: "Pétanque pour les 55+",
        description: "Vive la pétanque",
        startAt: new Date(2023, 2, 22)
    }
];