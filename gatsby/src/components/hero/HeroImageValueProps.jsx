import React from 'react';
import styled from 'styled-components';

import HeroImageValueProp from './HeroImageValueProp';

const HeroImageValuePropsStyles = styled.div`
  padding: 2rem 0rem;

  @media (min-width: 851px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 1rem;
  }

  @media (max-width: 850px) {
    display: none;
  }
`;

const HeroImageValueProps = () => {
  const heroImageValueProps = new Array(12)
    .fill(undefined)
    .map((_, index) => <HeroImageValueProp key={index} />);

  return (
    <HeroImageValuePropsStyles>
      { heroImageValueProps}
    </HeroImageValuePropsStyles>
  )
};

export default HeroImageValueProps;
