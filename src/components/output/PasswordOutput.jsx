import { TextField } from "@mui/material";

export default function PasswordOutput(id, typos, attr) {
  return (
    <div key={"Password" + id}>
      <TextField
        id={id}
        type="password"
        label={typos.label + " Password"}
        // autoComplete="current-password"
        autoComplete="username"
        size="small"
      />
      {/* <label>{typos.label + " password"}:</label>
      <input
        type="password"
        placeholder="Enter password"
        autoComplete="current-password"
      />
      <br /> */}
      {typos.smallDescription && (
        <>
          <br />
          <small>{typos.smallDescription}</small>
        </>
      )}
    </div>
  );
}
