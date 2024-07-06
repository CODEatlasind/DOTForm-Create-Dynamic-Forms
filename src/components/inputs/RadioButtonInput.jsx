import { useEffect, useState } from "react";
import FieldPreview from "../output/FieldPreview";
import PropTypes from "prop-types";

export default function RadioButtonInput({ formStyle }) {
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
  useEffect(() => {
    formStyle.typos = typography;
  }, [formStyle, typography]);
  useEffect(() => {
    formStyle.attr = attributes;
  }, [formStyle, attributes]);

  const handleChange = (e, id) => {
    const { name, value, type, checked } = e.target;
    setAttributes((prevState) => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        [name]: type === "radio" ? checked : value,
      },
    }));
  };

  const radioTextField = Object.values(attributes).map((rip) => {
    return (
      <div key={"radioField" + rip.id}>
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
        <input
          type="radio"
          name="clicked"
          onClick={(e) => {
            handleChange(e, rip.id);
          }}
        ></input>
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
      <form className="input-field ">
        <label>
          Enter Field Label<span className="text-red-700">*</span>
        </label>
        <br />
        <input
          type="text"
          name="label"
          value={typography.label}
          placeholder="Enter Label"
          onChange={handleTypographicalChange}
          required
        ></input>
        <br />
        <label>
          Enter Category Name<span className="text-red-700">*</span>
        </label>
        <br />
        <input
          type="text"
          name="name"
          value={typography.name}
          placeholder="Enter Category First"
          onChange={handleTypographicalChange}
          required
        ></input>

        <br />
        <label>Enter Description</label>
        <br />
        <input
          type="text"
          name="smallDescription"
          value={typography.smallDescription}
          placeholder="Enter Description"
          onChange={handleTypographicalChange}
        ></input>
        <br />
        {typography.name !== "" && typography.label !== "" && (
          <>
            <button
              onClick={handleAddRadioButton}
              type="button"
              className="AddOptionsbutton"
            >
              Options
            </button>
            {typography.name != "" && radioTextField}
          </>
        )}
        <hr className="mt-2 mb-2 " />
      </form>

      <section className="preview-field">
        {typography.label !== "" && typography.name !== "" ? (
          <>
            <h3>Preview:</h3>
            {attributes && Object.keys(attributes).length > 0 && (
              <FieldPreview type="radio" typos={typography} attr={attributes} />
            )}
          </>
        ) : (
          <small className="text-red-700">Fill Out the Required Fields</small>
        )}
      </section>
    </>
  );
}
RadioButtonInput.propTypes = {
  formStyle: PropTypes.shape({
    typos: PropTypes.object,
    attr: PropTypes.object,
  }),
};
