import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Label } from "./Label";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  argTypes: {
    text: { control: "text" },
    htmlFor: { control: "text" },
    color: { control: "color" },
    fontSize: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    text: "Username",
    htmlFor: "username",
    color: "#000000",
    fontSize: "16px",
  },
};

export const Highlighted: Story = {
  args: {
    text: "Email",
    htmlFor: "email",
    color: "#ff0000",
    fontSize: "18px",
  },
};