import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { RadioButton } from "./RadioButton";

test("renders radio button", () => {
  render(<RadioButton name="group" value="1" />);
  const radio = screen.getByRole("radio") as HTMLInputElement;
  expect(radio).toBeVisible();
  expect(radio.checked).toBe(false);
});

test("can change radio button state", () => {
  const handleChange = jest.fn();
  render(
    <RadioButton name="group" value="1" onChange={handleChange} />
  );
  const radio = screen.getByRole("radio") as HTMLInputElement;
  fireEvent.click(radio);
  expect(handleChange).toHaveBeenCalled();
});