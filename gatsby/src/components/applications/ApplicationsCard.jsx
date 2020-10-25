import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

import ApplicationsCardImage from './ApplicationsCardImage';
import ApplicationsCardDescription from './ApplicationsCardDescription';
import ApplicationsCardTechnologies from './ApplicationsCardTechnologies';
import ApplicationsCardButtons from './ApplicationsCardButtons';
import ApplicationsCardSkeletonDescription from './ApplicationsSkeletonDescription';
import ApplicationsSkeletonTechnologies from './ApplicationsSkeletonTechnologies';

const ApplicationsCardStyles = styled.div`
  background: var(--white);
  border-radius: .25rem;
  box-shadow: 0 1rem 3rem rgba(0,0,0,.175);
  padding: 1rem;
  display: grid;
  grid-gap: 1rem;
  grid-template-rows: auto 1fr 1fr;
  max-width: 500px;
  margin: auto;
  height: 100%;
  width: 100%;

  p {
    margin-bottom: 0;
  }

  a[data-deployed="false"] {
    opacity: .5;
    pointer-events: none;
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

  const descriptionBlock = liveLink
    ? <ApplicationsCardDescription shortDescription={shortDescription} />
    : <ApplicationsCardSkeletonDescription />;

  const technologiesBlock = liveLink
    ? <ApplicationsCardTechnologies technologiesUsed={technologiesUsed} />
    : <ApplicationsSkeletonTechnologies />;

  return (
    <ApplicationsCardStyles>
      <a
        href={liveLink}
        target="_blank"
        rel="noopener noreferrer"
        data-deployed={!!liveLink}
      >
        <ApplicationsCardImage
          altText={altText}
          projectName={projectName}
          thumbnail={thumbnail}
        />
      </a>
      { descriptionBlock }
      { technologiesBlock }
      <ApplicationsCardButtons
        gitHubLink={gitHubLink}
        liveLink={liveLink}
      />
    </ApplicationsCardStyles>
  )
};

export default ApplicationsCard;
