import { Table } from "./Table";
import { TableProps } from "./Table.types";

export default {
  title: "Components/Table",
  component: Table,
};

export const Default = (args: TableProps) => <Table {...args} />;
Default.args = {
  headers: ["Name", "Age"],
  data: [
    ["Alice", "25"],
    ["Bob", "30"],
  ],
  footer: ["Total", "2"],
};

export const LargeTable = (args: TableProps) => <Table {...args} />;
LargeTable.args = {
  headers: ["Name", "Age", "City"],
  data: [
    ["Alice", "25", "NY"],
    ["Bob", "30", "LA"],
    ["Charlie", "28", "Chicago"],
  ],
  footer: ["Total", "3", "-"],
};