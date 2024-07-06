import { useEffect, useState } from "react";
import FieldPreview from "../output/FieldPreview";
import PropTypes from "prop-types";

var today = new Date();
var yyyy = today.getFullYear();
var mm = today.getMonth() + 1;
var dd = today.getDate();
if (mm < 10) {
  mm = "0" + mm;
}
if (dd < 10) {
  dd = "0" + dd;
}
var formattedDate = yyyy + "-" + mm + "-" + dd;
export default function DateTimeInput({ formStyle }) {
  const [typography, setTypography] = useState({
    label: "",
    smallDescription: "",
  });
  const [attributes, setAttributes] = useState({ date: formattedDate });

  // Format the date as YYYY-MM-DD

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
        <label>Enter Label</label>
        <br />
        <input
          type="text"
          name="label"
          value={typography.label}
          onChange={handleTypographicalChange}
          placeholder="Enter label name first"
        />
        <br />
        <label>Enter Description</label>
        <input
          type="text"
          name="smallDescription"
          value={typography.smallDescription}
          onChange={handleTypographicalChange}
          placeholder="Enter label name first"
        />
        <br />
        <hr className="mt-2 mb-2 " />
      </div>
      <section className="preview-field">
        <h3 className="">Preview</h3>
        <FieldPreview
          id={"2"}
          type="date"
          typos={typography}
          attr={attributes}
          onTypoChange={handleTypographicalChange}
          onAttributeChange={handleChange}
        />
      </section>
    </>
  );
}

DateTimeInput.propTypes = {
  formStyle: PropTypes.shape({
    typos: PropTypes.object,
    attr: PropTypes.object,
  }),
};
