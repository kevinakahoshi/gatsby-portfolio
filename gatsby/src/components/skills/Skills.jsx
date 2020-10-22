import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { useMemo } from 'react';

import SectionHeading from '../shared/SectionHeading';
import TechnicalSkillOrTool from '../shared/TechnicalSkillOrTool';
import SectionContentWrapper from '../shared/SectionContentWrapper';
import SkillsAndToolsGrid from '../shared/SkillsAndToolsGrid';

const SkillsStyles = styled.section`
  background: #ffffff;
`;

const Skills = ({ skills }) => {
  const technicalSkills = skills.map((skill) => {
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
    <SkillsStyles id="skills" className="section">
      <SectionContentWrapper>
        <SectionHeading>
          Technical Skills
        </SectionHeading>
        <SkillsAndToolsGrid>
          { technicalSkills }
        </SkillsAndToolsGrid>
      </SectionContentWrapper>
    </SkillsStyles>
  )
}

export default Skills;
