import { ChangeEventHandler } from "react";
import styles from "./toggle.module.css";

type Props = { onChange: ChangeEventHandler };

export function Toggle({ onChange }: Props) {
  return (
    <div className={styles.toggle}>
      <svg className={styles.svg} viewBox="0 0 200 200" fontSize={18.5}>
        <path
          id="circle"
          d="M 0,100 C 0,44.75 44.75,0 100,0 155.25,0 200,44.75 200,100 200,155.25 155.25,200 100,200 44.75,200 0,155.25 0,100"
          style={{ strokeWidth: 5, fill: "#222" }}
        />
        <text width={800} fill="white" dy={2}>
          <textPath
            alignmentBaseline="before-edge"
            style={{ textTransform: "uppercase", fontWeight: 600 }}
            xlinkHref="#circle"
          >
            • Toggle Infected Survivors • Toggle Infected Survivors
          </textPath>
        </text>
      </svg>
      <div className={styles["toggle-input"]}>
        <input
          className={styles.input}
          type="checkbox"
          id="toggle"
          onChange={onChange}
        />
        <label
          className={styles.label}
          htmlFor="toggle"
          title="Toggle Infected"
        />
      </div>
    </div>
  );
}
