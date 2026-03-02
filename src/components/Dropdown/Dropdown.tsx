import React from "react";
import styled from "styled-components";
import { DropdownProps } from "./Dropdown.types";

const StyledSelect = styled.select<{ disabled?: boolean }>`
  padding: 8px;
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

export const Dropdown = ({ options, disabled }: DropdownProps) => {
  return (
    <StyledSelect disabled={disabled}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </StyledSelect>
  );
};