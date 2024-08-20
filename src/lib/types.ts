export interface Field {
    question: string;
    status: string;
    answer:string;
    required: boolean;
    imageUrl: string;
    fieldId: string;
  }
 export interface Props {
    id: string;
    formTitle: string;
    formDescription: string;
    fields: Field[];
  }
  

export  interface FormAttributes {
    title: string;
    type: string;
    createdAt: string;
    createdBy: string;
    link: string;
  }

 export interface FormIdentifierProps {
  name: string;
  email: string;
  age: string;
}