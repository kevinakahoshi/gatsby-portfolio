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
  padding-top: 1rem;
  border-top: 1px solid var(--medium-grey);

  a {
    text-align: center;
    color: #00000080;
    border: 2px solid #00000080;
    padding: .75rem;
    border-radius: .25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;

    &:hover {
      color: #000000B3;
      border-color: #000000B3;
    }

    .icon {
      height: 18px;
      width: auto;
    }
  }
`;

const ApplicationsCardButtons = ({ gitHubLink = null, liveLink = null }) => {
  return (
    <ApplicationsCardButtonsStyles>
      <a
        disabled={gitHubLink}
        href={gitHubLink}
        rel="noopener noreferrer"
        target="_blank"
        data-deployed={!!liveLink}
      >
        <GitHub className="icon" />
        <span>
          GitHub
        </span>
      </a>
      <a
        disabled={liveLink}
        href={liveLink}
        rel="noopener noreferrer"
        target="_blank"
        data-deployed={!!liveLink}
      >
        <ExternalLink className="icon" />
        <span>
          Live
        </span>
      </a>
    </ApplicationsCardButtonsStyles>
  )
};

export default ApplicationsCardButtons;