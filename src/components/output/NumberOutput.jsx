import { TextField } from "@mui/material";

export default function NumberOutput(id, typos, attr) {
  return (
    <div key={"Number" + id}>
      {/* <label>{typos.label + "No.:"}</label> */}
      <TextField
        id={id}
        type="number"
        label={typos.label}
        variant="outlined"
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