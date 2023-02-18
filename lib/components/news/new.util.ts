export type New = {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    createdAt: Date;
};

export const news: New[] = [
    {
        id: 0,
        title: "Cartes journalières",
        description: "Une journée en train pour Fr. 40.- ou une journée sur le lac Léman pour Fr. 20.- !",
        thumbnail: "https://www.ecublens.ch/images/stories/Greffe/documents/Photos/CFF.jpg",
        createdAt: new Date()
    },
    {
        id: 1,
        title: "Concours transports publics",
        description: "Vous n’avez peut-être pas pensé à cette résolution pour 2023, mais se déplacer davantage en transports publics c’est bon pour le climat et bon pour la santé !",
        thumbnail: "https://www.ecublens.ch/images/stories/Greffe/documents/Photos/M1_de_nuit.jpg",
        createdAt: new Date()
    },
    {
        id: 2,
        title: "Réfection du Pont Rouge – Réouverture de la Voie Verte",
        description: "Ce nouveau Pont Rouge réalisé en une seule pièce de béton fibré ultra-performant, est une première européenne pour ce type de ciment blanc teinté dans la masse avec une telle portée. Le design du pont proposé par le bureau d’ingénieur Ingphi avec ce matériau innovant a permis d’affiner la structure, de réduire la pente de moitié par rapport à l’ancienne passerelle et d’obtenir une couleur rouge uniforme durable dans le temps.",
        thumbnail: "https://www.ecublens.ch/images/stories/Greffe/documents/Photos/Pont_Rouge_web_03.jpg",
        createdAt: new Date()
    },
    {
        id: 3,
        title: "Session cantonale des jeunes 2023",
        description: "Cet événement d’envergure cantonale réunira le 18 et 19 mars 2023 une centaine de jeunes entre 14 et 20 ans qui auront la possibilité de débattre avec des députées et députés du Grand Conseil sur quatre thèmes choisis par des jeunes :",
        thumbnail: "https://www.ecublens.ch/images/stories/Greffe/documents/divers/Session_cantonale_des_jeunes_2023.jpg",
        createdAt: new Date()
    }
];