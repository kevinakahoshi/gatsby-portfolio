import React from 'react';
import styled from 'styled-components';

const TechnicalSkillOrToolStyles = styled.div`
  text-align: center;
  padding: 1rem;
  display: grid;
  grid-template-rows: 1fr auto;
  grid-gap: 1rem;

  img {
    width: var(--logo-width);
    max-width: var(--logo-width);
    height: var(--logo-width);
    margin: auto;
  }

  @media (min-width: 551px) {
    --logo-width: 100px;
  }

  @media (max-width: 550px) {
    --logo-width: 80px;
  }
`;

const TechnicalSkillOrTool = ({ src, altText, displayText }) => (
  <TechnicalSkillOrToolStyles className="technical">
    <img src={src} alt={altText} title={altText} width="100%" height="auto" />
    <p>{displayText}</p>
  </TechnicalSkillOrToolStyles>
);

export default TechnicalSkillOrTool;
