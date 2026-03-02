import { HeroImage } from "./HeroImage";
import { HeroImageProps } from "./HeroImage.types";

export default {
  title: "Components/HeroImage",
  component: HeroImage,
  argTypes: {
    imageUrl: { control: "text" },
    title: { control: "text" },
  },
};

export const Default = (args: HeroImageProps) => <HeroImage {...args} />;
Default.args = {
  imageUrl: "https://picsum.photos/1200/300",
  title: "Hero Title",
};

export const Alternate = (args: HeroImageProps) => <HeroImage {...args} />;
Alternate.args = {
  imageUrl: "https://picsum.photos/1200/301",
  title: "Alternate Hero",
};