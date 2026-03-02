import { Dropdown } from "./Dropdown";
import { DropdownProps } from "./Dropdown.types";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  argTypes: {
    disabled: { control: "boolean" },
  },
};

export const Default = (args: DropdownProps) => <Dropdown {...args} />;
Default.args = {
  options: ["Option 1", "Option 2", "Option 3"],
  disabled: false,
};

export const Disabled = (args: DropdownProps) => <Dropdown {...args} />;
Disabled.args = {
  options: ["Option 1", "Option 2", "Option 3"],
  disabled: true,
};