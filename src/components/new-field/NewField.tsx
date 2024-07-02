import { useState } from "react";
import styles from "./NewField.module.css";

export const NewField: React.FC = () => {
  const [val, setVal] = useState<any[]>([]);

  console.log(val, "values");

  const handleAddNewField = (e: React.FormEvent) => {
    e.preventDefault();
    const updateValues = [...val, []];
    setVal(updateValues);
  };
  const handleChange = (onChangeValue, index: number) => {
    const inputData = [...val];
    inputData[index] = onChangeValue.target.value;
    setVal(inputData);
  };

  const handleDelete = (e: React.FormEvent, index) => {
    e.preventDefault();
    const deleteVal = [...val];
    deleteVal.splice(index, 1);
    setVal(deleteVal);
  };
  return (
    <>
      <button className={styles["add-option-btn"]} onClick={handleAddNewField}>
        <svg
          fill="currentColor"
          viewBox="0 0 16 16"
          height="1.5em"
          width="1.5em"
          className={styles["plus-icon"]}
        >
          <path d="M8 4a.5.5 0 01.5.5v3h3a.5.5 0 010 1h-3v3a.5.5 0 01-1 0v-3h-3a.5.5 0 010-1h3v-3A.5.5 0 018 4z" />
        </svg>
        Create option fields
      </button>
      {val.map((item, index) => {
        return (
          <div key={index}>
            <input
              type="text"
              onChange={(e) => handleChange(e, index)}
              className={styles["input-field"]}
              required
            />
            <button
              className={styles["delete-btn"]}
              onClick={(e) => handleDelete(e, index)}
            >
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
};
