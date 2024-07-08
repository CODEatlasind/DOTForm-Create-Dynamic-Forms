import CheckboxInput from "../inputs/CheckboxInput";
import DateTimeInput from "../inputs/DateTimeInput";
import EmailInput from "../inputs/EmailInput";
import Heading from "../inputs/Heading";
import LineBreak from "../inputs/LineBreak";
import NumberInput from "../inputs/NumberInput";
import PasswordInput from "../inputs/PasswordInput";
import RadioButtonInput from "../inputs/RadioButtonInput";
import TeleInput from "../inputs/TeleInput";
import TextFieldInput from "../inputs/TextFieldInput";

const fieldConfig = [
  {
    id: 1,
    name: "Checkbox",
    type: "checkbox",
    component: CheckboxInput,
  },
  {
    id: 2,
    name: "Date",
    type: "date",
    component: DateTimeInput,
  },
  {
    id: 3,
    name: "Email",
    type: "email",
    component: EmailInput,
  },
  {
    id: 4,
    name: "Heading",
    type: "heading",
    component: Heading,
  },
  {
    id: 5,
    name: "Line Break",
    type: "lineBreak",
    component: LineBreak,
  },
  {
    id: 6,
    name: "Number",
    type: "number",
    component: NumberInput,
  },
  {
    id: 7,
    name: "Password",
    type: "password",
    component: PasswordInput,
  },
  {
    id: 8,
    name: "Radio button",
    type: "radio",
    component: RadioButtonInput,
  },
  {
    id: 9,
    name: "Telephone",
    type: "tel",
    component: TeleInput,
  },
  {
    id: 10,
    name: "Text Input",
    type: "text",
    component: TextFieldInput,
  },
];
export default fieldConfig;
