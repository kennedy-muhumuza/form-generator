import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles["header-container"]}>
      <b className={styles["form-logo-text"]}>FormGenerator</b>
    </header>
  );
};
