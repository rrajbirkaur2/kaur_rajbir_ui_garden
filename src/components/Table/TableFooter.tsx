import React from "react";
import { TableCell } from "./TableCell";
import { TableFooterProps } from "./Table.types";

export const TableFooter = ({ footer }: TableFooterProps) => {
  return (
    <tfoot>
      <tr>
        {footer.map((cell, i) => (
          <TableCell key={i}>{cell}</TableCell>
        ))}
      </tr>
    </tfoot>
  );
};