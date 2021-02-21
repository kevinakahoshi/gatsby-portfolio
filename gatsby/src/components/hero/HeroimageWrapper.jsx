import React from 'react';
import styled from 'styled-components';

const HeroImageWrapperStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transform: translate3d(0,0,0);

  @media (max-width: 767px) {
    grid-row: 1;
  }
`;

const HeroImageWrapper = ({ children }) => (
  <HeroImageWrapperStyles>
    { children }
  </HeroImageWrapperStyles>
);

export default HeroImageWrapper;
