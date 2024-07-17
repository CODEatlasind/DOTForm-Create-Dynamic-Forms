// Built In Components
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, Modal, Typography } from "@mui/material";
import domtoimage from "dom-to-image";

// Designed Conmponents
import FieldPreview from "./output/FieldPreview";
import RequiredFields from "./config/RequiredFields";

import identityFields from "./config/compulsaryFields";
import SignatureInput from "./inputs/SignatureInput";

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
    const formFetchAPI = `http://localhost:9737/api/forms/${id}`;
    const fetchFormConfig = async () => {
      try {
        const response = await axios.get(formFetchAPI);

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
      const emailAPI = "http://localhost:9737/api/send-email";
      const sendEmail = async () => {
        try {
          const formData = new FormData();
          formData.append("name", infoToSend.name);
          formData.append("email", infoToSend.email);
          formData.append(
            "file",
            infoToSend.file.content,
            infoToSend.file.filename
          );

          // const response = await axios.post(emailAPI, formData, {
          //   headers: {
          //     "Content-Type": "multipart/form-data",
          //   },
          // });
          const response = await axios.post(emailAPI, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          // const response = await fetch(emailAPI, {
          //   method: "POST",
          //   body: formData,
          // });

          const data = await response.json();
          console.log("Response:", data);
        } catch (error) {
          console.error("Error:", error);
        }
      };
      sendEmail();
    }
  }, [infoToSend]);
  if (!formConfig) {
    return <div>Loading...</div>;
  }
  //Validations
  const formValidation = (fieldset) => {
    return fieldset.every((field) => {
      if (field.attr && field.attr.required) {
        const element = formRef.current.querySelector(`[id="${field.id}"]`);
        return element && element.value.trim() !== "";
      }
      return true;
    });
  };
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleGeneratePDF = async () => {
    const input = formRef.current;
    const scale = 2;
    const padding = 5;
    var bodyRect = document.body.getBoundingClientRect(),
      elemRect = input.getBoundingClientRect(),
      offset = elemRect.left - bodyRect.left;
    console.log("offset", offset);
    const { x, y, width, height } = input.getBoundingClientRect();
    // console.log(x, y, width, height);
    const PdfConfig = {
      width: width * scale + padding * 2,
      height: height * scale + padding * 2,
      style: {
        transform: `scale(${scale})`,
        transformOrigin: "top ",
        padding: `${padding}px`,
        backgroundColor: "white", // Ensure background is white
        margin: "auto",
      },
    };

    try {
      const dataUrl = await domtoimage.toPng(input, PdfConfig);

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: [width, height],
      });
      pdf.addImage(dataUrl, "PNG", 0, 0, width, height);
      let pdfBlob = pdf.output("blob");
      console.log(pdfBlob);
      return pdfBlob;
    } catch (error) {
      console.error("Could not generate PDF:", error);
      return null;
    }
  };

  const handleInfoChange = async () => {
    var recpient_name = formRef.current.querySelector(`[id="-2"]`).value;
    var recpient_email = formRef.current.querySelector(`[id="-1"]`).value;
    var submissionName = recpient_name + "_Submission.pdf";
    const pdfBlob = await handleGeneratePDF();

    if (pdfBlob) {
      setInfoToSend({
        name: recpient_name,
        email: recpient_email,
        file: {
          filename: submissionName,
          contentType: "application/pdf",
          content: pdfBlob,
        },
      });
    } else {
      console.error("PDF generation failed");
      alert("Failed to generate PDF. Please try again.");
    }
  };

  const handleSignatureInput = (signImgURL) => {
    setSigned(signImgURL);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const idsValid = formValidation(identityFields); // Validate the formConfig fields
    const isValid = formValidation(formConfig); // Validate the formConfig fields
    const isEmailValid = validateEmail(
      formRef.current.querySelector(`[id="-1"]`).value
    );
    if (idsValid && isValid && signed) {
      if (isEmailValid) {
        await handleInfoChange();
        alert("Response was submitted successfully!!");
      } else {
        alert("Please enter a valid email address");
      }
    } else {
      alert("Please fill out all required fields");
    }
  };

  return (
    <>
      <div className="form-share-container flex flex-row justify-center align-middle  bg-dark-body-blue ">
        <form
          className=" bg-white  page-shared text-center  justify-center"
          ref={formRef}
        >
          <span
            className="associated-title   absolute right-5 top-1 text-xs text-sky-900 "
            id="form-builder-home"
          >
            Powered by{" "}
            <span
              className="text-cyan-500 font-extrabold text-sm"
              id="builder-branding"
            >
              DOTForm
            </span>
          </span>
          <header>
            <h1
              className="preview-header text-center font-semibold text-3xl pb-5"
              id="shared-form-title"
            >
              {heading}
            </h1>
          </header>

          <RequiredFields compulsaryFields={identityFields} />
          <div className="supplemented-fields  ">
            {formConfig &&
              formConfig.map((field) => {
                return (
                  <FieldPreview
                    key={"form-shared" + field.id}
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
      </div>
      <div className="form-control-btn  flex flex-row justify-center">
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-dark-element-hint text-white"
          id="shared-form-submit-button"
        >
          Submit
        </button>
      </div>
    </>
  );
}
