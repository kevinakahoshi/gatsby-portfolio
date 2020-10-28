import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

// Components
import ApplicationsCardImage from './ApplicationsCardImage';

const ApplicationsCarouselStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
`;

const ApplicationsCarousel = ({ projects }) => {
  const applicationImages = projects.map((project) => {
    return <ApplicationsCardImage
            key={project.id}
            altText={project.altText}
            projectName={project.projectName}
            thumbnail={project.thumbnail}
            view="carousel"
          />
    });

  return (
    <ApplicationsCarouselStyles>
      { applicationImages }
    </ApplicationsCarouselStyles>
  )
}

export default ApplicationsCarousel;
