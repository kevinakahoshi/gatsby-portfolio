import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

import ApplicationsCardImage from './ApplicationsCardImage';
import ApplicationsCardDescription from './ApplicationsCardDescription';
import ApplicationsCardTechnologies from './ApplicationsCardTechnologies';

const ApplicationsCardStyles = styled.div`
  background: var(--white);
  border-radius: .25rem;
  box-shadow: 0 1rem 3rem rgba(0,0,0,.175);
  padding: 1rem;
  display: grid;
  grid-gap: 1rem;
  grid-template-rows: auto 1fr 1fr;

  p {
    margin-bottom: 0;
  }
`;

const ApplicationsCard = ({ application }) => {
  const {
    altText,
    gitHubLink,
    liveLink,
    projectName,
    shortDescription,
    technologiesUsed,
    thumbnail
  } = application;

  return (
    <ApplicationsCardStyles>
      <ApplicationsCardImage
        altText={altText}
        projectName={projectName}
        thumbnail={thumbnail}
      />
      <ApplicationsCardDescription
        shortDescription={shortDescription}
      />
      <ApplicationsCardTechnologies
        technologiesUsed={technologiesUsed}
      />
    </ApplicationsCardStyles>
  )
};

export default ApplicationsCard;
