import React from 'react';
import styled from 'styled-components';

const HeroImageValuePropStyles = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-gap: .5rem;

  .value-prop {
    &-image {
      background: var(--medium-grey);
      height: 1.5rem;
      width: 1.5rem;
      border-radius: 100%;
      margin: auto;
    }

    &-icon-text {
      height: .35rem;
      background: var(--medium-grey);
      border-radius: .25rem;
      width: 35%;
      margin: auto;
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
