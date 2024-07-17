import { useEffect, useState } from "react";
import FieldPreview from "../output/FieldPreview";
import PropTypes from "prop-types";

export default function EmailInput({ id, type, onSubCompletion }) {
  const [attributes, setAttributes] = useState({});
  const [typography, setTypography] = useState({
    label: "",
    smallDescription: "",
  });

  const handleTypographicalChange = (e) => {
    const { name, value } = e.target;
    setTypography({ ...typography, [name]: value });
  };
  const handleChange = (e) => {
    setAttributes(e.target.value);
  };
  // useEffect(() => {
  //   formStyle.typos = typography;
  // }, [formStyle, typography]);
  // useEffect(() => {
  //   formStyle.attr = attributes;
  // }, [formStyle, attributes]);
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
          placeholder="Enter Field Desciption"
        />
        <br />
        <hr className="mt-2 mb-2 " />
      </div>
      <section className="preview-field">
        <small>Preview</small>
        <FieldPreview
          key="Accordion3"
          id="3"
          type="email"
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
      </section>
    </>
  );
}
EmailInput.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string,
  onSubCompletion: PropTypes.func.isRequired,
};
