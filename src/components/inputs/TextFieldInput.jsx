import { useState } from "react";
import FieldPreview from "../output/FieldPreview";
import PropTypes from "prop-types";

function TextFieldInput({ id, type, onSubCompletion }) {
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
  // formStyle.typos = typography;
  // formStyle.attr = attributes;
  return (
    <>
      <div>
        <label>
          Enter Label<span className="text-red-700">*</span>
        </label>
        <br />
        <input
          type="text"
          name="label"
          value={typography.label}
          placeholder="Enter Field Label First"
          onChange={handleChange}
          required
        />
        <br />
        <label>Enter Description</label>
        <br />
        <input
          type="text"
          name="smallDescription"
          value={typography.smallDescription}
          onChange={handleChange}
          placeholder="Enter Field Description"
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
          placeholder="Minimum Text Limit"
        />
        <br />
        <label>Max Length:</label>
        <br />
        <input
          type="number"
          name="maxLength"
          value={attributes.maxLength}
          onChange={handleAttributeChange}
          placeholder="Maximum Text Limit"
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
      <hr className="mt-2 mb-2 " />
      <section className="preview-field">
        {typography.label !== "" ? (
          <>
            <small>Preview</small>
            <FieldPreview
              key="Accordion10"
              id="10"
              type="text"
              typos={typography}
              attr={attributes}
            />
            <button
              key={"Submit" + Element.id}
              type="button"
              onClick={() => {
                onSubCompletion(id, type, typography, attributes);
              }}
              className="btn btn-add "
            >
              Add
            </button>
          </>
        ) : (
          <small className="text-red-700">Fill Out the Required Field</small>
        )}
      </section>
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
  id: PropTypes.number,
  type: PropTypes.string,
  onSubCompletion: PropTypes.func.isRequired,
};
