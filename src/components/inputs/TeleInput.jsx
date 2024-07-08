import { useState } from "react";
import PropTypes from "prop-types";

import FieldPreview from "../output/FieldPreview";
function TeleInput({ id, type, onSubCompletion }) {
  const [typography, setTypography] = useState({
    label: "",
    smallDescription: "",
  });

  const [attributes, setAttributes] = useState({});

  const handleTypographyChange = (e) => {
    const { name, value } = e.target;
    setTypography({ ...typography, [name]: value });
  };
  // formStyle.typos = typography;
  // formStyle.attr = attributes;
  const handleChange = (e) => {
    setAttributes(e.target.value);
  };

  return (
    <>
      <div className="input-field ">
        <label>
          Enter Label<span className="text-red-700">*</span>
        </label>
        <br />
        <input
          type="text"
          name="label"
          value={typography.label}
          onChange={handleTypographyChange}
          placeholder="Enter Field Label First"
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
        {/* <br /> */}
        <hr className="mt-2 mb-2 " />
      </div>
      <section className="preview-field">
        <small>Preview</small>
        <FieldPreview id="9" type="tel" typos={typography} attr={attributes} />
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
      </section>
    </>
  );
}
TeleInput.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string,
  onSubCompletion: PropTypes.func.isRequired,
};
export default TeleInput;
