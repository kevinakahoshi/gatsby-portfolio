import React, { lazy, Suspense } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

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

const Tools = () => {
  const {
    skills: {
      tools
    }
  } = useStaticQuery(graphql`
    query {
      skills: sanityToolsSection {
        tools: toolsSelectionAndOrder {
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
  `)

  const toolsUsed = tools.map((skill) => (
    <TechnicalSkillOrTool
      key={skill.id}
      src={skill.logo.asset.fluid.src}
      altText={skill.altText}
      displayText={skill.displayText}
    />
  ));

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
