import styles from "./FormSection.module.css";

export const Select = () => {
  return (
    <div className={styles["form-container"]}>
      <select id="cars" name="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="fiat">Fiat</option>
        <option value="audi">Audi</option>
      </select>
      {/* <select
        value={field.type}
        onChange={(e) => handleFieldChange(index, "type", e.target.value)}
      >
        <option value="text">Text</option>
        <option value="select">Select</option>
      </select> */}
    </div>
  );
};
