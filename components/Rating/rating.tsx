import { CSSProperties } from "react";
import Image from "next/image";

import styles from "./rating.module.css";

export type RatingProps = {
  rate: number;
};

const RATE_BASE = 5;

export function Rating({ rate }: RatingProps) {
  const ratePercentage = (rate * 100) / RATE_BASE;
  const internalStyle = { "--rate": `${ratePercentage}%` } as CSSProperties;

  return (
    <ol className={styles.rating} style={internalStyle}>
      {Array.from({ length: RATE_BASE }).map((value, index) => {
        const count = index + 1;
        return (
          <li key={index}>
            <Image
              src="/brain.png"
              alt={`${count} brain${count > 1 ? "s" : ""} rate`}
              width={24}
              height={24}
            />
          </li>
        );
      })}
    </ol>
  );
}
