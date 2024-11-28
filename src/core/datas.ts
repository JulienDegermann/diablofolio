import EquipmentInterface from "../Interfaces/EquipmentInterface";


export enum EquipmentType {
    set = "set",
    legendary = "legendary"
};

export enum EquipmentPlace {
    head = "head",
    shoulders = "shoulders",
    neck = "neck",
    chest = "chest",
    arms = "arms",
    hands = "hands",
    leftRing = "leftRing",
    rightRing = "rightRing",
    legs = "legs",
    feets = "feets",
    leftHand = "leftHand",
    rightHand = "rightHand",
    belt = "belt"
}

export enum SetName {
    developer = "les atouts du codeur",
    gamer = "les armes du gamer",
    biker = "le cycliste de Brocéliande"
}


export const sets = [
    {
        name: SetName.developer,
        description: "Le set du codeur est composé de 6 pièces. Il permet de coder plus vite et plus efficacement.",
        bonus: [
            "(2) Conception agile. Le développement des features s'adapte en fonction de plusieurs critères (priorité, changements, contraintes).",
            "(4) Augmente la maintenabilité. Le debuugage est plus efficace.",
            "(6) Robustesse et l'évolutivité accrues. L'architecture et la conteneurisation facilitent la croissance des applications.",
        ]
    },
    {
        name: SetName.gamer,
        description: "Le set du gamer est composé de 2 pièces. Il permet de jouer plus longtemps et plus efficacement.",
        bonus: [
            "(2) La majorité des actions sont effectuées au clavier. Les actions sont plus rapides et plus précises.",
        ]
    },
    {
        name: SetName.biker,
        description: "Le set du cycliste de Brocéliande est composé de 3 pièces. Il permet de rouler plus vite et plus efficacement.",
        bonus: [
            "(2) Confère une résistance accrue aux intempéries (vent, pluie, froid)",
            "(3) Récupération d'énergie augmentée.",
        ]
    }

];

export const equipments: EquipmentInterface[] = [
    {
        type: EquipmentType.legendary,
        name: "Les souliers de 7 lieues",
        place: EquipmentPlace.feets,
        description: "Permettent de se déplacer quotidiennement autour de Vannes, dans la limite de 1h de trajet (jusqu'à 100 kms)."
    },
    {
        type: EquipmentType.legendary,
        name: "La ceinture aux monstres",
        place: EquipmentPlace.belt,
        description: ""
    },
    {
        type: EquipmentType.set,
        setName: SetName.developer,
        name: "le bonnet ingénieux du codeur",
        place: EquipmentPlace.head,
        description: "Génèration d'idées de features innovantes et utiles."
    },
    {
        type: EquipmentType.set,
        setName: SetName.developer,
        name: "les épaulières agiles du codeur",
        place: EquipmentPlace.shoulders,
        description: "coucu la description"
    },
    {
        type: EquipmentType.set,
        setName: SetName.developer,
        name: "l'anneau de mémoire du codeur",
        place: EquipmentPlace.leftRing,
        description: "coucu la description"
    },
    {
        type: EquipmentType.set,
        setName: SetName.developer,
        name: "la bague de l'investissement du codeur",
        place: EquipmentPlace.rightRing,
        description: "coucu la description"
    },
    {
        type: EquipmentType.set,
        setName: SetName.developer,
        name: "l'amulette débuggeuse du codeur",
        place: EquipmentPlace.neck,
        description: "coucu la description"
    },
    {
        type: EquipmentType.set,
        setName: SetName.developer,
        name: "le bracelet moelleux du codeur",
        place: EquipmentPlace.arms,
        description: "coucu la description"
    },
    {
        type: EquipmentType.set,
        setName: SetName.gamer,
        name: "le piano du gamer",
        place: EquipmentPlace.leftHand,
        description: "coucu la description"
    },
    {
        type: EquipmentType.set,
        setName: SetName.gamer,
        name: "la mobilité du gamer",
        place: EquipmentPlace.rightHand,
        description: "coucu la description"
    },
    {
        type: EquipmentType.set,
        setName: SetName.biker,
        name: "le cuissart blindé de Brocéliande",
        place: EquipmentPlace.legs,
        description: "coucu la description"
    },
    {
        type: EquipmentType.set,
        setName: SetName.biker,
        name: "le maillot bleu de Brocéliande",
        place: EquipmentPlace.chest,
        description: "coucu la description"
    },
    {
        type: EquipmentType.set,
        setName: SetName.biker,
        name: "les glantelets rembourés de Brocéliande",
        place: EquipmentPlace.hands,
        description: "coucu la description"
    },

];


export const skills = {
    hardskills: [
        ["php", "Symfony"],
        ["JavaScript", "TypeScript", "React"],
        ["Git", "GitHub", "GitFlow"],
        ["Docker", "clean architecture"],
        ["Slack", "Teams", "Meet", "Discord"],
        ["Français", "Anglais"]
    ],
    softskills: [
        "Esprit d'équipe",
        "Sens du détail",
        "Innovation",
        "Curiosité", // to change
    ]
}

export const experiences = [
    {
        title: "Basaalt",
        stack: ["Symfony", "React", "Api Platform"],
        image: "basaalt.webp"
    },
    {
        title: "Blabla Vélo",
        stack: ["Symfony", "Docker", "Bootstrap"],
        image: "blablavelo.webp"
    },
    {
        title: "A l'Encre Bleue",
        stack: ["Wordpress"],
        image: "alencrebleue.webp"
    },

]