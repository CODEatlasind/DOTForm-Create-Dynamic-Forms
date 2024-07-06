import FieldPreview from "../output/FieldPreview";
import PropTypes from "prop-types";
import compulsaryFields from "./compulsaryFields";
export default function RequiredFields({ compulsaryFields }) {
  const fieldsRender = compulsaryFields.map((field) => {
    return (
      <FieldPreview
        key={"required" + field.id}
        id={field.id}
        type={field.type}
        typos={field.typos}
        attr={field.attr}
      />
    );
  });
  return (
    <div className="flex flex-wrap gap-2 justify-center">{fieldsRender}</div>
  );
}
RequiredFields.propTypes = {
  compulsaryFields: PropTypes.array,
};
