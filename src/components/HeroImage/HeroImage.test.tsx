import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { HeroImage } from "./HeroImage";

test("hero image renders title", () => {
  render(
    <HeroImage
      imageUrl="https://picsum.photos/1200/300"
      title="Hero Test"
    />
  );
  expect(screen.getByText("Hero Test")).toBeVisible();
});

test("hero image element has correct src", () => {
  render(
    <HeroImage
      imageUrl="https://picsum.photos/1200/300"
      title="Hero Test"
    />
  );
  const img = screen.getByRole("img") as HTMLImageElement;
  expect(img.src).toBe("https://picsum.photos/1200/300");
});