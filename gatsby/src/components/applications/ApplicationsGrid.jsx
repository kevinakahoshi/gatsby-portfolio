import React from 'react';
import styled from 'styled-components';

const ApplicationsGridStyles = styled.div`
  display: grid;
  grid-template-columns: var(--columns);
  grid-gap: 1.5rem;

  @media (min-width: 851px) {
    --columns: 1fr 1fr 1fr;
  }

  @media (max-width: 850px) and (min-width: 768px) {
    --columns: 1fr 1fr;
  }

  @media (max-width: 767px) {
    --columns: 1fr;
  }
`;

const ApplicationsGrid = ({ children }) => (
  <ApplicationsGridStyles>
    { children }
  </ApplicationsGridStyles>
);

export default ApplicationsGrid;
