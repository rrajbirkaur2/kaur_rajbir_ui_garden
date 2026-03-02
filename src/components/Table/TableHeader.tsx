import React from "react";
import styled from "styled-components";
import { TableHeaderProps } from "./Table.types";

const Th = styled.th`
  border: 1px solid #ccc;
  padding: 8px;
`;

export const TableHeader = ({ headers }: TableHeaderProps) => {
  return (
    <thead>
      <tr>
        {headers.map((h, i) => (
          <Th key={i}>{h}</Th>
        ))}
      </tr>
    </thead>
  );
};