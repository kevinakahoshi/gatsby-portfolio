import React from 'react';
import styled from 'styled-components';
import HeroImageContents from './HeroImageContents';
import { FadeIn100 } from '../../styles/Keyframes';

const HeroImageStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transform: translate3d(0, 0, 0);
  opacity: 0;
  animation: ${FadeIn100} 0.125s ease-in-out;
  animation-delay: 0.25s;
  animation-fill-mode: forwards;

  @media (max-width: 767px) {
    grid-row: 1;
  }
`;

const HeroImage = ({ children }) => (
  <HeroImageStyles>
    <HeroImageContents />
  </HeroImageStyles>
);

export default HeroImage;
