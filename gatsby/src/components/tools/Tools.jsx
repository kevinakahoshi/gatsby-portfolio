import React from 'react';
import styled from 'styled-components';

import topographic from '../../assets/images/topographic.svg';
import SectionHeading from '../shared/SectionHeading';
import TechnicalSkillOrTool from '../shared/TechnicalSkillOrTool';

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

    @media (max-width: 850px) and (min-width: 501) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media (max-width: 500px) {
      grid-template-columns: 1fr 1fr;
    }
  }
`;


const Tools = ({ tools }) => {
  const toolsUsed = tools.map((skill) => {
    return (
      <TechnicalSkillOrTool
        key={skill.id}
        src={skill.logo.asset.fluid.src}
        altText={skill.altText}
        displayText={skill.displayText}
      />
    )
  });

  return (
    <ToolsStyles id="tools" className="section">
      <SectionHeading>
        Tools
      </SectionHeading>
      <div className="tools-grid">
        { toolsUsed }
      </div>
    </ToolsStyles>
  )
}

export default Tools;
