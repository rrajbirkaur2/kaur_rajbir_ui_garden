import { Card } from "./Card";
import { CardProps } from "./Card.types";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    backgroundColor: { control: "color" },
  },
};

export const Default = (args: CardProps) => <Card {...args} />;
Default.args = {
  title: "Card Title",
  description: "This is a sample card description.",
  backgroundColor: "#ffffff",
};

export const Highlighted = (args: CardProps) => <Card {...args} />;
Highlighted.args = {
  title: "Highlighted Card",
  description: "Card with a different background color",
  backgroundColor: "#ffeebb",
};