import React from 'react';
import styled from 'styled-components';

const HeroImageElementsLayoutStyles = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 1rem;
  left: -1rem;
  display: grid;
  grid-template-rows: auto 2fr 1fr;
  grid-gap: 1rem;
  z-index: 3;
  /* animation: float 5s infinite ease-in-out; */
`;

const HeroImageElementsLayout = ({ children }) => {
  return (
    <HeroImageElementsLayoutStyles>
      { children }
    </HeroImageElementsLayoutStyles>
  )
};

export default HeroImageElementsLayout;
