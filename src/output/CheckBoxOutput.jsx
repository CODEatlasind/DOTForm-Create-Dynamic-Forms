import { Checkbox } from "@mui/material";
// const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function CheckBoxOutput(id, typos, attr) {
  return (
    <div>
      <label id={"label" + id}>{typos.label + ":"}</label>
      {Object.values(attr).map((rip) => (
        <span key={"key" + rip.id}>
          <Checkbox label={rip.label} name={typos.name} id={toString(rip.id)} />
          <span id={rip.id}>{rip.value}</span>
        </span>
      ))}
      {typos.smallDescription && (
        <>
          <br />
          <small id={"small" + id}>{typos.smallDescription}</small>
        </>
      )}
    </div>
  );
}
