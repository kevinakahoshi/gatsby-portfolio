import React from 'react';
import styled from 'styled-components';
import {
  FiExternalLink as ExternalLink,
  FiGithub as GitHub
} from 'react-icons/fi'

const ApplicationsCardButtonsStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;

  a {
    text-align: center;
    color: var(--link-inactive-grey);
    border: 2px solid var(--link-inactive-grey);
    padding: .75rem;
    border-radius: .25rem;
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    justify-content: center;
    grid-gap: .5rem;
    text-decoration: none;

    &:hover {
      color: #000000B3;
      border-color: #000000B3;
    }
  }
`;

const ApplicationsCardButtons = ({ gitHubLink, liveLink }) => (
  <ApplicationsCardButtonsStyles>
    <a
      aria-hidden={!liveLink}
      disabled={gitHubLink}
      href={gitHubLink}
      rel="noopener noreferrer"
      target="_blank"
      data-deployed={!!liveLink}
      disabled={!liveLink}
    >
      <GitHub className="icon" />
      <span aria-hidden={!liveLink}>
        GitHub
      </span>
    </a>
    <a
      aria-hidden={!liveLink}
      disabled={liveLink}
      href={liveLink}
      rel="noopener noreferrer"
      target="_blank"
      data-deployed={!!liveLink}
      disabled={!liveLink}
    >
      <ExternalLink className="icon" />
      <span aria-hidden={!liveLink}>
        Live
      </span>
    </a>
  </ApplicationsCardButtonsStyles>
);

export default ApplicationsCardButtons;
