import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { AppLayout } from "./pages/applayout/AppLayout";
import { HomePage } from "./pages/homepage/HomePage";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { GeneratedForm } from "./pages/generated-forms/GeneratedForm";
import { AddField } from "./pages/add-field/AddField";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {true && (
            <Route element={<AppLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="/add-field" element={<AddField />} />
              <Route path="/create-form" element={<GeneratedForm />} />
              <Route path="*" element={<Dashboard />} />
            </Route>
          )}
          {!true && <Route path="*" element={<GeneratedForm />} />}
          {!true && <Route path="*" element={<AddField />} />}
          {!true && (
            <>
              <Route index element={<HomePage />} />
              <Route path="*" element={<HomePage />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// import React, { useState } from "react";

// function Dashboard() {
//   const [formFields, setFormFields] = useState([]);
//   const [pageTitle, setPageTitle] = useState("");

//   const addFormField = () => {
//     setFormFields([...formFields, { label: "", type: "text" }]);
//   };

//   const handleFieldChange = (index, key, value) => {
//     const updatedFields = [...formFields];
//     updatedFields[index][key] = value;
//     setFormFields(updatedFields);
//   };

//   const submitForm = () => {
//     // Send formFields and pageTitle to backend for processing
//     console.log("Form submitted:", { pageTitle, formFields });
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter page title"
//         value={pageTitle}
//         onChange={(e) => setPageTitle(e.target.value)}
//       />
//       <button onClick={addFormField}>Add Form Field</button>
//       {formFields.map((field, index) => (
//         <div key={index}>
//           <input
//             type="text"
//             placeholder="Enter field label"
//             value={field.label}
//             onChange={(e) => handleFieldChange(index, "label", e.target.value)}
//           />
//           <select
//             value={field.type}
//             onChange={(e) => handleFieldChange(index, "type", e.target.value)}
//           >
//             <option value="text">Text</option>
//             <option value="select">Select</option>
//             {/* Add more options for other input types */}
//           </select>
//         </div>
//       ))}
//       <button onClick={submitForm}>Submit</button>
//     </div>
//   );
// }

// export default Dashboard;

// ---------------------------------------------------------new---------------
// import React, { useState } from "react";

// const AdminDashboard: React.FC = () => {
//   const [formData, setFormData] = useState<any[]>([]);

//   const addFormField = () => {
//     setFormData([...formData, { label: "", type: "" }]);
//   };

//   const handleFieldChange = (index: number, key: string, value: string) => {
//     const updatedFormData = [...formData];
//     updatedFormData[index][key] = value;
//     setFormData(updatedFormData);
//   };

//   return (
//     <div>
//       <h2>Admin Dashboard</h2>
//       <button onClick={addFormField}>Add Form Field</button>
//       {formData.map((field, index) => (
//         <div key={index}>
//           <input
//             type="text"
//             placeholder="Label"
//             value={field.label}
//             onChange={(e) => handleFieldChange(index, "label", e.target.value)}
//           />
//           <select
//             value={field.type}
//             onChange={(e) => handleFieldChange(index, "type", e.target.value)}
//           >
//             <option value="">Select Field Type</option>
//             <option value="text">Text</option>
//             <option value="number">Number</option>
//             {/* Add more options as needed */}
//           </select>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AdminDashboard;

// ---------------------------------------------------------------where users can fill in the generated form------------
// import React from 'react';

// interface FormField {
//   label: string;
//   type: string;
// }

// interface FormGeneratorProps {
//   formData: FormField[];
// }

// const FormGenerator: React.FC<FormGeneratorProps> = ({ formData }) => {
//   return (
//     <form>
//       {formData.map((field, index) => (
//         <div key={index}>
//           <label>{field.label}</label>
//           <input type={field.type} />
//         </div>
//       ))}
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default FormGenerator;

// -------------------------------------------------------------how to use ids-------------
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// interface FormParams {
//   id: string;
// }

// interface FormField {
//   label: string;
//   type: string;
// }

// const FormPage: React.FC = () => {
//   const { id } = useParams<FormParams>();
//   const [formData, setFormData] = useState<FormField[]>([]);

//   useEffect(() => {
//     const fetchFormData = async () => {
//       try {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch form data');
//         }
//         const data = await response.json();
//         // Mock form data from JSONPlaceholder response
//         const mockFormData: FormField[] = [
//           { label: 'Title', type: 'text' },
//           { label: 'Body', type: 'text' },
//         ];
//         setFormData(mockFormData);
//       } catch (error) {
//         console.error('Error fetching form data:', error);
//       }
//     };

//     fetchFormData();
//   }, [id]);

//   return (
//     <div>
//       <h2>Form Page</h2>
//       {/* Render FormGenerator component with fetched form data */}
//       {/* <FormGenerator formData={formData} /> */}
//     </div>
//   );
// };

// export default FormPage;
