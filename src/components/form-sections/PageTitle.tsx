import styles from "./FormSection.module.css";

export const PageTitle = () => {
  return (
    <div className={styles["page-title-container"]}>
      <h1 className={styles["page-title-heading"]}>PageTitle</h1>
      <p>
        All the submissions of this form will be appended in a table for review.
      </p>
    </div>
  );
};
