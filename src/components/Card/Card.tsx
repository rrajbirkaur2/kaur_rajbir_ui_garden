import React from "react";
import styled from "styled-components";
import { CardProps } from "./Card.types";

const StyledCard = styled.div<{ backgroundColor?: string }>`
  background-color: ${(props) => props.backgroundColor || "#f5f5f5"};
  padding: 20px;
  border-radius: 8px;
  width: 250px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h3`
  margin: 0 0 10px 0;
`;

const Description = styled.p`
  margin: 0;
`;

export const Card = ({ title, description, backgroundColor }: CardProps) => {
  return (
    <StyledCard backgroundColor={backgroundColor}>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </StyledCard>
  );
};