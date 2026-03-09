import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    backgroundColor: { control: "color" },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: "Card Title",
    description: "This is a sample card description.",
    backgroundColor: "#ffffff",
  },
};

export const Highlighted: Story = {
  args: {
    title: "Highlighted Card",
    description: "Card with a different background color",
    backgroundColor: "#615d50",
  },
};