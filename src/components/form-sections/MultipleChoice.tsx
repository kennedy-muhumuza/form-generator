import { useState } from "react";
import styles from "./FormSection.module.css";

export const MultipleChoice: React.FC = () => {
  const [option, setOption] = useState<string>("");
  const optionData: string[] = [
    "Answer 1",
    "Answer 2",
    "Answer 3",
    "Answer 4",
    "Answer 5",
  ];
  const clickHandler = (item: string) => {
    setOption(() => item);
    console.log("option", option);
  };

  return ( 
    <div className={styles["form-container"]}>
      <h3 className={styles["multiple-choice-title"]}>MultipleChoice</h3>
      <div className={styles["multiple-choice-container"]}>
        {optionData.map((item, index) => (
          <span className={styles["circle-container"]} key={index}>
            <span
              className={`${styles["option-circle"]} ${
                option === item && styles["active"]
              }`}
              onClick={() => clickHandler(item)}
            ></span>
            <span>{item}</span>
          </span>
        ))}
      </div>
    </div>
  );
};
