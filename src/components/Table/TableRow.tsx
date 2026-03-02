import React from "react";
import { TableCell } from "./TableCell";
import { TableRowProps } from "./Table.types";

export const TableRow = ({ cells }: TableRowProps) => {
  return (
    <tr>
      {cells.map((cell, index) => (
        <TableCell key={index}>{cell}</TableCell>
      ))}
    </tr>
  );
};