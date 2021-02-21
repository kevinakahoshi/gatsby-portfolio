import React from 'react';
import styled from 'styled-components';

const HeroTextStyles = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    align-self: center;
    justify-self: center;
  }

  @media (max-width: 767px) {
    margin: auto;
  }

  h2 {
    color: var(--link-inactive-grey);
  }
`;

const HeroText = () => (
  <HeroTextStyles>
    <h1>Kevin Akahoshi</h1>
    <h2>Software Engineer</h2>
  </HeroTextStyles>
);

export default HeroText;
