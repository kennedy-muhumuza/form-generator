import { MultipleChoice } from "../../components/form-sections/MultipleChoice";
import { SubmitButton } from "../../components/form-sections/SubmitButton";
import styles from "./GeneratedForm.module.css";
import { formData } from "../../data/form-data";
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Props } from "../../lib/types";
import { Field } from "../../lib/types";
import { FormIdentifierProps } from "../../lib/types";


export const GeneratedForm: React.FC<Props[]> = () => {
  const [title, setTitle] = useState<string>(formData[0].formTitle);
  const [description, setDescription] = useState<string>(formData[0].formDescription);
  const [forms, setForms] = useState<Props[]>(formData);
  const [fields, setFields] = useState<Field[]>(formData[0].fields);
  const [activeFormTitleStatus, setActiveFormTitleStatus] = useState<boolean>(true);
  const [activeFormItemStatus, setActiveFormItemStatus] = useState<boolean>(true);
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

  const [formIdentifier, setFormIdentifier] = useState<FormIdentifierProps>({
   question: '',
   answer: '',
});

  const handleFormItemStatus=(status: boolean, index:number)=>{
      setActiveFormItemStatus(status)
      setActiveItemIndex(index)  
  }

  
  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  
  // const handleFieldChange =(eventChange: ChangeEvent<HTMLInputElement>, index:number, status: string)=>{
  //   const inputData = [...fields]
  //   // const {question, answer} = inputData[index];
  //   if(status==="question"){
  //     inputData[index].question=eventChange.target.value;
  //   }
  //   if(status==="answer"){
  //     inputData[index].answer=eventChange.target.value;
  //   }
  //   setFields(inputData)
  // }
  
//   const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   const { name, value } = e.target;
//   setFormIdentifier((prevState) => ({
//     ...prevState,
//     [name]: value,
//   }));
// };

const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
  const { name, value } = e.target;
  const updatedFields = fields.map((field, i) =>
    i === index ? { ...field, [name]: value } : field
  );
  setFields(updatedFields);
};

  const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };
  
  const handleActiveTitleStatus = (field: boolean) => {
    setActiveFormTitleStatus(field);
  };

  return (
    <form className={styles["generated-form-container"]} onSubmit={handleSubmit}>
      <div className={styles["page-title-container"]}>
        <div className={styles["input-title-heading-container"]}>
          {!activeFormTitleStatus? (
            <>
              <input
              name="title"
                type="text"
                value={title}
                onChange={handleTitleChange}
                className={styles["input-edit"]}              
              />
              <input
              name="description"
                type="text"
                value={description}
                onChange={handleDescriptionChange}
                className={styles["input-edit"]}                
              />
              <div className={styles["title-btns"]}>
                <button className={styles["cancel-btn"]}>Cancel</button>
                <button className={styles["update-btn"]} onClick={()=>handleActiveTitleStatus(true)}>Update</button>
              </div>
            </>
          ) : (
            <>
              <h1 className={styles["page-title-heading"]} onClick={()=>handleActiveTitleStatus(false)}>
                {title}
              </h1>
              <p onClick={()=>handleActiveTitleStatus(false)}>{description}</p>
            </>
          )}
        </div>
      </div>

      {fields.map((item, index) => (
        <div key={index} className={styles["field-input-container"]} onClick={()=>handleFormItemStatus(true, index)}>
          {!activeFormItemStatus && !(activeItemIndex===index) ?
          <>
          <h3 className={styles["page-title-item-heading"]}>{item.question}</h3>
          <p>{item.answer}</p>
          </>:
          <>
              <input
                name="question"
                type="text"
                value={item.question}
                onChange={(e)=>handleFieldChange(e,index)}
                className={styles["input-edit"]}              
              />
              <input
                name="answer"
                type="text"
                value={item.answer}
                onChange={(e)=>handleFieldChange(e,index)}
                className={styles["input-edit"]}                
              />
               <div className={styles["title-btns"]}>
                <button className={styles["cancel-btn"]}>Cancel</button>
                <button className={styles["update-btn"]} onClick={()=>handleFormItemStatus(true,index)}>Update</button>
              </div>
          </>
        }
        </div>
      ))}

      <div className={styles["field-input-container"]}>
        <h3 className={styles["label-title"]}>Label</h3>
        <p className={styles["label-description"]}>Description of the label.</p>
        <input
          placeholder="Your answer"
          type="date"
          required
          className={styles["input-field"]}
        />
        <span className={styles["checkbox-container"]}>
          <input
            type="checkbox"
            required
            className={styles["input-checkbox"]}
          />
          <p>Yes</p>
        </span>
        <textarea
          placeholder="Type your message"
          className={styles["text-area"]}
          required
        ></textarea>
        <select className={styles["select-tag"]}>
          <option value="text">Text</option>
          <option value="select">Select</option>
        </select>
      </div>
      <MultipleChoice />
      <SubmitButton />
    </form>
  );
};



// import React, { useState } from 'react';

// interface FormData {
//   name: string;
//   email: string;
//   age: string;
// }

// const MyForm: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     name: '',
//     email: '',
//     age: '',
//   });

//   // Generic handleChange function
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   // Fields to be rendered
//   const inputFields = [
//     { id: 'name', label: 'Name', type: 'text' },
//     { id: 'email', label: 'Email', type: 'email' },
//     { id: 'age', label: 'Age', type: 'number' },
//   ];

//   return (
//     <form>
//       {inputFields.map((field) => (
//         <div key={field.id}>
//           <label htmlFor={field.id}>{field.label}</label>
//           <input
//             id={field.id}
//             name={field.id}
//             type={field.type}
//             value={formData[field.id as keyof FormData]}
//             onChange={handleChange}
//           />
//         </div>
//       ))}
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default MyForm;
