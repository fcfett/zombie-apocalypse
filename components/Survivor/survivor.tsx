import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { getInfectedSurvivors, SurvivorProps } from "../../services";

import styles from "./survivor.module.css";
import ROUTES from "../../routes";
import SkillList from "../SkillList/skill-list";

export default function Survivor({
  slug,
  firstName,
  lastName,
  imagePath,
  attack,
  deffense,
  agility,
  isInfected,
}: SurvivorProps) {
  const [isSurvivorInfected, setIsSurvivorInfected] = useState(isInfected);

  useEffect(() => {
    const isInfected = getInfectedSurvivors().includes(slug);
    setIsSurvivorInfected(isInfected);
  }, [slug]);

  const fullName = `${firstName} ${lastName}`;
  const survivorClasses = `${styles.survivor} ${
    isSurvivorInfected ? styles.infected : ""
  }`;

  return (
    <div className={survivorClasses}>
      <figure>
        <Image
          src={imagePath}
          alt={`${fullName}'s profile picture`}
          width={160}
          height={220}
        />
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
