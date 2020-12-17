import React from 'react';
import styled from 'styled-components';
import HeroImageValueProp from './HeroImageValueProp';

const HeroImageToolsStyles = styled.div`
  background-image: linear-gradient(-45deg, #e64242ef, #e67342ef);
  padding: 2rem 1em;
  margin: 0rem -1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
`;

const HeroImageTools = () => {
  const tools = new Array(12)
    .fill(undefined)
    .map((_, index) => (
      <HeroImageValueProp key={index} />
    ))

  return (
    <HeroImageToolsStyles>
      { tools }
    </HeroImageToolsStyles>
  )
};

export default HeroImageTools;
