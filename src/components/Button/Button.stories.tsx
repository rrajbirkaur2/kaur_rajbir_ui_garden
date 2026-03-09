import type { Meta, StoryObj } from "@storybook/react-webpack5";
import {Button} from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
    label: { control: "text" },
    onClick: { action: "button-clicked" },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: "Click Me",
    backgroundColor: "blue",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    backgroundColor: "grey",
    disabled: true,
  },
};