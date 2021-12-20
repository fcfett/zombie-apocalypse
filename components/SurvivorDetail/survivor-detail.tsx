import { useEffect, useState } from "react";
import Image from "next/image";

import { SkillList } from "../SkillList";

import {
  getInfectedSurvivors,
  SurvivorProps,
  toggleInfectedSurvivor,
} from "../../services";

import styles from "./survivor-detail.module.css";
import { Toggle } from "../Toggle";

export function SurvivorDetail({
  slug,
  firstName,
  lastName,
  imagePath,
  attack,
  deffense,
  agility,
  isInfected,
  bio,
}: SurvivorProps) {
  const [isSurvivorInfected, setIsSurvivorInfected] = useState(isInfected);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const isInfected = getInfectedSurvivors().includes(slug);
    setIsSurvivorInfected(isInfected);
    setIsLoaded(true);
  }, [slug]);

  const handleIsInfected = (e: unknown) => {
    const { target } = e as Event;
    const checked = (target as HTMLInputElement).checked;
    setIsSurvivorInfected(checked);
    toggleInfectedSurvivor(slug, checked);
  };

  const fullName = `${firstName} ${lastName}`;
  const survivorClasses = `${styles["survivor-detail"]} ${
    isSurvivorInfected ? styles.infected : ""
  }`;

  return (
    <div className={survivorClasses}>
      <aside>
        <figure>
          <Image
            src={imagePath}
            alt={`${fullName}'s profile picture`}
            width={320}
            height={440}
          />
        </figure>
      </aside>
      <section>
        <h2 className={styles["full-name"]}>
          {firstName}
          <br />
          <strong>{lastName}</strong>
        </h2>
        <p className={styles.bio}>{bio}</p>
        <SkillList skills={[attack, deffense, agility]} />
        {isLoaded ? (
          <Toggle
            textSpacing={0.5}
            onChange={handleIsInfected}
            defaultChecked={isSurvivorInfected}
            text="• Toggle Infected • Toggle Infected • Toggle Infected"
          />
        ) : null}
      </section>
    </div>
  );
}
