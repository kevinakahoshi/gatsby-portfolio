import React from 'react';
import styled from 'styled-components';

import ApplicationsImage from './ApplicationsImage';

const ApplicationsSkeletonCardStyles = styled.div`
  background: var(--white);
  border-radius: .25rem;
  box-shadow: 0 1rem 3rem rgba(0,0,0,.175);
  padding: 1rem;
  display: grid;
  grid-gap: 1rem;
  grid-template-rows: auto 1fr 1fr;

  p {
    margin-bottom: 0;
  }
`;

const ApplicationsSkeletonCard = ({ application }) => {
  return (
    <ApplicationsSkeletonCardStyles>
      <ApplicationsImage
        projectName={projectName}
      />
      <div className="short-description-wrapper">
        <p>
          {shortDescription}
        </p>
      </div>
      <div className="technologies-used">
        <h5>
          Developed Using
        </h5>
      </div>
    </ApplicationsSkeletonCardStyles>
  )
};

export default ApplicationsSkeletonCard;
