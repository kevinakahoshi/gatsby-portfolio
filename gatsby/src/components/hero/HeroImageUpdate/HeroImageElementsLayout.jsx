import React from 'react';
import styled from 'styled-components';

// TODO: Add clamp to absolute positioning for top and left, and for grid-gap
const HeroImageElementsLayoutStyles = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 2vmin;
  left: -2vmin;
  display: grid;
  grid-template-rows: auto 2fr 1fr;
  grid-gap: 2vmin;
  z-index: 3;
`;

const HeroImageElementsLayout = ({ children }) => {
  return (
    <HeroImageElementsLayoutStyles>
      { children }
    </HeroImageElementsLayoutStyles>
  )
};

export default HeroImageElementsLayout;
