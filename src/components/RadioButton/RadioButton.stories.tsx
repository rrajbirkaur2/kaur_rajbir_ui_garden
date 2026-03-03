import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { RadioButton } from "./RadioButton";

const meta: Meta<typeof RadioButton> = {
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

export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: {
    name: "group1",
    value: "option1",
    checked: false,
    disabled: false,
  },
};

export const Checked: Story = {
  args: {
    name: "group1",
    value: "option1",
    checked: true,
    disabled: false,
  },
};