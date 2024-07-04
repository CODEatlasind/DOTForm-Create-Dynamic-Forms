import { useState } from "react";
import FieldPreview from "../output/FieldPreview";

export default function RadioButtonInput() {
  const [typography, setTypography] = useState({
    name: "",
    label: "",
    smallDescription: "",
  });

  const [attributes, setAttributes] = useState({});

  const handleTypographicalChange = (e) => {
    const { name, value } = e.target;
    setTypography({ ...typography, [name]: value });
  };
  const handleAddRadioButton = () => {
    const newId = Object.keys(attributes).length + 1;
    const newRadio = {
      id: newId,
      value: "",
    };
    setAttributes((prev) => ({
      ...prev,
      [newId]: newRadio,
    }));
  };
  // const handleAddRadioButton = () => {
  //   let cpyattributes = [...attributes];
  //   cpyattributes.push({ id: attributes.length + 1, value: "" });
  //   setAttributes(cpyattributes);
  // };

  // const handleChange = (e, id) => {
  //   const { value } = e.target;
  //   console.log(e.target);
  //   const updatedattributes = attributes.map((item) =>
  //     item.id === id ? { ...item, value: value } : item
  //   );
  //   setAttributes(updatedattributes);
  // };

  const handleChange = (e, id) => {
    const { name, value, type, checked } = e.target;
    setAttributes((prevState) => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        [name]: type === "checkbox" ? checked : value,
      },
    }));
  };

  const radioTextField = Object.values(attributes).map((rip) => {
    return (
      <div key={rip.id}>
        <span>{rip.id}:</span>
        <input
          type="text"
          name="value"
          value={rip.value}
          placeholder="Enter the radio option"
          onChange={(e) => {
            handleChange(e, rip.id);
          }}
        />
        <br />
      </div>
    );
  });
  // const radioList = attributes.map((rip) => {
  //   return (
  //     <span key={rip.id}>
  //       <input
  //         type="radio"
  //         placeholder="Enter the radio option"
  //         value={rip.value}
  //         name={typography.name}
  //       />
  //       <span>{rip.value}</span>
  //     </span>
  //   );
  // });

  return (
    <>
      <form>
        <label>Name the category:</label>
        <br />
        <input
          type="text"
          name="name"
          value={typography.name}
          placeholder="Enter the category name first"
          onChange={handleTypographicalChange}
        ></input>

        <br />
        <label>Label:</label>
        <br />
        <input
          type="text"
          name="label"
          value={typography.label}
          placeholder="Enter the category name first"
          onChange={handleTypographicalChange}
        ></input>
        <br />
        <label>Description:</label>
        <br />
        <input
          type="text"
          name="smallDescription"
          value={typography.smallDescription}
          placeholder="Enter a description"
          onChange={handleTypographicalChange}
        ></input>
        <br />
      </form>
      <section>
        <button
          onClick={handleAddRadioButton}
          className={typography.label != "" ? "Addbutton" : "hidden"}
        >
          Add Options
        </button>
      </section>
      <br />
      {typography.name != "" ? radioTextField : null}

      <div
        className={
          typography.name != ""
            ? "preview-Container"
            : "preview-Container hidden"
        }
      >
        <h3>Preview:</h3>
        <FieldPreview type="radio" typos={typography} attr={attributes} />
      </div>
    </>
  );
}
