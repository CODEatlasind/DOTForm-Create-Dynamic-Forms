import { useState } from "react";
import FieldPreview from "../output/FieldPreview";
import PropTypes from "prop-types";

export default function DateTimeInput({ id, type, onSubCompletion }) {
  const [typography, setTypography] = useState({
    label: "",
    smallDescription: "",
  });
  const [attributes, setAttributes] = useState({});

  const handleTypographicalChange = (e) => {
    const { name, value } = e.target;
    setTypography({ ...typography, [name]: value });
  };
  const handleChange = (e) => {
    setAttributes(e.target.value);
  };

  return (
    <>
      <div className="input-field">
        <label>Enter Label</label>
        <br />
        <input
          type="text"
          name="label"
          value={typography.label}
          onChange={handleTypographicalChange}
          placeholder="Enter Field Label First"
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
        <small>Preview</small>
        <FieldPreview
          key="Accordion2"
          id="2"
          type="date"
          typos={typography}
          attr={attributes}
        />
      </section>
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
  );
}

DateTimeInput.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string,
  onSubCompletion: PropTypes.func.isRequired,
};
