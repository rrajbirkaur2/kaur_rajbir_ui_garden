import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Label } from "./Label";

test("renders label text", () => {
  render(<Label text="Test Label" />);
  expect(screen.getByText("Test Label")).toBeVisible();
});

test("applies color and fontSize", () => {
  render(<Label text="Styled Label" color="red" fontSize="20px" />);
  const label = screen.getByText("Styled Label");
  expect(label).toHaveStyle({ color: "red", fontSize: "20px" });
});