import React from 'react';
import styled from 'styled-components';

const SectionHeadingStyles = styled.h3`
  font-size: 2.5rem;
  line-height: 1.2;
  margin: 0 0 1.5rem 0;
  text-align: center;
`;

const SectionHeading = ({ children }) => (
  <SectionHeadingStyles>
    { children }
  </SectionHeadingStyles>
);

export default SectionHeading;
