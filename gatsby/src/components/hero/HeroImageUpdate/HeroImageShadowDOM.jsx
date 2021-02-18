import React from 'react';
import styled from 'styled-components';

import { Float } from '../../../styles/Keyframes';

const HeroImageShadowDOMStyles = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: -2vmin;
  left: 2vmin;
  background: var(--white);
  opacity: .5;
  z-index: 1;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, .175);
  animation: ${Float} 5s infinite ease-in-out;
  animation-delay: .8s;
`;

const HeroImageShadowDOM = () => {
  return (
    <HeroImageShadowDOMStyles />
  )
};

export default HeroImageShadowDOM;
