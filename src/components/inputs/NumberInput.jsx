import { useState } from "react";
import FieldPreview from "../output/FieldPreview";
import PropTypes from "prop-types";

export default function NumberInput({ formStyle }) {
  const [typography, setTypography] = useState({
    label: "",
    smallDescription: "",
  });

  const [attributes, setAttributes] = useState({});

  const handleTypographicalChange = (e) => {
    const { name, value } = e.target;
    setTypography({ ...typography, [name]: value });
  };

  formStyle.typos = typography;
  formStyle.attr = attributes;
  return (
    <>
      <form className="input-field">
        <label>
          Enter Field Label <span className="text-red-700">*</span>:
        </label>
        <br />
        <input
          type="text"
          name="label"
          value={typography.label}
          onChange={handleTypographicalChange}
          placeholder="Enter Field Label First"
        />

        <br />
        <label>Enter Field Description:</label>
        <br />
        <input
          type="text"
          name="smallDescription"
          value={typography.smallDescription}
          onChange={handleTypographicalChange}
          placeholder="Enter Description"
        />
        <br />
        <hr className="mt-2 mb-2 " />
      </form>
      <section className="preview-field">
        {typography.label !== "" ? (
          <>
            <h3>Preview</h3>
            <FieldPreview type="number" typos={typography} attr={attributes} />
          </>
        ) : (
          <small className="text-red-700">Fill Out the Required Fields</small>
        )}
      </section>

      <br />
    </>
  );
}
NumberInput.propTypes = {
  formStyle: PropTypes.shape({
    typos: PropTypes.object,
    attr: PropTypes.object,
  }),
};
