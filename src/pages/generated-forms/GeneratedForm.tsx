import { MultipleChoice } from "../../components/form-sections/MultipleChoice";
import { SubmitButton } from "../../components/form-sections/SubmitButton";
import styles from "./GeneratedForm.module.css";
import { formData } from "../../data/form-data";
import React, { useState, ChangeEvent, FormEvent } from 'react'


interface Field{
  question: string;
  status: string;
  required: boolean;
  imageUrl: string;
  fieldId: number;
}
interface Props {
  id: number;
  formTitle: string;
  formDescription: string;
  fields: Field[];
}
// export const GeneratedForm: React.FC<Props[]> = ({id, formTitle, formDescription, fields}) => {
  export const GeneratedForm: React.FC<Props[]> = () => {
  const [title, setTitle]=useState<string>(formData[0].formTitle)
  const [description, setDescription]=useState<string>(formData[0].formDescription)
  const [forms, setForms]=useState<Props[]>(formData)
  const [fields, setFields]=useState<Field[]>(formData[0].fields)
  const [activeField, setActiveField]=useState<string>("")


const handleActiveField=(field:string)=>{
setActiveField(field)
}

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault(); 
    
  };
  return ( 
    <form className={styles["generated-form-container"]} onSubmit={handleSubmit} onClick={()=>handleActiveField("")}> 
      
      <div className={styles["page-title-container"]} onClick={()=>handleActiveField(`title-${formData[0].id}`)}>
        {activeField===`title-${formData[0].id}`?
        
      <> <h1 className={styles["page-title-heading"]}>{title}</h1>
      <p>
        {description}
      </p>   
      </>: <>
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        className={styles["input-title-heading"]}
      />
     
      <p>
        {description}
      </p>
      </>}

      </div>

     
      {fields.map((item) => (<div key={item.fieldId} className={styles["field-input-container"]}>
      
      <h1 className={styles["page-title-heading"]}>{item.question}</h1>
      <p>
        All the submissions of this form will be appended in a table for review.
      </p>
    </div>        
    ))
      }

      <div className={styles["field-input-container"]}>
        <h3 className={styles["label-title"]}>Label</h3>
        <p className={styles["label-description"]}>Description of the label.</p>
        {true && (
          <input
        // name={`field-${item.fieldId}-date`}
            placeholder={`Your answer`}
            type="date"
            required
            className={styles["input-field"]}
          />
        )}
        {true && (
          <span className={styles["checkbox-container"]}>
            <input
              type="checkbox"
              required
              className={styles["input-checkbox"]}
            />
            <p>Yes</p>
          </span>
        )}
        {true && (
          <textarea
            placeholder="Type your message"
            className={styles["text-area"]}
            required
          ></textarea>
        )}
        {true && (
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
 