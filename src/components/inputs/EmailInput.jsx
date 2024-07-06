import { useEffect, useState } from "react";
import FieldPreview from "../output/FieldPreview";
import PropTypes from "prop-types";

export default function EmailInput({ formStyle }) {
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
  useEffect(() => {
    formStyle.typos = typography;
  }, [formStyle, typography]);
  useEffect(() => {
    formStyle.attr = attributes;
  }, [formStyle, attributes]);
  return (
    <>
      <div className="input-field">
        <label>Enter Field Label</label>
        <br />
        <input
          type="text"
          name="label"
          value={typography.label}
          onChange={handleTypographicalChange}
          placeholder="Enter Field Label "
        />
        <br />
        <label>Enter Description</label>
        <br />
        <input
          type="text"
          name="smallDescription"
          value={typography.smallDescription}
          onChange={handleTypographicalChange}
          placeholder="Enter Field desciption"
        />
        <br />
        <hr className="mt-2 mb-2 " />
      </div>
      <section className="preview-field">
        <FieldPreview
          id="3"
          type="email"
          typos={typography}
          attr={attributes}
        />
      </section>
    </>
  );
}
EmailInput.propTypes = {
  formStyle: PropTypes.shape({
    typos: PropTypes.object,
    attr: PropTypes.object,
  }),
};
