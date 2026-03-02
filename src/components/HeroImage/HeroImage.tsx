import React from "react";
import styled from "styled-components";
import { HeroImageProps } from "./HeroImage.types";

const Wrapper = styled.div`
  position: relative;
  text-align: center;
  color: white;
`;

const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const Title = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const HeroImage = ({ imageUrl, title }: HeroImageProps) => {
  return (
    <Wrapper>
      <Image src={imageUrl} alt={title} />
      <Title>{title}</Title>
    </Wrapper>
  );
};