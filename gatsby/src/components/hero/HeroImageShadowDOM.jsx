import React from 'react';
import styled from 'styled-components';

const HeroImageShadowDOMStyles = styled.div`
  background: var(--light-grey);
  position: absolute;
  height: 100%;
  width: 100%;
  top: -1rem;
  left: 1rem;
  bottom: 0;
  border-radius: .25rem;
  filter: opacity(.5);
  animation: float 7.5s infinite ease-in-out;
  animation-delay: .3s;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, .175);
`;

const HeroImageShadowDOM = () => (
  <HeroImageShadowDOMStyles />
);

export default HeroImageShadowDOM;
