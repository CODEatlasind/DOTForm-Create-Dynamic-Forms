import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import FieldPreview from "../output/FieldPreview";

export default function CheckboxInput({ id, type, onSubCompletion }) {
  const [typography, setTypography] = useState({
    name: "",
    label: "",
    smallDescription: "",
  });

  const [attributes, setCheckedContent] = useState({});

  const handleTypographicalChange = (e) => {
    const { name, value } = e.target;
    setTypography({ ...typography, [name]: value });
  };

  const handleAddCheckboxButton = () => {
    const newId = Object.keys(attributes).length + 1;
    const newCheckbox = {
      id: newId,
      value: "",
      checked: false,
      disabled: false,
    };

    setCheckedContent((prev) => ({
      ...prev,
      [newId]: newCheckbox,
    }));
  };

  // useEffect(() => {
  //   formStyle.typos = typography;
  // }, [ typography]);
  // useEffect(() => {
  //   formStyle.attr = checkedContent;
  // }, [checkedContent]);

  const handleChange = (e, id) => {
    const { name, value, type, checked } = e.target;
    setCheckedContent((prevState) => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        [name]: type === "checkbox" ? checked : value,
      },
    }));
  };

  const checkboxTextField = Object.values(attributes).map((rip) => {
    return (
      <div key={"checkField" + rip.id}>
        <span>{rip.id}:</span>
        <input
          type="text"
          name="value"
          value={rip.value}
          placeholder="Enter the checkbox option"
          onChange={(e) => {
            handleChange(e, rip.id);
          }}
        />{" "}
        <input
          type="checkbox"
          name="checked"
          onClick={(e) => {
            handleChange(e, rip.id);
          }}
        ></input>
        <br />
      </div>
    );
  });

  return (
    <>
      <form className="input-field ">
        <label>
          Enter Field Label<span className="text-red-700">*</span>
        </label>
        <br />
        <input
          type="text"
          name="label"
          value={typography.label}
          placeholder="Enter Field Label First"
          onChange={handleTypographicalChange}
          required
        ></input>
        <br />
        <label>
          Enter Category Name<span className="text-red-700">*</span>
        </label>
        <br />
        <input
          type="text"
          name="name"
          value={typography.name}
          placeholder="Enter Field Category Next"
          onChange={handleTypographicalChange}
          required
        ></input>
        <br />
        <label>Enter Description</label>
        <br />
        <input
          type="text"
          name="smallDescription"
          value={typography.smallDescription}
          placeholder="Enter Field Description"
          onChange={handleTypographicalChange}
        ></input>
        <br />
        {typography.name !== "" && typography.label !== "" && (
          <>
            <button
              onClick={handleAddCheckboxButton}
              className="AddOptionsButton"
              type="button"
            >
              Options
            </button>
            {typography.name != "" && checkboxTextField}
          </>
        )}
        <hr className="mt-2 mb-2 " />
      </form>

      <section className="preview-field">
        {typography.label !== "" && typography.name !== "" ? (
          <>
            <small>Preview</small>
            {attributes && Object.keys(attributes).length > 0 && (
              <FieldPreview
                id="1"
                type="checkbox"
                typos={typography}
                attr={attributes}
              />
            )}
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
          </>
        ) : (
          <small className="text-red-700">Fill Out the Required Fields</small>
        )}
      </section>
    </>
  );
}
CheckboxInput.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string,
  onSubCompletion: PropTypes.func,
};
