
import { v4 as uuidv4 } from 'uuid';


export const formData = [
  {
    id: uuidv4(),
    formTitle: "Form title",
    formDescription: "Form description",
    fields: [
      {
        fieldId: uuidv4(),
        question: "What is your level of study?",
        status: "short answer",
        answer:"",
        required: true,
        imageUrl: "",
      },
      {
        fieldId: uuidv4(),
        question: "What course did you do?",
        status: "short answer",
        answer:"",
        required: true,
        imageUrl: "",
      },
      {
        fieldId: uuidv4(),
        question: "Why do you want a placement at our company?",
        status: "short answer",
        answer:"",
        required: true,
        imageUrl: "",
      },
      {
        fieldId: uuidv4(),
        question: "Do you have projects you've worked on lately? If so, which ones?",
        status: "short answer",
        answer:"",
        required: true,
        imageUrl: "",
      }    
    ]
  }, 
  
];


// pageTitle: "Vaccine Registration",
//     pageDescription: "",
//     fields: [
//       {
//         label: "First name",
//         required: true,
//         labelDescription: "",
//         fieldTag: "input",
//         fieldType: "",
//         multipleChoice: [],
//         imgUrl: "",
//         linkId: "",
//       },
//     ],