import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "./Button";

test("button is visible", () => {
  render(<Button label="Test Button" />);
  expect(screen.getByText("Test Button")).toBeVisible();
});

test("button disabled state changes color", () => {
  render(<Button label="Disabled Button" disabled />);
  const button = screen.getByText("Disabled Button") as HTMLButtonElement;
  expect(button).toHaveStyle({
    backgroundColor: "rgb(128, 128, 128)",
  });
});
