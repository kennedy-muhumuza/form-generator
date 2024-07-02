import styles from "./SideBar.module.css";

export const SideBar = () => {
  return (
    <aside className={styles["sidebar-container"]}>
      <ul className={styles["list-container"]}>
        <li>All forms</li>
        <li>Favorites</li>
        <li>Feedback</li>
      </ul>
    </aside>
  );
};
