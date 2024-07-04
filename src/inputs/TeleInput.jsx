import { useState } from "react";
import Preview from "../output/FieldPreview";
import PropTypes from "prop-types";
function TeleInput({ formStyle }) {
  const [typography, setTypography] = useState({
    label: "",
    smallDescription: "",
  });
  // const [value, setValue] = useState("");
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
      <label>Enter category name:</label>
      <input
        type="text"
        name="label"
        value={typography.label}
        onChange={handleTypographyChange}
        placeholder="Enter label name first"
      />
      <span className="text-red-700">*</span>
      <br />
      <label>Enter description:</label>
      <input
        type="text"
        name="smallDescription"
        value={typography.smallDescription}
        onChange={handleTypographyChange}
        placeholder="Enter label name first"
      />
      <br />
      <div className={typography.label === "" ? "hidden" : "date-container"}>
        <Preview
          type="tel"
          typos={typography}
          attr={attributes}
          onTypoChange={handleTypographyChange}
          onAttributeChange={handleChange}
        />
      </div>
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
