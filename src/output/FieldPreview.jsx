import PropTypes from "prop-types";
import typeDate from "./DateTimeOutput";
import typeEmail from "./EmailOutput";
import typeNumber from "./NumberOutput";
import typePassword from "./PasswordOutput";
import typeCheckBox from "./CheckBoxOutput";
import typeRadio from "./RadioButtonOutput";
import typeTele from "./TeleOutput";
import typeText from "./TextFieldOutput";
import typeHeading from "./HeadingOut";

const chooseInputComponent = (id, type, typos, attr) => {
  switch (type) {
    case "checkbox":
      return [typeCheckBox(id, typos, attr)];
    case "date":
      return [typeDate(id, typos, attr)];
    case "email":
      return [typeEmail(id, typos, attr)];
    case "number":
      return [typeNumber(id, typos, attr)];
    case "password":
      return [typePassword(id, typos, attr)];
    case "radio":
      return [typeRadio(id, typos, attr)];
    case "tel":
      return [typeTele(id, typos, attr)];
    case "text":
      return [typeText(id, typos, attr)];
    case "heading":
      return [typeHeading(id, typos)];
    case "line-break":
      return <br />;
    default:
      return null;
  }
};
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!Changes HERE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function FieldPreview({ id, type, typos, attr }) {
  return <>{chooseInputComponent(id, type, typos, attr)}</>;
}

FieldPreview.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  typos: PropTypes.shape({
    label: PropTypes.string,
    smallDescription: PropTypes.string,
  }),
  attr: PropTypes.object,
};
export default FieldPreview;
