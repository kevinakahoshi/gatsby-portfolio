import React from 'react';
import styled from 'styled-components';

import ApplicationsCarousel from './ApplicationsCarousel';

const ApplicationsCarouselViewStyles = styled.div`
  display: grid;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;
  }
`;

const ApplicationsCarouselView = ({ projects }) => {
  return (
    <ApplicationsCarouselViewStyles>
      <ApplicationsCarousel
        projects={projects}
      />
    </ApplicationsCarouselViewStyles>
  )
};

export default ApplicationsCarouselView;
