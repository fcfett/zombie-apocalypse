import React from "react";
import Image from "next/image";

import type { SurvivorProps } from "../../services";

import styles from "./survivor.module.css";
import ROUTES from "../../routes";

export default function Survivor({
  id,
  firstName,
  lastName,
  imagePath,
  attack,
  deffense,
  agility,
  isInfected,
}: SurvivorProps) {
  const fullName = `${firstName} ${lastName}`;
  const survivorClasses = `${styles.survivor} ${
    isInfected ? styles.infected : ""
  }`;

  return (
    <div className={survivorClasses}>
      <Image
        src={imagePath}
        alt={`${fullName}'s profile picture`}
        width={160}
        height={220}
      />
      <h2 className={styles["full-name"]}>
        {firstName}
        <br />
        <strong>{lastName}</strong>
      </h2>
      <ul>
        <li>ATK: {attack}</li>
        <li>DEF: {deffense}</li>
        <li>AGL: {agility}</li>
      </ul>
      <a className={styles.button} href={`${ROUTES.SURVIVORS}/${id}`}>
        View Profile
      </a>
    </div>
  );
}
