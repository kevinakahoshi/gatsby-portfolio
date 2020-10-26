import React from 'react';
import styled from 'styled-components';

const ApplicationsSwitchStyles = styled.button`
  width: 3rem;
  background: var(--medium-grey);
  margin: auto;
  border-radius: .25rem;
  margin-bottom: 2rem;
  font-size: 0;
  padding: 0;
  outline: none;
  border: none;

  .toggler {
    height: 1.5rem;
    width: 1.5rem;
    border: 1px solid var(--medium-grey);
    border-radius: .25rem;
    background: var(--white);
    transition: .3s all;

    &[data-view="grid"] {
      transform: translateX(0%);
    }

    &[data-view="carousel"] {
      transform: translateX(100%);
    }
  }
`;

const ApplicationsSwitch = ({ handleToggle, view }) => {
  return (
    <ApplicationsSwitchStyles
      role="button"
      onClick={handleToggle}
    >
      <div
        className="toggler"
        data-view={view}
      />
    </ApplicationsSwitchStyles>
  )
};

export default ApplicationsSwitch;
