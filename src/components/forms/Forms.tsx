import { formAttributes } from "../../data/form-attributes";
import { Dots } from "../dots/Dots";
import styles from "./Form.module.css";

export const Forms: React.FC = () => {
  interface FormAttributes {
    title: string;
    type: string;
    createdAt: string;
    createdBy: string;
    link: string;
  }

  const formData: FormAttributes[] = formAttributes;
  return (
    <div className={styles["form-container"]}>
      <table className={styles["table-wrapper"]}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Type</th>
            <th>Link</th>
            <th>Created time</th>
            <th>Actions</th>
          </tr>
        </thead>
        {formData.map((item: FormAttributes) => (
          <tbody key={item.link}>
            <tr>
              <td>{item.title}</td>
              <td>{item.type}</td>
              <td>{item.link}</td>
              <td>{item.createdAt}</td>
              <td>
                <Dots />
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};
