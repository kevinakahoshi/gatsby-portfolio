import React from 'react';
import styled from 'styled-components';

const ApplicationsCardButtonsStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;

  a {
    text-align: center;
    border: 2px solid var(--dark-grey);
    padding: .75rem;
    border-radius: .25rem;
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
      >
          GitHub
      </a>
      <a
        disabled={liveLink}
        href={liveLink}
        rel="noopener noreferrer"
        target="_blank"
      >
        Live
      </a>
    </ApplicationsCardButtonsStyles>
  )
};

export default ApplicationsCardButtons;
