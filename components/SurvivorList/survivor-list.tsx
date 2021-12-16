import React from "react";

import Survivor from "../../components/Survivor/survivor";

import type { SurvivorProps } from "../../services";

import styles from "./survivor-list.module.css";

export type SurvivorListProps = {
  survivors: SurvivorProps[];
};

export default function SurvivorList({ survivors }: SurvivorListProps) {
  return survivors.length ? (
    <ul className={styles["survivor-list"]}>
      {survivors.map((survivorProps) => (
        <li key={survivorProps.slug}>
          <Survivor {...survivorProps} />
        </li>
      ))}
    </ul>
  ) : (
    <div>
      <h1>No survivors found.</h1>
    </div>
  );
}
