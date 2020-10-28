import React, {
  useMemo,
  useState
} from 'react';
import styled from 'styled-components';

import SectionContentWrapper from '../shared/SectionContentWrapper';
import SectionHeading from '../shared/SectionHeading';
import ApplicationsCard from './ApplicationsCard';
import ApplicationsGrid from './ApplicationsGrid';
import ApplicationsSwitchWrapper from './ApplicationsSwitchWrapper';
import ApplicationsSwitch from './ApplicationsSwitch';

const ApplicationsStyles = styled.section`
  background: #ffffff;
`;

const Applications = ({ projects }) => {
  const [view, setView] = useState('grid');

  const applications = useMemo(() => projects.map((project) => {
    return (
      <ApplicationsCard
        key={project.id}
        application={project}
      />
    )
  }), [projects]);

  const handleToggle = () =>
    setView((sectionView) => sectionView === 'grid' ? 'carousel' : 'grid');

  return (
    <ApplicationsStyles id="applications" className="section">
      <SectionContentWrapper>
        <SectionHeading>
          Applications
        </SectionHeading>
        <ApplicationsSwitchWrapper
          handleToggle={handleToggle}
          setView={setView}
          view={view}
        />
        <ApplicationsGrid>
          { applications }
        </ApplicationsGrid>
      </SectionContentWrapper>
    </ApplicationsStyles>
  )
}

export default Applications;
