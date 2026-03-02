import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Text } from "./Text";

test("renders text content", () => {
  render(<Text content="Hello World" />);
  expect(screen.getByText("Hello World")).toBeVisible();
});

test("applies color and font size", () => {
  render(<Text content="Styled" color="blue" fontSize="20px" />);
  const text = screen.getByText("Styled");
  expect(text).toHaveStyle({ color: "blue", fontSize: "20px" });
});