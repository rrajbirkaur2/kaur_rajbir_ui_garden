import { Image } from "./Img";
import { ImageProps } from "./Img.types";

export default {
  title: "Components/Image",
  component: Image,
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
    width: { control: "text" },
    height: { control: "text" },
  },
};

export const Default = (args: ImageProps) => <Image {...args} />;
Default.args = {
  src: "https://picsum.photos/200",
  alt: "Sample Image",
  width: "200px",
  height: "150px",
};

export const Large = (args: ImageProps) => <Image {...args} />;
Large.args = {
  src: "https://picsum.photos/400",
  alt: "Large Image",
  width: "400px",
  height: "300px",
};