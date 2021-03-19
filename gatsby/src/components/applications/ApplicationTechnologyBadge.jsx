import React from 'react';
import styled from 'styled-components';

const ApplicationTechnologyBadgeStyles = styled.span`
  background-image: linear-gradient(-45deg, #e64242, #e67442);
  color: var(--white);
  width: fit-content;
  font-weight: 300;
  display: inline-block;
  padding: .25em .4em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: .25rem;
  margin: .125rem;
`;

const ApplicationTechnologyBadge = ({ technologyName }) => (
  <ApplicationTechnologyBadgeStyles>
    { technologyName }
  </ApplicationTechnologyBadgeStyles>
);

export default ApplicationTechnologyBadge;
