import React from 'react';
import styled from 'styled-components';

const HeroImageTextBlockStyles = styled.div`
  padding: .5rem;
  background: var(--white);
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, .175);
  height: 100%;

  .row-text {
    display: grid;
    grid-gap: .25rem;
    grid-template-rows: repeat(auto-fit, minmax(0, 1fr));
    height: 100%;
  }
`;

const HeroImageTextBlock = ({ children }) => (
  <HeroImageTextBlockStyles>
    <div className="row-text">
      { children }
    </div>
  </HeroImageTextBlockStyles>
);

export default HeroImageTextBlock;
