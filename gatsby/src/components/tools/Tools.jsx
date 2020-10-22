import React from 'react';
import styled from 'styled-components';

import topographic from '../../assets/images/topographic.svg';
import SectionContentWrapper from '../shared/SectionContentWrapper';
import SectionHeading from '../shared/SectionHeading';
import SkillsAndToolsGrid from '../shared/SkillsAndToolsGrid';
import TechnicalSkillOrTool from '../shared/TechnicalSkillOrTool';

const ToolsStyles = styled.section`
  background-image: linear-gradient(-45deg, #e64242ef, #e67342ef), url(${topographic});
  background-position: center;
  background-size: contain;
  background-repeat: repeat;
  color: var(--white);
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
      <SectionContentWrapper>
        <SectionHeading>
          Tools
        </SectionHeading>
        <SkillsAndToolsGrid>
          { toolsUsed }
        </SkillsAndToolsGrid>
      </SectionContentWrapper>
    </ToolsStyles>
  )
}

export default Tools;
