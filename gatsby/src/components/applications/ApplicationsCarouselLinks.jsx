import React from 'react';
import styled from 'styled-components';
import {
  FiExternalLink as ExternalLink,
  FiGithub as GitHub
} from 'react-icons/fi'

const ApplicationsCarouselLinksStyles = styled.div`
  display: flex;
  justify-content: flex-start;

  .link-wrapper {
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-gap: 1rem;

    a {
      display: grid;
      grid-gap: .5rem;
      grid-template-columns: 1fr auto;
      align-items: center;
    }
  }
`;

const ApplicationsCarouselLinks = ({ liveLink, gitHubLink }) => {
  return (
    <ApplicationsCarouselLinksStyles>
      <div className="link-wrapper">
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
      </div>
    </ApplicationsCarouselLinksStyles>
  )
};

export default ApplicationsCarouselLinks;
