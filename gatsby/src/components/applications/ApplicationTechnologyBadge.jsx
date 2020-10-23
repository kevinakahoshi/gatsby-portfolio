import React from 'react';
import styled from 'styled-components';

const ApplicationTechnologyBadgeStyles = styled.span`
  background-image: linear-gradient(-45deg, #e64242, #e67442);
  color: var(--white);
  width: fit-content;
  transition: .3s all;
  font-weight: 300;
`;

const ApplicationTechnologyBadge = ({ technologyName }) => {
  return (
    <ApplicationTechnologyBadgeStyles>
      { technologyName }
    </ApplicationTechnologyBadgeStyles>
  )
}

export default ApplicationTechnologyBadge;
