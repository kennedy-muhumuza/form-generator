import { useState } from "react";
import styles from "./Dashboard.module.css";
import { Forms } from "../../components/forms/Forms";
import { FormGrid } from "../../components/form-grid/FormGrid";
import { Link } from "react-router-dom";
// import FormModal from "../../components/model/FormModal";
// import { AddOption } from "../../components/add-option/AddOption";

export const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("table");
  // const [formContent, setFormContent] = useState<string>("page");
  // const [optionNumber, setOptionNumber] = useState<string>("0");

  // console.log("check options nature", optionNumber);

  const handleActiveTab = (e: React.FormEvent, tab: string) => {
    e.preventDefault();
    setActiveTab(tab);
  };

  // const handleOptionNumber = (e: React.FormEvent, options: string) => {
  //   e.preventDefault();
  //   setOptionNumber(options);
  //   console.log("check options nature", optionNumber);
  // };

  // const handleFormContent = (e: React.FormEvent, content: string) => {
  //   e.preventDefault();
  //   setFormContent(content);
  // };

  return (
    <div className={styles["dashboard-container"]}>
      <div className={styles["dashboard-header"]}>
        <h1 className={styles["form-title"]}>Your Forms</h1>
        <form className={styles["search-form-container"]}>
          <input
            placeholder="form names"
            type="text"
            required
            className={styles["search-input"]}
          />
          <button className={styles["search-btn"]}>
            <svg fill="none" viewBox="0 0 24 24" height="1.4em" width="1.4em">
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M18.319 14.433A8.001 8.001 0 006.343 3.868a8 8 0 0010.564 11.976l.043.045 4.242 4.243a1 1 0 101.415-1.415l-4.243-4.242a1.116 1.116 0 00-.045-.042zm-2.076-9.15a6 6 0 11-8.485 8.485 6 6 0 018.485-8.485z"
                clipRule="evenodd"
              />
            </svg>
            Search
          </button>
        </form>
        <Link to="create-form" className={styles["add-field-link"]}>
          <button className={styles["generate-btn"]}>Create form</button>
        </Link>

        {/* <FormModal
          openModalElement={
            <button className={styles["generate-btn"]}>Create form</button>
          }
          width={45}
        >
          <div className={styles["modal-wrapper"]}>
            <div className={styles["generate-form-modal-container"]}>
              <ul className={styles["generate-form-modal-list"]}>
                <li>All Forms</li>
                <li>Favorites</li>
                <li>Settings</li>
              </ul>
            </div>
            <div className={styles["modal-forms-container"]}>
              {formContent === "page" && (
                <span className={styles["modal-form-header"]}>
                  <h1>Forms</h1>
                  <p>View and manage organization forms</p>
                </span>
              )}

              <form>
                {formContent === "page" && (
                  <>
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
                      onClick={(e) => handleFormContent(e, "label")}
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
                  </>
                )}
                {formContent === "label" && (
                  <>
                    <span className={styles["labels-header"]}>
                      <span className={styles["labels-nav-bar-container"]}>
                        <p
                          className={styles["labels-nav-bar-forms"]}
                          onClick={(e) => handleFormContent(e, "page")}
                        >
                          Forms &nbsp; &nbsp;/&nbsp; &nbsp;
                        </p>
                        <p className={styles["labels-nav-bar"]}>
                          Add new field
                        </p>
                      </span>
                      <h1 className={styles["labels-title"]}>Labels</h1>
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
                        <input
                          type="checkbox"
                          className={styles["input-field-checkbox"]}
                        />
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
                      <form
                        onSubmit={(e) => handleOptionNumber(e, optionNumber)}
                      >
                        <input
                          type="text"
                          value={optionNumber}
                          onChange={(e) => setOptionNumber(e.target.value)}
                          placeholder="number of options"
                          className={styles["input-field"]}
                        />
                        <button
                          type="submit"
                          className={styles["add-option-btn"]}
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
                      </form>
                    </div>
                  </>
                )}
                {formContent === "page" && (
                  <div className={styles["submit-container"]}>
                    <button type="submit" className={styles["submit-btn"]}>
                      Create
                    </button>
                    <span className={styles["clear-prompt"]}>Cancel</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </FormModal> */}
      </div>
      <div className={styles["tabs-filter-wrapper"]}>
        <div className={styles["tabs-container"]}>
          <span
            className={`${styles["grid-tab"]} ${
              activeTab === "grid" && styles["active"]
            }`}
            onClick={(e) => handleActiveTab(e, "grid")}
          >
            <svg
              viewBox="0 0 512 512"
              fill="currentColor"
              height="1.4em"
              width="1.4em"
            >
              <path d="M204 240H68a36 36 0 01-36-36V68a36 36 0 0136-36h136a36 36 0 0136 36v136a36 36 0 01-36 36zM444 240H308a36 36 0 01-36-36V68a36 36 0 0136-36h136a36 36 0 0136 36v136a36 36 0 01-36 36zM204 480H68a36 36 0 01-36-36V308a36 36 0 0136-36h136a36 36 0 0136 36v136a36 36 0 01-36 36zM444 480H308a36 36 0 01-36-36V308a36 36 0 0136-36h136a36 36 0 0136 36v136a36 36 0 01-36 36z" />
            </svg>
            Grid
          </span>
          <span
            className={`${styles["table-tab"]} ${
              activeTab === "table" && styles["active"]
            }`}
            onClick={(e) => handleActiveTab(e, "table")}
          >
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="1.4em"
              width="1.4em"
            >
              <path d="M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z" />
            </svg>
            Table
          </span>
        </div>
        <div className={styles["filter-types-container"]}>
          <label>Type Filter</label>
          <select
            id="filter"
            name="filter-types"
            className={styles["filter-select"]}
          >
            <option value="fiat">All</option>
            <option value="quiz">Quiz</option>
            <option value="form">Form</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      {activeTab === "grid" && <FormGrid />}
      {activeTab === "table" && <Forms />}
    </div>
  );
};
