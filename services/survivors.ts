export type SurvivorProps = {
  id: number;
  name: string;
  age: number;
  attack: number;
  deffense: number;
  agility: number;
  imagePath: string;
  isInfected: boolean;
};

const survivors: SurvivorProps[] = [
  {
    id: 1,
    name: "Leon Kenedy",
    age: 31,
    imagePath: "/leon.png",
    attack: 4,
    deffense: 3,
    agility: 3.5,
    isInfected: true,
  },
  {
    id: 2,
    name: "Jill Valentine",
    age: 26,
    attack: 3,
    deffense: 4,
    agility: 4,
    imagePath: "/jill.png",
    isInfected: false,
  },
  {
    id: 3,
    name: "Joel Miller",
    age: 52,
    attack: 4.5,
    deffense: 4,
    agility: 3,
    imagePath: "/joel.png",
    isInfected: false,
  },
  {
    id: 4,
    name: "Ellie Williams",
    age: 19,
    attack: 3,
    deffense: 3,
    agility: 5,
    imagePath: "/ellie.png",
    isInfected: false,
  },
  {
    id: 5,
    name: "Michonne Hawthorne",
    age: 37,
    attack: 5,
    deffense: 3,
    agility: 5,
    imagePath: "/michonne.png",
    isInfected: false,
  },
];

export async function getSurvivors(): Promise<SurvivorProps[]> {
  return survivors;
}

export async function getSurvivor(
  survivorId: number
): Promise<SurvivorProps | null> {
  const [survivor = null] = survivors.filter(({ id }) => id === survivorId);
  return survivor;
}
