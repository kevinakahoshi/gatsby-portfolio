import React from 'react';
import styled from 'styled-components';

import SectionContentWrapper from '../shared/SectionContentWrapper';
import SectionHeading from '../shared/SectionHeading';
import ApplicationsCard from './ApplicationsCard';
import ApplicationsGrid from './ApplicationsGrid';

const ApplicationsStyles = styled.section`
  background: #ffffff;
`;

const Applications = ({ projects }) => {
  const applications = projects.map((project) => {
    return (
      <ApplicationsCard
        key={project.id}
        application={project}
      />
    )
  });

  return (
    <ApplicationsStyles id="applications" className="section">
      <SectionContentWrapper>
        <SectionHeading>
          Applications
        </SectionHeading>
        <ApplicationsGrid>
          { applications }
        </ApplicationsGrid>
      </SectionContentWrapper>
    </ApplicationsStyles>
  )
}

export default Applications;
