import React from "react";
import { Rating } from "../Rating";

import styles from "./skill-list.module.css";

export type SkillListProps = {
  skills: number[];
};

export function SkillList({ skills: [atk, def, agl] }: SkillListProps) {
  return (
    <ul className={styles["skill-list"]}>
      <li title={`ATK: ${atk}`}>
        ATK: <Rating rate={atk} />
      </li>
      <li title={`DEF: ${def}`}>
        DEF: <Rating rate={def} />
      </li>
      <li title={`AGL: ${agl}`}>
        AGL: <Rating rate={agl} />
      </li>
    </ul>
  );
}
