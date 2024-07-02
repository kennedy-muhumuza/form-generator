import styles from "./Dots.module.css";

export const Dots: React.FC = () => {
  return (
    <span className={styles["dots-container"]}>
      <span></span>
      <span></span>
      <span></span>
    </span>
  );
};
