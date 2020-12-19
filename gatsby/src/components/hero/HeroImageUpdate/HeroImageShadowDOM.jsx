import React from 'react';
import styled from 'styled-components';

const HeroImageShadowDOMStyles = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: -1rem;
  left: 1rem;
  background: var(--white);
  opacity: .5;
  z-index: 1;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, .175);
`;

const HeroImageShadowDOM = () => {
  return (
    <HeroImageShadowDOMStyles />
  )
};

export default HeroImageShadowDOM;
