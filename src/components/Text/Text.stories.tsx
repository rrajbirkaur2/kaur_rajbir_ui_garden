import { Text } from "./Text";
import { TextProps } from "./Text.types";

export default {
  title: "Components/Text",
  component: Text,
  argTypes: {
    content: { control: "text" },
    color: { control: "color" },
    fontSize: { control: "text" },
  },
};

export const Default = (args: TextProps) => <Text {...args} />;
Default.args = {
  content: "Sample Text",
  color: "#000000",
  fontSize: "16px",
};

export const Highlighted = (args: TextProps) => <Text {...args} />;
Highlighted.args = {
  content: "Highlighted Text",
  color: "#ff0000",
  fontSize: "18px",
};