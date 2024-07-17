import { useState } from "react";
import FieldPreview from "../output/FieldPreview";
import PropTypes from "prop-types";

export default function NumberInput({ id, type, onSubCompletion }) {
  const [typography, setTypography] = useState({
    label: "",
    smallDescription: "",
  });

  const [attributes, setAttributes] = useState({});

  const handleTypographicalChange = (e) => {
    const { name, value } = e.target;
    setTypography({ ...typography, [name]: value });
  };

  // formStyle.typos = typography;
  // formStyle.attr = attributes;
  return (
    <>
      <div className="input-field">
        <label>
          Enter Label <span className="text-red-700">*</span>
        </label>
        <br />
        <input
          type="text"
          name="label"
          value={typography.label}
          onChange={handleTypographicalChange}
          placeholder="Enter Field Label First"
          required
        />

        <br />
        <label>Enter Description</label>
        <br />
        <input
          type="text"
          name="smallDescription"
          value={typography.smallDescription}
          onChange={handleTypographicalChange}
          placeholder="Enter Field Description"
        />
        <br />
        <hr className="mt-2 mb-2 " />
      </div>
      <section className="preview-field">
        {typography.label !== "" ? (
          <>
            <small>Preview</small>
            <FieldPreview
              key="Accordion6"
              id="6"
              type="number"
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
          <small className="text-red-700">Fill Out the Required Fields</small>
        )}
      </section>
    </>
  );
}
NumberInput.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string,
  onSubCompletion: PropTypes.func.isRequired,
};
