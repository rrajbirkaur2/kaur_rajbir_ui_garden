import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Table } from "./Table";

test("renders table headers", () => {
  render(<Table headers={["Name", "Age"]} data={[["Alice", "25"]]} />);
  expect(screen.getByText("Name")).toBeVisible();
  expect(screen.getByText("Age")).toBeVisible();
});

test("renders table cells and footer", () => {
  render(
    <Table
      headers={["Name", "Age"]}
      data={[
        ["Alice", "25"],
        ["Bob", "30"],
      ]}
      footer={["Total", "2"]}
    />
  );
  expect(screen.getByText("Alice")).toBeVisible();
  expect(screen.getByText("Bob")).toBeVisible();
  expect(screen.getByText("Total")).toBeVisible();
  expect(screen.getByText("2")).toBeVisible();
});