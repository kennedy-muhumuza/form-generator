function generateFormId() {
  return Math.floor(Math.random() * 10000000);
}

function generateFieldId() {
  return Math.floor(Math.random() * 100000);
}

export const formData = [
  {
    id: generateFormId(),
    formTitle: "Form title",
    formDescription: "Form description",
    fields: [
      {
        fieldId: generateFieldId(),
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