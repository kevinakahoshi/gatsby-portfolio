import React from 'react';
import styled from 'styled-components';

const HeroImageValuePropStyles = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 1rem;

  .value-prop {
    &-image {
      background: var(--medium-grey);
      height: 2rem;
      width: 2rem;
      border-radius: 100%;
    }

    &-icon-text {
      height: 1fr;
      background: var(--medium-grey);
      border-radius: .25rem;
    }
  }
`;

const HeroImageValueProp = () => {
  return (
    <HeroImageValuePropStyles>
      <div className="value-prop-image" />
      <div className="value-prop-icon-text" />
    </HeroImageValuePropStyles>
  )
};

export default HeroImageValueProp;
