import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
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
    disabled: false,
  },
};

function action(arg0: string): (() => void) | undefined {
  throw new Error("Function not implemented.");
}
