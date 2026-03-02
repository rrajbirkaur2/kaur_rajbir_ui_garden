import React from "react";
import styled from "styled-components";
import { TableCellProps } from "./Table.types";

const Td = styled.td`
  border: 1px solid #ccc;
  padding: 8px;
`;

export const TableCell = ({ children }: TableCellProps) => {
  return <Td>{children}</Td>;
};