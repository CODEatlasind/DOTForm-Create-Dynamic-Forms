import { TextField } from "@mui/material";

export default function DateTimeOutput(id, typos, attr) {
  return (
    <>
      <div key={"D&T" + id} className=" ">
        <label className="flex justify-center items-baseline gap-1">
          {typos.label != "" ? typos.label + " Date" : "Date"}
          <TextField type="date" id={id} size="small" />
        </label>
        {typos.smallDescription && (
          <>
            <small>{typos.smallDescription}</small>
          </>
        )}
      </div>
    </>
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
