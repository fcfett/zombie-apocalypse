import React from "react";
import Image from "next/image";
import Link from "next/link";

import type { SurvivorProps } from "../../services";

import styles from "./survivor.module.css";
import ROUTES from "../../routes";

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
  const fullName = `${firstName} ${lastName}`;
  const survivorClasses = `${styles.survivor} ${
    isInfected ? styles.infected : ""
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
      <ul>
        <li>ATK: {attack}</li>
        <li>DEF: {deffense}</li>
        <li>AGL: {agility}</li>
      </ul>

      <Link href={`${ROUTES.SURVIVORS}/${slug}`} passHref>
        <a className={styles.button}>View Profile</a>
      </Link>
    </div>
  );
}
