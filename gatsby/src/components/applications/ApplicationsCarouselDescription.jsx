import React from 'react';
import styled from 'styled-components';

const ApplicationsCarouselDescriptionStyles = styled.div`

`;

const ApplicationsCarouselDescription = ({ projectName, mainDescription }) => {
  return (
    <ApplicationsCarouselDescriptionStyles>
      <h4>
        { projectName }
      </h4>
      <p>
        { mainDescription }
      </p>
    </ApplicationsCarouselDescriptionStyles>
  )
}

export default ApplicationsCarouselDescription;
