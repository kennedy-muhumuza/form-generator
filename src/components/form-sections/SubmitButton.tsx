import styles from "./FormSection.module.css";

export const SubmitButton = () => {
  return (
    <div className={styles["submit-container"]}>
      <button type="submit" className={styles["submit-btn"]}>
        Submit
      </button>
      <span className={styles["clear-prompt"]}>Clear form</span>
    </div>
  );
};
