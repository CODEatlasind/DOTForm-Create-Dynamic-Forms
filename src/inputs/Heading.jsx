import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import FieldPreview from "../output/FieldPreview";

export default function Heading({ formStyle }) {
  const [typography, setTypography] = useState({
    label: "Sub-Heading",
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
      <form className="input-field">
        <label>Enter Header</label>
        <br />
        <input
          type="text"
          name="label"
          value={typography.label} // Controlled input value
          onChange={handleTypographyChange}
        />
        <br />
      </form>
      <section className="preview-field">
        <p>Preview</p>
        <FieldPreview type="heading" typos={typography} />
      </section>
    </>
  );
}
Heading.propTypes = {
  formStyle: PropTypes.shape({
    typos: PropTypes.object,
    attr: PropTypes.object,
  }),
};
