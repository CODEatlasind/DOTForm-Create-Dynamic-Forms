// Built In Components
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
// Designed Conmponents
import FormPreview from "./FormPreview";
import FormAccordion from "./FormAccordion";

export default function FormBuilder() {
  const [formFields, setFormFields] = useState([]);

  const handleAddition = (currentId, currentType, fetchedTypo, fetchedAttr) => {
    const newFormField = {
      id: uuidv4(),
      type: currentType,
      typos: fetchedTypo,
      attr: fetchedAttr,
    };
    setFormFields([...formFields, newFormField]);
  };

  const handleReset = () => {
    setFormFields([]);
    window.location.reload(true);
  };
  return (
    <div className="form-container bg-cyan-50 dark:bg-dark-body-blue  flex flex-wrap lg:flex-nowrap justify-center p-4 lg:py-8">
      <FormAccordion onAdd={handleAddition} />

      <FormPreview formFields={formFields} onReset={handleReset} />
    </div>
  );
}
