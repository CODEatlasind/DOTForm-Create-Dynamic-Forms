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

const formStyle = {
  typos: {},
  attr: {},
};

const fieldConfig = [
  {
    id: 1,
    name: "Checkbox",
    type: "checkbox",
    component: CheckboxInput,
    formStyle,
  },
  {
    id: 2,
    name: "Date",
    type: "date",
    component: DateTimeInput,
    formStyle,
  },
  {
    id: 3,
    name: "Email",
    type: "email",
    component: EmailInput,
    formStyle,
  },
  {
    id: 4,
    name: "Heading",
    type: "heading",
    component: Heading,
    formStyle,
  },
  {
    id: 5,
    name: "Line Break",
    type: "lineBreak",
    component: LineBreak,
    formStyle,
  },
  {
    id: 6,
    name: "Number",
    type: "number",
    component: NumberInput,
    formStyle,
  },
  {
    id: 7,
    name: "Password",
    type: "password",
    component: PasswordInput,
    formStyle,
  },
  {
    id: 8,
    name: "Radio button",
    type: "radio",
    component: RadioButtonInput,
    formStyle,
  },
  {
    id: 9,
    name: "Telephone",
    type: "tel",
    component: TeleInput,
    formStyle,
  },
  {
    id: 10,
    name: "Text",
    type: "text",
    component: TextFieldInput,
    formStyle,
  },
];
export default fieldConfig;
