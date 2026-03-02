import React from "react";
import styled from "styled-components";
import { TextProps } from "./Text.types";

const StyledText = styled.p<{ color?: string; fontSize?: string }>`
  color: ${(props) => props.color || "#000"};
  font-size: ${(props) => props.fontSize || "14px"};
`;

export const Text = ({ content, color, fontSize }: TextProps) => {
  return <StyledText color={color} fontSize={fontSize}>{content}</StyledText>;
};