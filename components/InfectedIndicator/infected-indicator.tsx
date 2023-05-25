import { HTMLAttributes } from "react";
import classNames from 'classnames'

import styles from "./infected-indicator.module.css";

type Props = HTMLAttributes<HTMLElement>

export function InfectedIndicator({
  className
}: Props) {
  return (
    <span className={classNames(styles['infected-indicator'], className)}>Infected</span>
  );
}
