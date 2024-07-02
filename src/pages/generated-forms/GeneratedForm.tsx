import { MultipleChoice } from "../../components/form-sections/MultipleChoice";
import { PageTitle } from "../../components/form-sections/PageTitle";
import { SubmitButton } from "../../components/form-sections/SubmitButton";
import styles from "./GeneratedForm.module.css";
// import { Select } from "../../components/form-sections/Select";
// import { TextArea } from "../../components/form-sections/TextArea";
// import { Input } from "../../components/form-sections/Input";

export const GeneratedForm: React.FC = () => {
  return (
    <form className={styles["generated-form-container"]}>
      <PageTitle />

      <div className={styles["field-input-container"]}>
        <h3 className={styles["label-title"]}>Label</h3>
        <p className={styles["label-description"]}>Description of the label.</p>
        {true && (
          <input
            placeholder={`Your answer`}
            type="date"
            required
            className={styles["input-field"]}
          />
        )}
        {!true && (
          <span className={styles["checkbox-container"]}>
            <input
              type="checkbox"
              required
              className={styles["input-checkbox"]}
            />
            <p>Yes</p>
          </span>
        )}
        {!true && (
          <textarea
            placeholder="Type your message"
            className={styles["text-area"]}
            required
          ></textarea>
        )}
        {!true && (
          <select
            className={styles["select-tag"]}
            // value={field.type}
            // onChange={(e) => handleFieldChange(index, "type", e.target.value)}
          >
            <option value="text">Text</option>
            <option value="select">Select</option>
          </select>
        )}
      </div>
      <MultipleChoice />
      <SubmitButton />
    </form>
  );
};
