import React from 'react';
import styled from 'styled-components';
import {
  FiExternalLink as ExternalLink,
  FiGithub as GitHub
} from 'react-icons/fi'

const ApplicationsCarouselLinksStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
`;

const ApplicationsCarouselLinks = ({ liveLink, gitHubLink }) => {
  return (
    <ApplicationsCarouselLinksStyles>
      <a
        data-deployed={!!liveLink}
        disabled={!liveLink}
        href={gitHubLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHub />
        <span>
          GitHub
        </span>
      </a>
      <span
        className="separator">
        |
      </span>
      <a
        data-deployed={!!liveLink}
        disabled={!liveLink}
        href={liveLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ExternalLink />
        <span>
          Live
        </span>
      </a>
    </ApplicationsCarouselLinksStyles>
  )
};

export default ApplicationsCarouselLinks;
