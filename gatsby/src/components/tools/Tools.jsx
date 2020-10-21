import React from 'react';
import styled from 'styled-components';
import topographic from '../../assets/images/topographic.svg';

const ToolsStyles = styled.section`
  background-image: linear-gradient(-45deg, #e64242ef, #e67342ef), url(${topographic});
  background-position: center;
  background-size: contain;
  background-repeat: repeat;
  color: var(--white);

  .tools-grid {
    max-width: 1140px;
    margin: auto;
    display: grid;
    grid-gap: 1rem;

    @media (min-width: 851px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    @media (max-width: 850px) {
      grid-template-columns: 1fr 1fr;
    }
  }
`;


const Tools = () => {

  return (
    <ToolsStyles id="tools" className="section">
      <h3 className="center">Tools</h3>

    </ToolsStyles>
  )
}

export default Tools;
