import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import FieldPreview from "../output/FieldPreview";

export default function Heading({ formStyle }) {
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
  useEffect(() => {
    formStyle.typos = typography;
  }, [formStyle, typography]);

  return (
    <>
      <div className="input-field">
        <label>Enter a Heading</label>
        <br />
        <input
          type="text"
          name="label"
          value={typography.label} // Controlled input value
          onChange={handleTypographyChange}
        />
        <br />
      </div>
      {typography.label && (
        <section className="preview-field">
          <p>Preview</p>
          <FieldPreview id="4" type="heading" typos={typography} />
        </section>
      )}
    </>
  );
}
Heading.propTypes = {
  formStyle: PropTypes.shape({
    typos: PropTypes.object,
    attr: PropTypes.object,
  }),
};
