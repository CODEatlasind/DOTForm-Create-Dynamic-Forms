// Built In Components
import { useState } from "react";
// Third Party Components
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import PropTypes from "prop-types";
// Designed Conmponents
import fieldConfig from "./config/fieldConfig";

function FormAccordion({ onAdd }) {
  const [showAcc, setShowAcc] = useState(true);

  return (
    <div className="form-option-accordion ml-4 mr-4 text-center lg:text-justify  max-w-full lg:max-w-72">
      <h1 className="flex m-1 lg:mb-0 lg:pb-6 lg:pt-0 gap-2 items-center text-center justify-center">
        <button
          type="button"
          onClick={() => {
            setShowAcc(!showAcc);
          }}
          className="btn btn-nav lg:hidden rounded-full m-1 "
        >
          ⇊
        </button>
        <span className="form-builer-title  font-bold text-4xl text-sky-900 dark:text-cyan-100">
          DOTForm
        </span>
      </h1>

      <div
        className={`form-accordion   ${
          showAcc ? "h-0 opacity-0  " : "  h-fit opacity-100"
        }  
        lg:h-fit lg:opacity-100 m-1  pt-1 pb-1 px-1 rounded-md bg-dark-sec-blue z-50  `}
      >
        <h1 className="accordion-title text-center font-semibold text-white uppercase">
          Accordion Menu
        </h1>
        {fieldConfig &&
          fieldConfig.length > 0 &&
          fieldConfig.map((Element) => {
            return (
              <Accordion
                className="choice-container z-2 lg:absolute lg:top-2 "
                key={"Options" + Element.id}
              >
                <AccordionSummary
                  key={"Summary" + Element.id}
                  expandIcon={<ArrowDropDown />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                  className="field-selector uppercase"
                >
                  <Typography key={Element.id}>{Element.name}</Typography>
                </AccordionSummary>
                <AccordionDetails
                  className="text-center "
                  key={"DD" + Element.id}
                >
                  {
                    <Element.component
                      key={"Component" + Element.id}
                      id={Element.id}
                      type={Element.type}
                      onSubCompletion={onAdd}
                    />
                  }

                  {/* <button
                    key={"Submit" + Element.id}
                    type="submit"
                    onClick={() => {
                      if (
                        Element.type === "checkbox" ||
                        Element.type === "radio"
                      ) {
                        if (
                          Element.formStyle.typos.label !== "" &&
                          Element.formStyle.typos.name !== ""
                        ) {
                          onAdd(Element.id, Element.type, Element.formStyle);
                        }
                      } else if (
                        Element.type === "heading" ||
                        Element.type === "heading"
                      ) {
                        if (Element.formStyle.typos.label !== "")
                          onAdd(Element.id, Element.type, Element.formStyle);
                      } else onAdd(Element.id, Element.type, Element.formStyle);
                    }}
                    className="btn btn-add "
                  > 
                    Add
                  </button>
                  */}
                </AccordionDetails>
              </Accordion>
            );
          })}
      </div>
    </div>
  );
}
FormAccordion.propTypes = {
  onAdd: PropTypes.func.isRequired,
};
export default FormAccordion;
