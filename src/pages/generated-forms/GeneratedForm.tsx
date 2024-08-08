import { MultipleChoice } from "../../components/form-sections/MultipleChoice";
import { SubmitButton } from "../../components/form-sections/SubmitButton";
import styles from "./GeneratedForm.module.css";
import { formData } from "../../data/form-data";
import React, { useState, ChangeEvent, FormEvent } from 'react';

interface Field {
  question: string;
  status: string;
  required: boolean;
  imageUrl: string;
  fieldId: string;
}

interface Props {
  id: string;
  formTitle: string;
  formDescription: string;
  fields: Field[];
}



export const GeneratedForm: React.FC<Props[]> = () => {
  const [title, setTitle] = useState<string>(formData[0].formTitle);
  const [description, setDescription] = useState<string>(formData[0].formDescription);
  const [forms, setForms] = useState<Props[]>(formData);
  const [fields, setFields] = useState<Field[]>(formData[0].fields);
  const [activeFormTitleStatus, setActiveFormTitleStatus] = useState<boolean>(true);
  

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
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
                type="text"
                value={title}
                onChange={handleTitleChange}
                className={styles["input-edit"]}              
              />
              <input
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

      {fields.map((item) => (
        <div key={item.fieldId} className={styles["field-input-container"]}>
          <h1 className={styles["page-title-heading"]}>{item.question}</h1>
          <p>All the submissions of this form will be appended in a table for review.</p>
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




// import { MultipleChoice } from "../../components/form-sections/MultipleChoice";
// import { SubmitButton } from "../../components/form-sections/SubmitButton";
// import styles from "./GeneratedForm.module.css";
// import { formData } from "../../data/form-data";
// import React, { useState, ChangeEvent, FormEvent } from 'react'


// interface Field{
//   question: string;
//   status: string;
//   required: boolean;
//   imageUrl: string;
//   fieldId: number;
// }
// interface Props {
//   id: number;
//   formTitle: string;
//   formDescription: string;
//   fields: Field[];
// }

// interface Blur {
//   titleBlur: boolean;
//   descriptionBlur: boolean
// }

// interface Focus {
//   titleFocus: boolean;
//   descriptionFocus: boolean;
// }

// // export const GeneratedForm: React.FC<Props[]> = ({id, formTitle, formDescription, fields}) => {
//   export const GeneratedForm: React.FC<Props[]> = () => {
//   const [title, setTitle]=useState<string>(formData[0].formTitle)
//   const [description, setDescription]=useState<string>(formData[0].formDescription)
//   const [forms, setForms]=useState<Props[]>(formData)
//   const [fields, setFields]=useState<Field[]>(formData[0].fields)
//   const [activeField, setActiveField]=useState<string>("")
//   // const [titleFieldBlur, setTitleFieldBlur]=useState<boolean>(true)
//   // const [descriptionBlur, setDescriptionFieldBlur]=useState<boolean>(true)
//   const [fieldBlur, setFieldBlur]=useState<Blur>({titleBlur: true, descriptionBlur: true})
//   const [fieldFocus, setFieldFocus]=useState<Focus>({titleFocus: true, descriptionFocus: true})


//   const handleActiveField=(field:string)=>{
//     setActiveField(field)
//     }

//     // onClick={()=>handleActiveField("")}

//   const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
//     setTitle(event.target.value);
//   };

//   const handleContainerActiveField=(field:string)=>{

//     setActiveField(field)
//   }

//   const activateInputs=()=>{
//     setFieldBlur({titleBlur: false, descriptionBlur: false})
//   }

// const titleBlurStatus = fieldFocus.titleFocus? false: true;
  

// const descriptionBlurStatus = fieldFocus.descriptionFocus? false: true ;


// const focusTitle =()=>{
//   setFieldBlur({titleBlur: false, descriptionBlur: true})
//   setFieldFocus({titleFocus: true, descriptionFocus: false})
//   console.log("TITLE FOCUSED", fieldFocus.titleFocus )
//   console.log("TITLE BLURRED", fieldBlur.titleBlur)
// }

// const focusDescription =()=>{
//   setFieldBlur({titleBlur: true, descriptionBlur: false})
//   setFieldFocus({titleFocus: false, descriptionFocus: true})
//   console.log("DESCRIPTION FOCUSED", fieldFocus.descriptionFocus)
//   console.log("DESCRIPTION BLURRED", fieldBlur.descriptionBlur)
// }

//   const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
//     setDescription(event.target.value);
//   };
//   const handleSubmit = (event: FormEvent) => {
//     event.preventDefault(); 
//   };
  
//   return ( 
//     <form className={styles["generated-form-container"]} onSubmit={handleSubmit} > 
      
//       <div className={styles["page-title-container"]} >
//         <div className={styles["input-title-heading-container"]}>
//         {/* {activeField===`title-${formData[0].id}`? */}
//         {/* {!titleFieldBlur || !descriptionBlur? */}
//       {!fieldBlur.titleBlur || !fieldBlur.descriptionBlur?
//         <>
//       <input
//         type="text"
//         value={title}
//         onChange={handleTitleChange}
//         className={styles["input-edit"]}
//         // onFocus={()=>setTitleFieldBlur(false)}
//         onFocus={()=>focusTitle()}
//         onBlur={()=>setFieldBlur({titleBlur: true, descriptionBlur: descriptionBlurStatus})}        
//         />

//      <input
//         type="text"
//         value={description}
//         onChange={handleDescriptionChange}
//         className={styles["input-edit"]}
//         onFocus={()=>focusDescription()}
//         onBlur={()=>setFieldBlur({titleBlur: titleBlurStatus, descriptionBlur: true})}
//         />
//         </>:
// <> <h1 className={styles["page-title-heading"]} onClick={()=>activateInputs()}>{title}</h1>
// {/* <> <h1 className={styles["page-title-heading"]} onClick={()=>handleActiveField(`title-${formData[0].id}`)}>{title}</h1> */}
//       <p onClick={()=>activateInputs()}>
//         {description}
//       </p>   
//       </>
      
//     }
//     </div>

//       </div>

     
//       {fields.map((item) => (<div key={item.fieldId} className={styles["field-input-container"]}>
      
//       <h1 className={styles["page-title-heading"]}>{item.question}</h1>
//       <p>
//         All the submissions of this form will be appended in a table for review.
//       </p>
//     </div>        
//     ))
//       }

//       <div className={styles["field-input-container"]}>
//         <h3 className={styles["label-title"]}>Label</h3>
//         <p className={styles["label-description"]}>Description of the label.</p>
//         {true && (
//           <input
//         // name={`field-${item.fieldId}-date`}
//             placeholder={`Your answer`}
//             type="date"
//             required
//             className={styles["input-field"]}
//           />
//         )}
//         {true && (
//           <span className={styles["checkbox-container"]}>
//             <input
//               type="checkbox"
//               required
//               className={styles["input-checkbox"]}
//             />
//             <p>Yes</p>
//           </span>
//         )}
//         {true && (
//           <textarea
//             placeholder="Type your message"
//             className={styles["text-area"]}
//             required
//           ></textarea>
//         )}
//         {true && (
//           <select
//             className={styles["select-tag"]}
//             // value={field.type}
//             // onChange={(e) => handleFieldChange(index, "type", e.target.value)}
//           >
//             <option value="text">Text</option>
//             <option value="select">Select</option>
//           </select>
//         )}
//       </div>
//       <MultipleChoice />
//       <SubmitButton />
//     </form>
//   );
// };
 