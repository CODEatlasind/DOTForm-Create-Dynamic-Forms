import { TextField } from "@mui/material";

export default function DateTimeOutput(id, typos, attr) {
  return (
    <div key="D&T" className="m-auto">
      <label className="">
        {typos.label != "" ? typos.label + " Date" : "Date"}:
      </label>

      <TextField type="date" id={id} size="small" />
      {typos.smallDescription && (
        <>
          <br />
          <small>{typos.smallDescription}</small>
        </>
      )}
    </div>
  );
}
// import { TextField } from "@mui/material";
// import PropTypes from "prop-types";

// export default function DateTimeOutput({ typos, attr }) {
//   return (
//     <div key="D&T">
//       {/* <label>{typos.label + " date"}:</label> */}
//       <TextField
//         id="text-field-date"
//         type="date"
//         // label={typos.label}
//         // variant="outlined"

//         required={attr.required}
//         size="small"
//       />
//       {/* <input type="date" /> */}
//     </div>
//   );
// }
// DateTimeOutput.propTypes = {
//   typos: PropTypes.shape({
//     label: PropTypes.object,
//     smallDescription: PropTypes.object,
//   }),
//   attr: PropTypes.object,
// };
