import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Table } from "./Table";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    headers: ["Name", "Age"],
    data: [
      ["Alice", "25"],
      ["Bob", "30"],
    ],
    footer: ["Total", "2"],
  },
};

export const LargeTable: Story = {
  args: {
    headers: ["Name", "Age", "City"],
    data: [
      ["Alice", "25", "NY"],
      ["Bob", "30", "LA"],
      ["Charlie", "28", "Chicago"],
    ],
    footer: ["Total", "3", "-"],
  },
};