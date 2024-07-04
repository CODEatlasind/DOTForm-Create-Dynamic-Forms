import { TextField } from "@mui/material";

export default function NumberOutput(id, typos, attr) {
  return (
    <div key="Numbr">
      {/* <label>{typos.label + "No.:"}</label> */}
      <TextField
        id={id}
        type="number"
        label={typos.label}
        variant="outlined"
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
      <br />
    </div>
  );
}
