import { useState } from "react";
import FieldPreview from "../output/FieldPreview";
import PropTypes from "prop-types";

function TextFieldInput({ formStyle }) {
  const [typography, setTypography] = useState({
    label: "",
    smallDescription: "",
  });
  const [attributes, setAttributes] = useState({
    required: false,
    minLength: "",
    maxLength: "",
    pattern: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTypography({ ...typography, [name]: value });
  };
  const handleAttributeChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setAttributes({ ...attributes, [name]: val });
  };
  formStyle.typos = typography;
  formStyle.attr = attributes;
  return (
    <>
      <div>
        <label>Enter Label</label>
        <br />
        <input
          type="text"
          name="label"
          value={typography.label}
          onChange={handleChange}
        />
        <br />
        <label>Enter Description</label>
        <br />
        <input
          type="text"
          name="smallDescription"
          value={typography.smallDescription}
          onChange={handleChange}
        />
        <br />

        <label>Required: </label>
        <input
          type="checkbox"
          name="required"
          checked={attributes.required}
          onChange={handleAttributeChange}
        />
        <br />
        <label>Min Length:</label>
        <br />
        <input
          type="number"
          name="minLength"
          value={attributes.minLength}
          onChange={handleAttributeChange}
        />
        <br />
        <label>Max Length:</label>
        <br />
        <input
          type="number"
          name="maxLength"
          value={attributes.maxLength}
          onChange={handleAttributeChange}
        />
        <br />
        {/* ! Pattern to be added */}
        {/* <label>Pattern (Regex):</label>
        <br />
        <input
          type="text"
          name="pattern"
          value={attributes.pattern}
          onChange={handleAttributeChange}
        /> */}
      </div>
      <hr />
      <h3>Preview:</h3>
      <FieldPreview
        key="text-input"
        type="text"
        typos={typography}
        attr={attributes}
        onTypoChange={handleChange}
        onAttributeChange={handleAttributeChange}
      />
    </>
  );
}

export default TextFieldInput;

{
  /* <label>
            <input
              type="radio"
              name="pattern"
              value="^\d{5}(?:[-\s]\d{4})?$"
              onChange={handleChange}
            />
            Postal Code
          </label>
          <label>
            <input
              type="radio"
              name="pattern"
              value="^[a-zA-Z0-9_]+$"
              onChange={handleChange}
            />
            UserName
          </label>
          <label>
            <input
              type="radio"
              name="pattern"
              value="^[a-zA-Z0-9]+$"
              onChange={handleChange}
            />
            Alphanumeric Characters
          </label> */
}
TextFieldInput.propTypes = {
  formStyle: PropTypes.shape({
    typos: PropTypes.object,
    attr: PropTypes.object,
  }),
};
