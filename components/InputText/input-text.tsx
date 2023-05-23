
import { HTMLAttributes } from "react";

import styles from "./input-text.module.css";
import classNames from "classnames";

type Props = Omit<HTMLAttributes<HTMLInputElement>, 'type'>

export function InputText({ className, ...props} : Props) {
  return (
    <input
      {...props}
      type="text"
      className={classNames(styles['input-text'], className)}
    />
  );
}
