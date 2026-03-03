import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { HeroImage } from "./HeroImage";

const meta: Meta<typeof HeroImage> = {
  title: "Components/HeroImage",
  component: HeroImage,
  argTypes: {
    imageUrl: { control: "text" },
    title: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {
  args: {
    imageUrl: "https://picsum.photos/1200/300",
    title: "Hero Title",
  },
};

export const Alternate: Story = {
  args: {
    imageUrl: "https://picsum.photos/1200/301",
    title: "Alternate Hero",
  },
};