import React from "react";

import Survivor from "../../components/Survivor/survivor";

import { SurvivorProps } from "../../services";

import styles from "./survivor-list.module.css";

export type SurvivorListProps = {
  survivors: SurvivorProps[];
};

export default function SurvivorList({ survivors }: SurvivorListProps) {
  return (
    <>
      {survivors ? (
        <ul className={styles["survivor-list"]}>
          {survivors.map((survivorProps) => (
            <li key={survivorProps.id}>
              <Survivor {...survivorProps} />
            </li>
          ))}
        </ul>
      ) : (
        <h1>There are no survivors.</h1>
      )}
    </>
  );
}
