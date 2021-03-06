import React from 'react';
import styled from 'styled-components';

const ApplicationsSwitchStyles = styled.button`
  width: 3rem;
  margin: 0;
  border-radius: var(--border-radius);
  font-size: 0;
  padding: 0;
  outline: none;
  border: none;
  transition: background 0.3s;

  &:not(:hover) {
    background: var(--link-inactive-grey);
  }

  &:hover {
    background: var(--link-inactive-hover-grey);
  }

  .toggler {
    height: 1.5rem;
    width: 1.5rem;
    border: 1px solid var(--medium-grey);
    border-radius: var(--border-radius);
    background: var(--white);
    transition: transform 0.3s;

    &[data-view='grid'] {
      transform: translateX(0%);
    }

    &[data-view='carousel'] {
      transform: translateX(100%);
    }
  }
`;

const ApplicationsSwitch = ({ handleToggle, view }) => (
  <ApplicationsSwitchStyles
    aria-label="applications-switch"
    role="button"
    name="applications-switch"
    onClick={handleToggle}
  >
    <div className="toggler" data-view={view} />
  </ApplicationsSwitchStyles>
);

export default ApplicationsSwitch;
