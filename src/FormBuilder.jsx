// Built In Components
import { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
// Designed Conmponents
import FormPreview from "./FormPreview";
import FormAccordion from "./FormAccordion";

export default function FormBuilder() {
  const [formFields, setFormFields] = useState([]);

  const handleAddition = (currentId, currentType, currFormStyle) => {
    const typography = currFormStyle.typos;
    const attributes = currFormStyle.attr;
    // if (
    //   (typography.label !== "" && typography.name !== "") ||
    //   currentType == "Line-break"
    // ) {
    const newFormField = {
      id: uuidv4(),
      type: currentType,
      typos: typography,
      attr: attributes,
    };
    setFormFields([...formFields, newFormField]);
    // }
  };

  const handleReset = () => {
    setFormFields([]);
  };
  const handleSave = () => {
    const jsonString = JSON.stringify(formFields);

    // Send the JSON string to the server
    axios
      .post("http://localhost:5000/form-structure", jsonString, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Data sent successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
  };
  console.log("Builder", formFields);
  return (
    <div className="form-container bg-cyan-50 dark:bg-dark-body-blue  flex flex-wrap lg:flex-nowrap justify-center p-4 lg:py-8">
      <FormAccordion onAdd={handleAddition} />

      <FormPreview
        formFields={formFields}
        onSave={handleSave}
        onReset={handleReset}
      />
    </div>
  );
}
