import { Button } from "./Button";
import { ButtonProps } from "./Button.types";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
    label: { control: "text" },

    onClick: {
      action: "Button clicked",
      table: { disable: true }, // hides the "-" from Controls
    },
  },
};

export const Default = (args: ButtonProps) => <Button {...args} />;
Default.args = {
  label: "Click Me",
  backgroundColor: "blue",
  disabled: false,
};

export const Disabled = (args: ButtonProps) => <Button {...args} />;
Disabled.args = {
  label: "Disabled",
  backgroundColor: "grey",
  disabled: true,
};