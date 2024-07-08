import { TextField } from "@mui/material";

export default function EmailOutput(id, typos, attr) {
  return (
    <div key={"E-mail" + id}>
      {/* <label>
        {typos.label + " Email"}
        <span className={attr.required ? "text-red-600" : "hidden"}>*</span>
      </label>
      <br />
      <input
        type="email"
        name={typos.label}
        placeholder="Enter your email"
        {...attr}
        autoComplete="username"
      ></input> */}
      <TextField
        id={id}
        type="email"
        label={typos.label != "" ? typos.label + " Email" : "Email"}
        autoComplete={attr?.autoComplete || "off"}
        required={attr?.required || false}
        size="small"
        sx={{ width: id === "3" ? 200 : 300 }}
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
