import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./Button.types";

const StyledButton = styled.button<{ backgroundColor?: string; disabled?: boolean }>`
  background-color: ${(props) =>
    props.disabled ? "gray" : props.backgroundColor || "blue"};
  color: white;
  padding: 10px 16px;
  border: none;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

export const Button = ({ label, backgroundColor, disabled }: ButtonProps) => {
  return (
    <StyledButton backgroundColor={backgroundColor} disabled={disabled}>
      {label}
    </StyledButton>
  );
};