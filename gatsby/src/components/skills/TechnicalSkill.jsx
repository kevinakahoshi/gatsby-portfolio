import React from 'react';
import styled from 'styled-components';

const TechnicalSkillStyles = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  img {
    width: 100%;
    max-width: 100px;
    margin: auto;
  }
`;

const TechnicalSkill = ({ src, altText, displayText }) => {
  return (
    <TechnicalSkillStyles>
      <img
        src={src}
        alt={altText}
        title={altText}
      />
      <p>
        { displayText }
      </p>
    </TechnicalSkillStyles>
  )
}

export default TechnicalSkill;
