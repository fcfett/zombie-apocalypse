import Link from "next/link";

import styles from "./back-button.module.css";
import ROUTES from "../../routes";

export function BackButton() {
  return (
    <Link href={`${ROUTES.SURVIVORS}`} passHref>
      <a className={styles.button}>Back</a>
    </Link>
  );
}
