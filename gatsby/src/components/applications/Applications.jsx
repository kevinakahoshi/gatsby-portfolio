import React, {
  useEffect,
  useMemo,
  useState
} from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';

import SectionContentWrapper from '../shared/SectionContentWrapper';
import SectionHeading from '../shared/SectionHeading';
import ApplicationsCard from './ApplicationsCard';
import ApplicationsGrid from './ApplicationsGrid';
import ApplicationsSwitchWrapper from './ApplicationsSwitchWrapper';
import ApplicationsSwitch from './ApplicationsSwitch';
import ApplicationsCarousel from './ApplicationsCarousel';

const ApplicationsStyles = styled.section`
  background: #ffffff;
`;

const Applications = () => {
  const {
    allApplications: {
      applications
    }
  } = useStaticQuery(graphql`
    query {
      allApplications: sanityProjectsSection {
        applications: projectsSelectionAndOrder {
          altText
          gitHubLink
          id
          liveLink
          mainDescription
          projectName
          shortDescription
          technologiesUsed
          thumbnail {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  `);

  const [view, setView] = useState('grid');

  const applicationsCards = applications.map((project, index) => (
    <ApplicationsCard
      key={project.id}
      application={project}
    />
  ));

  const handleToggle = () => setView((sectionView) => {
    const view = sectionView === 'grid' ? 'carousel' : 'grid';
    window.localStorage.sectionView = view;
    return view;
  });

  useEffect(() => {
    setView(() => window.localStorage.sectionView || 'grid');
  },[]);

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
        {view === 'grid'
          ? <ApplicationsGrid>
              { applicationsCards }
            </ApplicationsGrid>
          : <ApplicationsCarousel
              applications={applications}
            />}
      </SectionContentWrapper>
    </ApplicationsStyles>
  )
};

export default Applications;
