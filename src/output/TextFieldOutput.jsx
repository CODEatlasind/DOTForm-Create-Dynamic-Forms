import { TextField } from "@mui/material";

export default function TextFieldOutput(id, typos, attr) {
  return (
    <div key="text">
      {/* <label>
        {typos.label}
        <span className={attr.required ? "text-red-600" : "hidden"}>*</span>
      </label>
      <input
        type="text"
        {...attr}
        placeholder={
          typos.label != "" ? "Enter your " + typos.label.toLowerCase() : null
        }
        className="w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
      /> 
      <br />*/}
      <TextField
        id={id}
        label={typos.label}
        variant="outlined"
        name={attr.name}
        autoComplete={attr.autoComplete}
        required={attr.required}
        size="small"
      />
      {typos.smallDescription && (
        <>
          <br />
          <small>{typos.smallDescription}</small>
        </>
      )}
    </div>
  );
}
