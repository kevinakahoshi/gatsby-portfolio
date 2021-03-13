import React, {
  lazy,
  Suspense,
  useMemo
} from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import SectionHeading from '../shared/SectionHeading';
import SectionContentWrapper from '../shared/SectionContentWrapper';
import SkillsAndToolsGrid from '../shared/SkillsAndToolsGrid';
import TechnicalSkillOrToolFallback from '../shared/TechnicalSkillOrToolFallback';

const TechnicalSkillOrTool = lazy(() => import('../shared/TechnicalSkillOrTool'));

const SkillsStyles = styled.section`
  background: #ffffff;
`;

const Skills = () => {
  const {
    skills: {
      technologies
    }
  } = useStaticQuery(graphql`
    query {
      skills: sanityTechnologiesSection {
        technologies: technologiesSelectionAndOrder {
          name
          id
          displayText
          altText
          logo {
            asset {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  `);

  const technicalSkills = technologies.map((skill) => (
    <Suspense
      fallback={<TechnicalSkillOrToolFallback />}
      key={skill.id}
    >
      <TechnicalSkillOrTool
        key={skill.id}
        src={skill.logo.asset.fluid.src}
        altText={skill.altText}
        displayText={skill.displayText}
      />
    </Suspense>
  ));

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
  );
};

export default Skills;
