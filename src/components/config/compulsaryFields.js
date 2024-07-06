const compulsaryFields = [
  {
    id: "-2",
    type: "text",
    attr: {
      autoComplete: "name",
      required: true,
    },
    typos: {
      label: "Full Name",
      smallDescription: "Enter Your Name",
    },
  },
  {
    id: "-1",
    type: "email",

    attr: {
      autoComplete: "email",
      required: true,
    },
    typos: {
      label: "",
      smallDescription: "Enter Your Email Address",
    },
  },
];
export default compulsaryFields;
