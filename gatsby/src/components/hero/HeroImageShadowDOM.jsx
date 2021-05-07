import React from 'react';
import styled from 'styled-components';

const HeroImageShadowDOMStyles = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: -2vmin;
  left: 2vmin;
  background: var(--white);
  opacity: 0.5;
  z-index: 1;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);
`;

const HeroImageShadowDOM = () => <HeroImageShadowDOMStyles />;

export default HeroImageShadowDOM;
