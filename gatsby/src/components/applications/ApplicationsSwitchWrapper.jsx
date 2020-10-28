import React from 'react';
import styled from 'styled-components';
import {
  FiGrid as Grid,
  FiImage as Carousel
} from 'react-icons/fi';

// Components
import ApplicationsSwitch from './ApplicationsSwitch';

const ApplicationsSwitchWrapperStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 2rem 0;
  transition: .3s all;

  &:not(:hover) {
    color: rgba(0,0,0,.5);
  }

  &:hover {
    color: rgba(0,0,0,.7);
  }

  .icons {
    cursor: pointer;
  }
`;

const ApplicationsSwitchWrapper = ({ handleToggle, setView, view }) => {
  return (
    <ApplicationsSwitchWrapperStyles>
      <Grid
        onClick={() => view !== 'grid' && setView('grid')}
        className="icons"
      />
      <ApplicationsSwitch
        handleToggle={handleToggle}
        view={view}
      />
      <Carousel
        onClick={() => view !== 'carousel' && setView('carousel')}
        className="icons"
      />
    </ApplicationsSwitchWrapperStyles>
  )
};

export default ApplicationsSwitchWrapper;
