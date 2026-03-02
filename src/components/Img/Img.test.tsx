import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Image } from "./Img";

test("renders image with alt text", () => {
  render(<Image src="img.png" alt="Test Image" />);
  expect(screen.getByAltText("Test Image")).toBeVisible();
});

test("renders image with correct width", () => {
  render(<Image src="img.png" alt="Test Image" width="300px" />);
  const img = screen.getByAltText("Test Image");
  expect(img).toHaveAttribute("width", "300px");
});