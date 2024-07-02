import { useState } from "react";
import styles from "./AddField.module.css";
import { NewField } from "../../components/new-field/NewField";

export const AddField = () => {
  //   const [activeTab, setActiveTab] = useState<string>("table");
  //   const [formContent, setFormContent] = useState<string>("page");
  const [optionNumber, setOptionNumber] = useState<string>("0");

  console.log("check options nature", optionNumber);

  const handleOptionNumber = (e: React.FormEvent, options: string) => {
    e.preventDefault();
    setOptionNumber(options);
    console.log("check options nature", optionNumber);
  };

  return (
    <div className={styles["add-field-container"]}>
      <form>
        <div className={styles["field-container"]}>
          <label>Page title</label>
          <input
            type="text"
            placeholder="Title"
            className={styles["input-field"]}
            required
          />
        </div>
        <div className={styles["field-container"]}>
          <label>Page description</label>
          <input
            type="text"
            placeholder="Description"
            className={styles["input-field"]}
            required
          />
        </div>

        <span
          className={styles["add-form-btn"]}
          //   onClick={(e) => handleFormContent(e, "label")}
        >
          <svg
            fill="currentColor"
            viewBox="0 0 16 16"
            height="1.5em"
            width="1.5em"
            className={styles["plus-icon"]}
          >
            <path d="M8 4a.5.5 0 01.5.5v3h3a.5.5 0 010 1h-3v3a.5.5 0 01-1 0v-3h-3a.5.5 0 010-1h3v-3A.5.5 0 018 4z" />
          </svg>
          New field
        </span>

        <span className={styles["labels-header"]}>
          <h1 className={styles["labels-title"]}>Fields</h1>
        </span>
        <div className={styles["field-container"]}>
          <label>Field title</label>
          <input
            type="text"
            placeholder="label"
            className={styles["input-field"]}
            required
          />
        </div>
        <div className={styles["field-container"]}>
          <label>Field description</label>
          <input
            type="text"
            placeholder="description"
            className={styles["input-field"]}
            required
          />
        </div>
        <div className={styles["field-container"]}>
          <label>Required?</label>
          <div className={styles["label-checkbox"]}>
            <input type="checkbox" className={styles["input-field-checkbox"]} />
            <span>Yes</span>
          </div>
        </div>
        <div className={styles["field-container"]}>
          <label>Field tag</label>

          <select
            id="filter"
            name="filter-types"
            className={styles["filter-select"]}
          >
            <option value="normal">Normal field</option>
            <option value="text-area">Text area</option>
          </select>
        </div>
        <div className={styles["field-container"]}>
          <label>Field type</label>

          <select
            id="filter"
            name="filter-types"
            className={styles["filter-select"]}
          >
            <option value="text">Text</option>
            <option value="checkbox">Checkbox</option>
            <option value="date">Date</option>
            <option value="email">email</option>
          </select>
        </div>
        <div className={styles["field-container"]}>
          <label>Multiple choice</label>
          <NewField />
          {/* <button
            className={styles["add-option-btn"]}
            onClick={handleAddNewField}
          >
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
                <button className={styles["delete-btn"]}>Delete</button>
              </div>
            );
          })} */}
          {/* <form onSubmit={(e) => handleOptionNumber(e, optionNumber)}>
            <input
              type="text"
              value={optionNumber}
              onChange={(e) => setOptionNumber(e.target.value)}
              placeholder="number of options"
              className={styles["input-field"]}
            />
            <button type="submit" className={styles["add-option-btn"]}>
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
          </form> */}
        </div>
      </form>
    </div>
  );
};
