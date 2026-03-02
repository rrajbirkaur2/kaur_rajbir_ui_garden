import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
};

export const Default = () => (
  <Button
    label="Click Me"
    backgroundColor="blue"
    disabled={false}
  />
);

export const Disabled = () => (
  <Button
    label="Disabled"
    backgroundColor="grey"
    disabled={true}
  />
);