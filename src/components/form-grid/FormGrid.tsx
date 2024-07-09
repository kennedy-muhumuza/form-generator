import styles from "./FormGrid.module.css";
import { formAttributes } from "../../data/form-attributes";
// import { Dots } from "../dots/Dots";

export const FormGrid = () => {
  interface FormAttributes {
    title: string;
    type: string;
    createdAt: string;
    createdBy: string;
    link: string;
  }
 
  const formData: FormAttributes[] = formAttributes;
 
  return (
    <div className={styles["grid-container"]}> 
      {formData.map((item) => (
        <div key={item.link} className={styles["grid-item"]}>
          <div className={styles["grid-header"]}>
            <span>{item.title}</span>
            <span>
              <span className={styles["dots-container"]}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </span>
          </div>
          <div className={styles["form-img-container"]}>
            <img src="new-form.png" className={styles["form-img"]} />
          </div>
          <div className={styles["created-date"]}>
            <span>Uploaded at {item.createdAt}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
