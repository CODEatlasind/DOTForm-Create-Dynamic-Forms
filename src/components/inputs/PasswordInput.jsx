import { useState } from "react";
import FieldPreview from "../output/FieldPreview";
import PropTypes from "prop-types";

export default function PasswordInput({ id, type, onSubCompletion }) {
  // !CHECK OUT THIS ELEMENT

  const [typography, setTypography] = useState({
    label: "",
    smallDescription: "",
  });

  const [attributes, setAttributes] = useState({});

  const handleTypographyChange = (e) => {
    const { name, value } = e.target;
    setTypography({ ...typography, [name]: value });
  };
  // const handleChange = (e) => {
  //   setAttributes(e.target.value);
  // };
  // formStyle.typos = typography;
  // formStyle.attr = attributes;
  return (
    <>
      <div className="input-field">
        <label>Enter Label</label>
        <br />
        <input
          type="text"
          name="label"
          value={typography.label}
          onChange={handleTypographyChange}
          placeholder="Enter Field Label"
        />
        <br />
        <label>Enter Description</label>
        <br />
        <input
          type="text"
          name="smallDescription"
          value={typography.smallDescription}
          onChange={handleTypographyChange}
          placeholder="Enter Field Description"
        />
        <br />
        <hr className="mt-2 mb-2 " />
      </div>
      <form className="preview-field ">
        <input
          type="text"
          name="email"
          autoComplete="email"
          // style="display:none;"
          className="hidden"
        ></input>
        <input
          type="text"
          name="username"
          autoComplete="username"
          className="hidden"
        ></input>
        <div className="preview-field">
          <small>Preview</small>
          <FieldPreview
            id="7"
            type="password"
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
        </div>
      </form>
    </>
  );
}
PasswordInput.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string,
  onSubCompletion: PropTypes.func.isRequired,
};
