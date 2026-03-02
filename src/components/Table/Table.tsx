import React from "react";
import styled from "styled-components";
import { TableHeader } from "./TableHeader";
import { TableRow } from "./TableRow";
import { TableFooter } from "./TableFooter";
import { TableProps } from "./Table.types";

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const Table = ({ headers, data, footer }: TableProps) => {
  return (
    <StyledTable>
      <TableHeader headers={headers} />
      <tbody>
        {data.map((row, i) => (
          <TableRow key={i} cells={row} />
        ))}
      </tbody>
      {footer && <TableFooter footer={footer} />}
    </StyledTable>
  );
};