
import { v4 as uuidv4 } from 'uuid';


export const formData = [
  {
    id: uuidv4(),
    formTitle: "Form title",
    formDescription: "Form description",
    fields: [
      {
        fieldId: uuidv4(),
        question: "Question",
        status: "short answer",
        required: true,
        imageUrl: "",
      },
      {
        fieldId: uuidv4(),
        question: "Question",
        status: "short answer",
        required: true,
        imageUrl: "",
      },
      {
        fieldId: uuidv4(),
        question: "Question",
        status: "short answer",
        required: true,
        imageUrl: "",
      },
      {
        fieldId: uuidv4(),
        question: "Question",
        status: "short answer",
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