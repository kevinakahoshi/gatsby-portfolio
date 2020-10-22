import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { useMemo } from 'react';

import SectionHeading from '../shared/SectionHeading';
import TechnicalSkillOrTool from '../shared/TechnicalSkillOrTool';

const SkillsStyles = styled.section`
  background: #ffffff;

  .technologies-grid {
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
      <SectionHeading>
        Technical Skills
      </SectionHeading>
      <div className="technologies-grid">
        { technicalSkills }
      </div>
    </SkillsStyles>
  )
}

export default Skills;
