import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Image } from "./Img";

const meta: Meta<typeof Image> = {
  title: "Components/Image",
  component: Image,
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
    width: { control: "text" },
    height: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: {
    src: "https://picsum.photos/200",
    alt: "Sample Image",
    width: "200px",
    height: "150px",
  },
};

export const Large: Story = {
  args: {
    src: "https://picsum.photos/400",
    alt: "Large Image",
    width: "400px",
    height: "300px",
  },
};