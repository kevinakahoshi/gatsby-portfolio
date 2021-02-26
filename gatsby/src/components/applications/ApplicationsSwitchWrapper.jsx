import React from 'react';
import styled from 'styled-components';
import {
  FiGrid as Grid,
  FiImage as Carousel
} from 'react-icons/fi';

// Components
import ApplicationsSwitch from './ApplicationsSwitch';
import ApplicationsToggleTooltip from './ApplicationsToggleTooltip';

const ApplicationsSwitchWrapperStyles = styled.div`
  display: flex;
  margin: 2rem 0;
  transition: .3s all;
  justify-content: center;

  .toggle-switch-container {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-gap: 1rem;
    align-items: center;
  }

  .icons {
    cursor: pointer;

    &:not(:hover) {
      color: var(--link-inactive-grey);
    }

    &:hover {
      color: var(--link-inactive-hover-grey);
    }
  }
`;

const ApplicationsSwitchWrapper = ({ handleToggle, setView, view }) => {
  return (
    <ApplicationsSwitchWrapperStyles>
      <div className="toggle-switch-container">
        <ApplicationsToggleTooltip
          direction="left"
          text="Grid View">
          <Grid
            onClick={() => view !== 'grid' && setView('grid')}
            className="icons"
          />
        </ApplicationsToggleTooltip>
        <ApplicationsSwitch
          handleToggle={handleToggle}
          view={view}
        />
        <ApplicationsToggleTooltip
          direction="right"
          text="Carousel View">
          <Carousel
            onClick={() => view !== 'carousel' && setView('carousel')}
            className="icons"
          />
        </ApplicationsToggleTooltip>
      </div>
    </ApplicationsSwitchWrapperStyles>
  )
};

export default ApplicationsSwitchWrapper;
