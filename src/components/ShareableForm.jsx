// Built In Components
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useState, useRef, useEffect } from "react";
import identityFields from "./config/compulsaryFields";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Box, Modal, Typography } from "@mui/material";

// Designed Conmponents
import FieldPreview from "./output/FieldPreview";
import RequiredFields from "./config/RequiredFields";
import PdfConfig from "./config/PdfConfig";
import SignatureInput from "./inputs/SignatureInput";

// !Add secure method for url
export default function ShareableForm() {
  const { id } = useParams();
  const [formConfig, setFormConfig] = useState(null);
  const [heading, setHeading] = useState("My Form");
  const [infoToSend, setInfoToSend] = useState({});
  const formRef = useRef();
  const [open, setOpen] = useState(false);
  const [signed, setSigned] = useState();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",

    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  useEffect(() => {
    const fetchFormConfig = async () => {
      try {
        const response = await axios.get(
          `https://form-access-api-git-main-codeatlasinds-projects.vercel.app/api/forms/${id}`
        );

        setHeading(response.data.heading);
        setFormConfig(response.data.fields);
        document.title = "DOTForm - " + response.data.heading;
      } catch (error) {
        console.error("Error fetching form configuration:", error);
      }
    };

    fetchFormConfig();
  }, [id]);
  useEffect(() => {
    if (Object.keys(infoToSend).length > 0) {
      fetch(
        "https://prod2-09.centralindia.logic.azure.com:443/workflows/699cad0be98f4c85b35a39efb19e76d1/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Jn7gfBHAlg6D8YFn3B-huC-sZE-NxjqapRRlVTUzjq4",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(infoToSend),
        }
      )
        .then(async (response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.text().then((text) => {
            return text ? JSON.parse(text) : {};
          });
        })
        .then((data) => {
          console.log("Response:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, [infoToSend]);

  if (!formConfig) {
    return <div>Loading...</div>;
  }
  // console.log(formConfig);

  const formValidation = (fieldset) => {
    return fieldset.every((field) => {
      if (field.attr && field.attr.required) {
        const element = formRef.current.querySelector(`[id="${field.id}"]`);
        return element && element.value.trim() !== "";
      }
      return true;
    });
  };

  const handleGeneratePDF = async () => {
    const input = formRef.current;

    try {
      const canvas = await html2canvas(input, PdfConfig);
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(imgData, "JPEG", 0, 0);
      const pdfDataUri = pdf.output("datauristring").slice(51);

      return pdfDataUri;
    } catch (error) {
      console.error("Could not generate PDF:", error);
      return null;
    }
  };

  const handleInfoChange = async () => {
    var recpient_name = formRef.current.querySelector(`[id="-2"]`).value;
    var recpient_email = formRef.current.querySelector(`[id="-1"]`).value;
    var submissionName = recpient_name + "_Submission";
    const pdfBase64 = await handleGeneratePDF();
    setInfoToSend({
      name: recpient_name,
      email: recpient_email,
      file: {
        filename: submissionName,
        contentType: "application/pdf",
        content: pdfBase64,
      },
    });
  };

  const handleSignatureInput = (signImgURL) => {
    setSigned(signImgURL);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const idsValid = formValidation(formConfig); // Validate the formConfig fields
    if (idsValid) {
      await handleInfoChange();
      alert("Response was submitted successfully!!");
    } else {
      alert("Please fill out all required fields");
    }
  };

  return (
    <div
      className="form-share-container relative  bg-dark-body-blue "
      // ref={formRef}
    >
      <form
        className=" bg-white page-shared m-auto text-center"
        // onSubmit={handleSubmit}
        ref={formRef}
      >
        <Link
          to="/"
          className="associated-title z-10  absolute right-5 top-1 text-xs text-sky-900 "
          id="form-builder-home"
          target="_blank"
          rel="noreferrer"
        >
          Powered by{" "}
          <span
            className="text-cyan-500 font-extrabold text-sm"
            id="builder-branding"
          >
            DOTForm
          </span>
        </Link>
        <header>
          <h1
            className="preview-header text-center font-semibold text-3xl pb-5"
            id="shared-form-title"
            // onChange={handleInput}
            // ref={titleRef}
          >
            {heading}
          </h1>
        </header>

        <RequiredFields compulsaryFields={identityFields} />
        <div className="supplemented-fields  ">
          {formConfig &&
            formConfig.map((field, idx) => {
              return (
                <FieldPreview
                  key={"form-shared" + field.type + idx}
                  id={field.id}
                  type={field.type}
                  typos={field.typos}
                  attr={field.attr}
                />
              );
            })}
        </div>
        <div className="signature-container">
          <Modal
            keepMounted
            open={open}
            onClose={handleClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
          >
            <Box sx={style}>
              <Typography
                id="keep-mounted-modal-title"
                variant="h6"
                component="h2"
              >
                E-Signature Field
              </Typography>
              <SignatureInput onSignature={handleSignatureInput} />
              <p
                className="scale-2 mt-2 cursor-pointer font-extrabold text-dark-sec-blue"
                onClick={handleClose}
              >
                Done
              </p>
            </Box>
          </Modal>
          {signed && (
            <img
              src={signed}
              alt="e-Sign Will Appear Here"
              id="e-Signatute"
              className="object-scale-down absolute bottom-2 right-2"
              style={{ scale: "0.35" }}
            ></img>
          )}
          {!signed && (
            <button
              type="button"
              className="toggle-sign-modal absolute bottom-1 right-2 scale-75 hover:scale-90"
              onClick={handleOpen}
            >
              Sign Here!!
            </button>
          )}
        </div>
      </form>
      <div className="form-control-btn relative p-2 justify-center flex flex-wrap gap-6 ">
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-dark-element-hint text-white"
          id="shared-form-submit-button"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
