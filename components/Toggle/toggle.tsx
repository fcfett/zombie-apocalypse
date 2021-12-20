import { ChangeEventHandler } from "react";

import styles from "./toggle.module.css";

type Props = {
  onChange: ChangeEventHandler;
  text?: string;
  textSpacing?: number;
  defaultChecked?: boolean;
};

const DEFAULT_TEXT = "• Toggle Infected Survivors • Toggle Infected Survivors";
const DEFAULT_TEXT_SPACING = 0;

export function Toggle({
  onChange,
  defaultChecked,
  text = DEFAULT_TEXT,
  textSpacing = DEFAULT_TEXT_SPACING,
}: Props) {
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
            letterSpacing={textSpacing}
            style={{
              textTransform: "uppercase",
              fontWeight: 600,
            }}
            xlinkHref="#circle"
          >
            {text}
          </textPath>
        </text>
      </svg>
      <div className={styles["toggle-input"]}>
        <input
          className={styles.input}
          type="checkbox"
          id="toggle"
          onChange={onChange}
          defaultChecked={defaultChecked}
        />
        <label
          htmlFor="toggle"
          title="Toggle Infected"
          className={styles.label}
        />
      </div>
    </div>
  );
}
