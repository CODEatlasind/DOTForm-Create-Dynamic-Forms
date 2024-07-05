import { useState } from "react";
import Preview from "../output/FieldPreview";
import PropTypes from "prop-types";
import FieldPreview from "../output/FieldPreview";
function TeleInput({ formStyle }) {
  const [typography, setTypography] = useState({
    label: "",
    smallDescription: "",
  });

  const [attributes, setAttributes] = useState({});

  const handleTypographyChange = (e) => {
    const { name, value } = e.target;
    setTypography({ ...typography, [name]: value });
  };
  formStyle.typos = typography;
  formStyle.attr = attributes;
  const handleChange = (e) => {
    setAttributes(e.target.value);
  };

  return (
    <>
      <form className="input-field ">
        <label>
          Enter Fiel label<span className="text-red-700">*</span>
        </label>
        <br />
        <input
          type="text"
          name="label"
          value={typography.label}
          onChange={handleTypographyChange}
          placeholder="Enter label name first"
        />
        <br />
        <label>Enter Description</label>
        <br />
        <input
          type="text"
          name="smallDescription"
          value={typography.smallDescription}
          onChange={handleTypographyChange}
          placeholder="Enter label name first"
        />
        <br />
        <hr className="mt-2 mb-2 " />
      </form>
      <section className="date-container">
        <FieldPreview id="9" type="tel" typos={typography} attr={attributes} />
      </section>
      <br />
    </>
  );
}
TeleInput.propTypes = {
  formStyle: PropTypes.shape({
    typos: PropTypes.object,
    attr: PropTypes.object,
  }),
};
export default TeleInput;
