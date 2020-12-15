import React from 'react';
import styled from 'styled-components';

const HeroImageTextLineStyles = styled.div`
  background: #ccc;
  border-radius: .25rem;
`;

const HeroImageTextLine = ({ index }) => (
  <HeroImageTextLineStyles id={`text-line-${index}`} />
);

export default HeroImageTextLine;
