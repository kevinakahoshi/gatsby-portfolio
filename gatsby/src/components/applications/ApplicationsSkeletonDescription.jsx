import React from 'react';
import styled from 'styled-components';
import { Pulse } from '../../styles/Keyframes';

const ApplicationsSkeletonDescriptionStyles = styled.div`
  display: grid;
  grid-template-rows: repeat(${({ numberOfRows }) => numberOfRows || 3}, 1.35rem);
  grid-gap: .25rem;

${({ groupSelectorString }) => groupSelectorString || '.row-1-bar, .row-2-bar, .row-3-bar'} {
    width: 100%;
    border-radius: .25rem;
    background: #f1f1f1;
    animation: ${Pulse} 1.25s linear infinite;
  }
`;

const ApplicationsSkeletonDescription = ({ numberOfRows = 0 }) => {
  if (typeof numberOfRows !== 'number' || numberOfRows < 0) {
    numberOfRows = 0;
  }

  const rowClasses = new Array(numberOfRows || 3)
    .fill(undefined)
    .map((element, index) => `row-${index + 1}-bar`);

  const rowElements = rowClasses
    .map((name) => <div key={name} className={name} />);

  const groupSelectorString = rowClasses
    .map((name) => `.${name}`)
    .join(', ');

  return (
    <ApplicationsSkeletonDescriptionStyles
      groupSelectorString={groupSelectorString}
      numberOfRows={numberOfRows}
    >
      { rowElements }
    </ApplicationsSkeletonDescriptionStyles>
  )
};

export default ApplicationsSkeletonDescription;
