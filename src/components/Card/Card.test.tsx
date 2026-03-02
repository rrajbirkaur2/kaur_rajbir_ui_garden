import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Card } from "./Card";

test("card renders title and description", () => {
  render(<Card title="Test Title" description="Test Description" />);
  expect(screen.getByText("Test Title")).toBeVisible();
  expect(screen.getByText("Test Description")).toBeVisible();
});

test("card renders custom background color", () => {
  render(
    <Card title="Color Test" description="Desc" backgroundColor="red" />
  );
  const card = screen.getByText("Color Test").parentElement;
  expect(card).toHaveStyle({ backgroundColor: "red" });
});