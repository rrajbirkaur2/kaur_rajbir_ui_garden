import { Label } from "./Label";
import { LabelProps } from "./Label.types";

export default {
  title: "Components/Label",
  component: Label,
  argTypes: {
    text: { control: "text" },
    htmlFor: { control: "text" },
    color: { control: "color" },
    fontSize: { control: "text" },
  },
};

export const Default = (args: LabelProps) => <Label {...args} />;
Default.args = {
  text: "Username",
  htmlFor: "username",
  color: "#000000",
  fontSize: "16px",
};

export const Highlighted = (args: LabelProps) => <Label {...args} />;
Highlighted.args = {
  text: "Email",
  htmlFor: "email",
  color: "#ff0000",
  fontSize: "18px",
};