import React from 'react';
import styled from 'styled-components';

const HeroImageTextBlockStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 2.25fr;
  grid-gap: .5rem;
  align-items: center;
  padding: .5rem;
  background: var(--white);
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, .175);

  .row {
    &-image {
      background: var(--medium-grey);
      width: 100%;
      padding-bottom: 100%;
      /* border-radius: 100%; */
    }

    &-text {
      display: grid;
      grid-gap: .25rem;
      grid-template-rows: repeat(auto-fit, minmax(0, 1fr));
      height: 100%;
    }
  }
`;

const HeroImageTextBlock = ({ children }) => {
  return (
    <HeroImageTextBlockStyles>
      <div className="row-image" />
      <div className="row-text">
        { children }
      </div>
    </HeroImageTextBlockStyles>
  )
};

export default HeroImageTextBlock;
