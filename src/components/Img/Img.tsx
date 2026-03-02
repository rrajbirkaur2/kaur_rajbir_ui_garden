import React from "react";
import styled from "styled-components";
import { ImageProps } from "./Img.types";

const StyledImage = styled.img<{ width?: string; height?: string }>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "auto"};
`;

export const Image = ({ src, alt, width, height }: ImageProps) => {
  return <StyledImage src={src} alt={alt} width={width} height={height} />;
};