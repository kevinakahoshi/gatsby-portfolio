import React from 'react';
import styled from 'styled-components';

const TechnicalSkillOrToolStyles = styled.div`
  text-align: center;
  padding: 1rem;
  display: grid;
  grid-template-rows: 1fr auto;
  grid-gap: 1rem;

  img {
    width: 100%;
    max-width: var(--logo-width);
    margin: auto;
  }

  @media (min-width: 551px) {
    --logo-width: 100px;
  }

  @media (max-width: 550px) {
    --logo-width: 80px;
  }

  p {
    margin: 0;
  }
`;

const TechnicalSkillOrTool = ({ src, altText, displayText }) => {
  return (
    <TechnicalSkillOrToolStyles>
      <img
        src={src}
        alt={altText}
        title={altText}
      />
      <p>
        {displayText}
      </p>
    </TechnicalSkillOrToolStyles>
  )
}

export default TechnicalSkillOrTool;
