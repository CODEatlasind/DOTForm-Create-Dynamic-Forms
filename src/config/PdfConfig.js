import { Resolution, Margin } from "react-to-pdf";
const PdfConfig = {
  // default is `save`
  // method: "",
  // default is Resolution.MEDIUM = 3, which should be enough, higher values
  // increases the image quality but also the size of the PDF, so be careful
  // using values higher than 10 when having multiple pages generated, it
  // might cause the page to crash or hang.
  resolution: Resolution.HIGH,

  page: {
    // margin is in MM, default is Margin.NONE = 0
    margin: Margin.MEDIUM,
    // default is 'A4'
    // format: "letter",
    // default is 'portrait'
    // orientation: "landscape",
  },
  canvas: {
    // default is 'image/jpeg' for better size performance
    mimeType: "image/png",
    qualityRatio: 1,
  },
  // Customize any value passed to the jsPDF instance and html2canvas
  // function. You probably will not need this and things can break,
  // so use with caution.
  overrides: {
    // see https://artskydj.github.io/jsPDF/docs/jsPDF.html for more options
    pdf: {
      compress: true,
    },
    // see https://html2canvas.hertzen.com/configuration for more options
    canvas: {
      useCORS: true,
    },
  },
};
export default PdfConfig;
[
  {
    id: 1,
    type: "heading",
    typos: {
      label: "Sub-Heading",
      smallDescription: "",
      Label: "Sub-Headings",
    },
    attr: { required: false, minLength: "", maxLength: "", pattern: "" },
  },
  {
    id: 2,
    type: "checkbox",
    typos: { name: "asdca", label: "zscda", smallDescription: "asdass" },
    attr: {
      1: { id: 1, value: "asdasd", checked: false, disabled: false },
      2: { id: 2, value: "asfcbfgdb", checked: false, disabled: false },
    },
  },
  {
    id: 3,
    type: "date",
    typos: { label: "asd", smallDescription: "" },
    attr: { date: "2024-06-29" },
  },
  {
    id: 4,
    type: "password",
    typos: { label: "XASXD", smallDescription: "" },
    attr: {},
  },
];
