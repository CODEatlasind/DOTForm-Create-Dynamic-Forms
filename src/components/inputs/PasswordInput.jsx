import { useState } from "react";
import FieldPreview from "../output/FieldPreview";
import PropTypes from "prop-types";

export default function PasswordInput({ formStyle }) {
  // !CHECK OUT THIS ELEMENT

  const [typography, setTypography] = useState({
    label: "",
    smallDescription: "",
  });

  const [attributes, setAttributes] = useState({});

  const handleTypographyChange = (e) => {
    const { name, value } = e.target;
    setTypography({ ...typography, [name]: value });
  };
  // const handleChange = (e) => {
  //   setAttributes(e.target.value);
  // };
  formStyle.typos = typography;
  formStyle.attr = attributes;
  return (
    <>
      <form className="input-field">
        <label>
          Enter Label Name
          <span className="text-red-700">*</span>
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
          placeholder=""
        />
        <br />
        <hr className="mt-2 mb-2 " />
      </form>
      <form className="preview-field ">
        <input
          type="text"
          name="email"
          autoComplete="email"
          // style="display:none;"
          className="hidden"
        ></input>
        <input
          type="text"
          name="username"
          autoComplete="username"
          className="hidden"
        ></input>

        <FieldPreview type="password" typos={typography} attr={attributes} />
      </form>
      <br />
    </>
  );
}
PasswordInput.propTypes = {
  formStyle: PropTypes.shape({
    typos: PropTypes.object,
    attr: PropTypes.object,
  }),
};
