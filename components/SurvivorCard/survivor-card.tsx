import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { getInfectedSurvivors, SurvivorProps } from "../../services";

import styles from "./survivor-card.module.css";
import ROUTES from "../../routes";
import { SkillList } from "../SkillList";
import { InfectedIndicator } from "../InfectedIndicator";

export function SurvivorCard({
  slug,
  firstName,
  lastName,
  imagePath,
  attack,
  deffense,
  agility,
  isInfected,
}: SurvivorProps) {
  const [isSurvivorInfected, setIsSurvivorInfected] = useState<boolean>(isInfected);

  useEffect(() => {
    const isInfected = getInfectedSurvivors().includes(slug);
    setIsSurvivorInfected(isInfected);
  }, [slug]);

  const fullName = `${firstName} ${lastName}`;
  const survivorClasses = `${styles["survivor-card"]} ${
    isSurvivorInfected ? styles.infected : ""
  }`;

  return isSurvivorInfected !== undefined && (
    <div className={survivorClasses}>
      <figure>
        <Image
          src={imagePath}
          alt={`${fullName}'s profile picture`}
          width={160}
          height={220}
        />
        {isSurvivorInfected && <InfectedIndicator />}
      </figure>
      <h2 className={styles["full-name"]}>
        {firstName}
        <br />
        <strong>{lastName}</strong>
      </h2>
      <SkillList skills={[attack, deffense, agility]} />
      <Link href={`${ROUTES.SURVIVORS}/${slug}`} passHref>
        <a className={styles.button}>View Profile</a>
      </Link>
    </div>
  );
}
