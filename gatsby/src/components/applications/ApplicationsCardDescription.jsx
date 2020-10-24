import React from 'react';
import styled from 'styled-components';

const ApplicationsCardDescriptionStyles = styled.div`
  p {
    margin-bottom: 0;
  }
`;

const ApplicationsCardDescription = ({ shortDescription }) => {
  return (
    <ApplicationsCardDescriptionStyles>
      <p>
        { shortDescription }
      </p>
    </ApplicationsCardDescriptionStyles>
  )
};

export default ApplicationsCardDescription;
