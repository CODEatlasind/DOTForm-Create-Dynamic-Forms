// Built In Components
import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";

// Designed Conmponents
import identityFields from "./config/compulsaryFields";
import FieldPreview from "./output/FieldPreview";
import RequiredFields from "./config/RequiredFields";
// import generatePDF from "react-to-pdf";
// import PdfConfig from "./config/PdfConfig";

// !Add secure method for url
// !Set Substract method
function FormPreview({ formFields, onReset }) {
  const formRef = useRef();
  const [title, setTitle] = useState("Create Dynamic Forms");
  // const [previewField, setPreviewField] = useState([]);
  const [formId, setFormId] = useState(null);
  const [formLink, setFormLink] = useState(null);

  useEffect(() => {
    document.title = "DOTForm - " + title;
  }, [title]);
  // useEffect(() => {
  //   if (formFields && formFields.length > 0) {
  //     setPreviewField(formFields);
  //   }
  // }, [formFields]);

  useEffect(() => {
    setFormLink(window.location.href + "forms/" + formId);
  }, [formId]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  // const onSub = (currentId, currentType) => {
  //   // const updatedPreviewField = [
  //   // const updatedPreviewField = [
  //   //   ...previewField.slice(0, currentId),
  //   //   ...previewField.slice(currentId + 1),
  //   // ];
  //   // setPreviewField(updatedPreviewField);
  //   const updatedPreviewField = previewField.filter((field) => {
  //     field.id !== currentId;
  //   });

  //   setPreviewField(updatedPreviewField);
  // };
  // console.log("Fields", previewField);

  const handleFormConfigSave = async () => {
    try {
      const response = await axios.post(
        "https://form-access-api-git-main-codeatlasinds-projects.vercel.app/api/forms",
        {
          heading: formRef.current.querySelector('[id="form-title"]').value,
          fields: formFields,
        }
      );

      setFormId(response.data.id);
    } catch (err) {
      console.error("Error while make post request");
    }
  };

  return (
    <div className="form-preview-container relative text-center  ">
      <div className="link-box mx-2 my-2 py-2 px-2 border-cyan-800 rounded bg-white ">
        {formId ? (
          <>
            <Link
              to={"/forms/" + formId}
              className="underline to-blue-500"
              target="_blank"
              rel="noreferrer"
            >
              {formLink}{" "}
            </Link>
            <ContentPasteIcon
              className="cursor-pointer float-end"
              onClick={() => {
                navigator.clipboard.writeText(formLink);
              }}
            />
          </>
        ) : (
          <p className="Alt-Link-text font-semibold">
            Generated link appears here
          </p>
        )}
      </div>
      <form className=" bg-white page  text-center" ref={formRef}>
        <header>
          <input
            className="preview-header text-center font-semibold text-3xl w-64 pb-5"
            onChange={handleTitleChange}
            id="form-title"
            value={title == "Create Dynamic Forms" ? "My Form" : title}
            type="text"
          ></input>
        </header>

        <RequiredFields compulsaryFields={identityFields} />
        {formFields.map((field, idx) => {
          return (
            <>
              <FieldPreview
                key={"field-preview" + field.type + idx}
                id={field.id}
                type={field.type}
                typos={field.typos}
                attr={field.attr}
              />
              {/* <small
                onClick={() => onSub(idx, field.type)}
                className="bg-white rounded-full p-1 cursor-pointer"
              >
                -
              </small> */}
            </>
          );
        })}
      </form>
      <Grid
        container
        rowSpacing={2}
        justifyContent={"center"}
        gap={1}
        margin={(2, 0)}
      >
        <button type="reset" onClick={onReset} id="reset-fields-button">
          Reset
        </button>
        <button
          type="submit"
          onClick={handleFormConfigSave}
          id="save-form-button"
        >
          Save
        </button>
      </Grid>
    </div>
  );
}

FormPreview.propTypes = {
  formFields: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      typos: PropTypes.object,
      attr: PropTypes.object,
    })
  ).isRequired,

  onReset: PropTypes.func.isRequired,
};
export default FormPreview;
