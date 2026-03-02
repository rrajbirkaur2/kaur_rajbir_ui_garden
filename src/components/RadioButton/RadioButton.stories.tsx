import { RadioButton } from "./RadioButton";
import { RadioButtonProps } from "./RadioButton.types";

export default {
  title: "Components/RadioButton",
  component: RadioButton,
  argTypes: {
    name: { control: "text" },
    value: { control: "text" },
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    onChange: { action: "changed", table: { disable: true } },
  },
};

export const Default = (args: RadioButtonProps) => <RadioButton {...args} />;
Default.args = {
  name: "group1",
  value: "option1",
  checked: false,
  disabled: false,
};

export const Checked = (args: RadioButtonProps) => <RadioButton {...args} />;
Checked.args = {
  name: "group1",
  value: "option1",
  checked: true,
  disabled: false,
};