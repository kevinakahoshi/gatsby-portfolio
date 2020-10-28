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
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 2rem 0;
  transition: .3s all;

  .icons {
    cursor: pointer;

    &:not(:hover) {
      color: rgba(0,0,0,.5);
    }

    &:hover {
      color: rgba(0,0,0,.7);
    }
  }
`;

const ApplicationsSwitchWrapper = ({ handleToggle, setView, view }) => {
  return (
    <ApplicationsSwitchWrapperStyles>
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
    </ApplicationsSwitchWrapperStyles>
  )
};

export default ApplicationsSwitchWrapper;
