import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { AppLayout } from "./pages/applayout/AppLayout";
import { HomePage } from "./pages/homepage/HomePage";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { GeneratedForm } from "./pages/generated-forms/GeneratedForm";
import { useState } from "react";
// import { AddField } from "./pages/add-field/AddField";

function App() {

 

  return (
    <>
      <BrowserRouter>
        <Routes>
          {true && (
            <Route element={<AppLayout />}>
              <Route index element={<Dashboard />} />
              {/* <Route path="/add-field" element={<AddField />} /> */}
              <Route path="/create-form" element={<GeneratedForm />} />
              <Route path="*" element={<Dashboard />} />
            </Route>
          )}
          {!true && <Route path="*" element={<GeneratedForm />} />}
          {/* {!true && <Route path="*" element={<AddField />} />} */}
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
