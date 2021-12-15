export type SurvivorProps = {
  id: number;
  name: string;
  age: number;
  attack: number;
  deffense: number;
  agility: number;
  imagePath: string;
  isInfected: boolean;
  bio: string;
};

const survivorsMock: SurvivorProps[] = [
  {
    id: 1,
    name: "Leon Kenedy",
    age: 31,
    imagePath: "/leon.png",
    attack: 4,
    deffense: 3,
    agility: 3.5,
    isInfected: true,
    bio: `Leon Scott Kennedy is an American of Italian descent currently employed as a federal agent by the Division of Security Operations (D.S.O.), a counter-terrorism agency with direct Presidential oversight. Kennedy is a known survivor of the Raccoon City Destruction Incident, then as a police officer. Following his escape, he was offered a job in a US.STRATCOM team devoted to anti-B.O.W. combat, and served it in repeated operations around the world.`,
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
    bio: `Jill Valentine is an American Special Operations Agent (SOA) of the Bioterrorism Security Assessment Alliance, of which she is a co-founder and an original member. She is a respected high-ranking operator, owing to her commitment in eradicating bioterrorism and her survival amid to the Biohazardous outbreaks in Arklay County.`,
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
    bio: `Joel was a survivor in post-apocalyptic America that had been ravaged by the Cordyceps brain infection. After losing his only daughter Sarah in the early stages of the outbreak, Joel became a ruthless and cynical smuggler eventually tasked with smuggling and protecting Ellie, a young girl who was the key to mankind's survival. Joel eventually formed a strong bond with her.`,
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
    bio: `Ellie is the central character of The Last of Us series. She serves as the deuteragonist of The Last of Us, the playable protagonist of both The Last of Us: Left Behind and The Last of Us Part II[1], and the main character in The Last of Us: American Dreams. When introduced as a fourteen-year-old survivor, Ellie is "mature beyond her years" - a result of the circumstances of her environment.`,
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
    bio: `Michonne Hawthorne (pronounced mih-SHOWN) is a main character and a survivor of the outbreak in AMC's The Walking Dead. Following the loss of her boyfriend and toddler, she withdrew into solitude perfecting her swordsmanship and becoming a dark and ruthless warrior. After the Greene family farm was overrun by zombies, Michonne encountered Andrea and began to open up as the two developed a close friendship while surviving the winter together.`,
  },
];

export async function getSurvivors(): Promise<SurvivorProps[]> {
  return survivorsMock;
}

export async function getSurvivor(
  survivorId: number
): Promise<SurvivorProps | null> {
  const [survivor = null] = survivorsMock.filter(({ id }) => id === survivorId);
  return survivor;
}
