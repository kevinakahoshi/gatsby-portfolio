import React from 'react';
import styled from 'styled-components';

const TechnicalSkillOrToolFallbackStyles = styled.div`
  text-align: center;
  padding: 1rem;
  display: grid;
  grid-template-rows: 1fr auto;
  grid-gap: 1rem;

  div {
    width: 100%;
    max-width: var(--fallback-dimensions);
    padding-top: var(--fallback-dimensions);
    margin: auto;
  }

  @media (min-width: 551px) {
    --fallback-dimensions: 100px;
  }

  @media (max-width: 550px) {
    --fallback-dimensions: 80px;
  }

  p {
    margin: 0;
  }
`;

const TechnicalSkillOrToolFallback = () => (
  <TechnicalSkillOrToolFallbackStyles>
    <div />
    <p>Loading...</p>
  </TechnicalSkillOrToolFallbackStyles>
);

export default TechnicalSkillOrToolFallback;
