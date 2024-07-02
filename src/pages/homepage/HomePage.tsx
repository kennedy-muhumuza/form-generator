import styles from "./HomePage.module.css";

export const HomePage = () => {
  return (
    <div>
      <div className={styles["homepage-header"]}>
        <h1 className={styles["logo-title"]}>FormGenerator</h1>
        <div className={styles["signin-btn-container"]}>
          <button className={styles["signin-btn"]}>Sign In</button>
        </div>
      </div>
      <div className={styles["homepage-main-content"]}>
        <p className={styles["main-content"]}>
          The easiest way to generate forms, quizes as well as management of all
          associated data
        </p>
        <span className={styles["content-call-to-action-msg"]}>
          Create your account now and manage your forms in less than a minute .
        </span>
        <div className={styles["btn-container"]}>
          <button className={styles["get-started-btn"]}>Get started</button>
          <span>
            Learn more{" "}
            <svg
              fill="currentColor"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 01.5-.5h11.793l-3.147-3.146a.5.5 0 01.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L13.293 8.5H1.5A.5.5 0 011 8z"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};
