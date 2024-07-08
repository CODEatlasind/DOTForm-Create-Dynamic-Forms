import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import FieldPreview from "../output/FieldPreview";

export default function Heading({ id, type, onSubCompletion }) {
  const [typography, setTypography] = useState({
    label: "",
    smallDescription: "",
  });
  const handleTypographyChange = (e) => {
    const { name, value } = e.target;
    setTypography((prevTypography) => ({
      ...prevTypography,
      [name]: value,
    }));
  };
  // useEffect(() => {
  //   formStyle.typos = typography;
  // }, [formStyle, typography]);

  return (
    <>
      <div className="input-field">
        <label>
          Enter Heading<span className="text-red-700">*</span>
        </label>
        <br />
        <input
          type="text"
          name="label"
          value={typography.label} // Controlled input value
          onChange={handleTypographyChange}
          placeholder="Enter Heading First"
          required
        />
        <br />
      </div>
      <section className="preview-field">
        {typography.label ? (
          <>
            <small>Preview</small>
            <FieldPreview id="4" type="heading" typos={typography} />
            <button
              key={"Submit" + Element.id}
              type="submit"
              onClick={() => {
                onSubCompletion(id, type, typography);
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
Heading.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string,
  onSubCompletion: PropTypes.func.isRequired,
};
