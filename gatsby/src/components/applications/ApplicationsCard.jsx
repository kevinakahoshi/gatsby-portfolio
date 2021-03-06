import React from 'react';
import styled from 'styled-components';
import { OutboundLink } from 'gatsby-plugin-google-gtag';

import ApplicationsImage from './ApplicationsImage';
import ApplicationsCardDescription from './ApplicationsCardDescription';
import ApplicationsCardTechnologies from './ApplicationsCardTechnologies';
import ApplicationsCardButtons from './ApplicationsCardButtons';
import ApplicationsCardSkeletonDescription from './ApplicationsSkeletonDescription';
import ApplicationsSkeletonTechnologies from './ApplicationsSkeletonTechnologies';

const ApplicationsCardStyles = styled.div`
  background: var(--white);
  border-radius: var(--border-radius);
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);
  padding: 1rem;
  display: grid;
  grid-gap: 1rem;
  grid-template-rows: auto 1fr 1fr;
  max-width: 500px;
  margin: auto;
  height: 100%;
  width: 100%;

  .application-card-image {
    border-radius: var(--border-radius);
    overflow: hidden;
  }

  .skeleton-wrapper {
    text-align: center;
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
    thumbnail,
  } = application;

  const imageBlock = liveLink ? (
    <OutboundLink
      href={liveLink}
      target="_blank"
      rel="noopener noreferrer"
      data-deployed={!!liveLink}
      className="application-card-image"
    >
      <ApplicationsImage
        altText={altText}
        projectName={projectName}
        thumbnail={thumbnail}
        view="grid"
      />
    </OutboundLink>
  ) : (
    <div className="application-card-image">
      <ApplicationsImage
        altText={altText}
        projectName={projectName}
        thumbnail={thumbnail}
        view="grid"
        disabled={true}
      />
    </div>
  );

  const descriptionBlock = liveLink ? (
    <ApplicationsCardDescription shortDescription={shortDescription} />
  ) : (
    <ApplicationsCardSkeletonDescription />
  );

  const technologiesBlock = liveLink ? (
    <ApplicationsCardTechnologies technologiesUsed={technologiesUsed} />
  ) : (
    <div className="skeleton-wrapper">
      <ApplicationsSkeletonTechnologies />
    </div>
  );

  return (
    <ApplicationsCardStyles>
      {imageBlock}
      {descriptionBlock}
      {technologiesBlock}
      <ApplicationsCardButtons gitHubLink={gitHubLink} liveLink={liveLink} />
    </ApplicationsCardStyles>
  );
};

export default ApplicationsCard;
