import React from "react";
import styled from "styled-components";
import { LabelProps } from "./Label.types";

const StyledLabel = styled.label<{ color?: string; fontSize?: string }>`
  color: ${(props) => props.color || "#000"};
  font-size: ${(props) => props.fontSize || "14px"};
`;

export const Label = ({ text, htmlFor, color, fontSize }: LabelProps) => {
  return (
    <StyledLabel htmlFor={htmlFor} color={color} fontSize={fontSize}>
      {text}
    </StyledLabel>
  );
};