import React from 'react';
import styled from 'styled-components';

const TechnicalSkillOrToolStyles = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  img {
    width: 100%;
    max-width: 100px;
    margin: auto;
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
