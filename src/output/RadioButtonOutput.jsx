import { Radio } from "@mui/material";

export default function RadioButtonOutput(id, typos, attr) {
  return (
    <div key="Radio">
      <label>{typos.label + ":"}</label>

      {Object.values(attr).map((rip) => (
        <span key={rip.id}>
          <Radio label={rip.label} name={typos.name} id={id} />
          <span>{rip.value}</span>
        </span>
      ))}
      {typos.smallDescription && (
        <>
          <br />
          <small>{typos.smallDescription}</small>
        </>
      )}
    </div>
  );
}
