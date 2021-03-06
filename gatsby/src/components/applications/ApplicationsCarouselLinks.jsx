import React from 'react';
import styled from 'styled-components';
import {
  FiExternalLink as ExternalLink,
  FiGithub as GitHub
} from 'react-icons/fi';

import ApplicationsCardButtons from './ApplicationsCardButtons';

const ApplicationsCarouselLinksStyles = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const ApplicationsCarouselLinks = ({ gitHubLink, liveLink }) => (
  <ApplicationsCarouselLinksStyles>
    <ApplicationsCardButtons
      gitHubLink={gitHubLink}
      liveLink={liveLink}
    />
  </ApplicationsCarouselLinksStyles>
);

export default ApplicationsCarouselLinks;
