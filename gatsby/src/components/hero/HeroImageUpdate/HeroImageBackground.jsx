import React from 'react';
import styled from 'styled-components';

const HeroImageBackgroundStyles = styled.div`
  height: 100%;
  width: 100%;
  background: var(--white);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, .175);
  /* animation: float 5s infinite ease-in-out; */
`;

const HeroImageBackground = () => {
  return (
    <HeroImageBackgroundStyles />
  )
};

export default HeroImageBackground;
