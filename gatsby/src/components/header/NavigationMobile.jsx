import React, {
  useState
} from 'react';

// Components
import Hamburger from './Hamburger';
import NavDrawer from './NavDrawer';
import useMenu from '../hooks/useMenu';
import Overlay from './Overlay';
import styled from 'styled-components';

const NavigationMobileStyles = styled.nav`
  &:not(.open) {
    .overlay {
      opacity: 0;
    }
  }

  &.open {
    .overlay {
      opacity: .5;
    }
  }
`;

const NavigationMobile = ({ offset, navigationItems }) => {
  const [open, setOpen] = useState(false);
  const [sliding, setSliding] = useState(false);

  const [showOverlay, setShowOverlay] = useState(false);

  const toggleShowOverlay = () => setShowOverlay((currentBool) => !currentBool);
  const handleOpen = () => {
    setOpen(true);
    toggleShowOverlay();
  };
  const handleClose = () => setOpen(false);

  return (
    <NavigationMobileStyles
      className={open ? 'open' : ''}
    >
      <Hamburger handleOpen={handleOpen} />
      { showOverlay
        ? <Overlay handleClose={handleClose} />
        : null }
      <NavDrawer
        offset={offset}
        navigationItems={navigationItems}
        open={open}
        sliding={sliding}
        handleClose={handleClose}
        toggleShowOverlay={toggleShowOverlay}
      />
    </NavigationMobileStyles>
  )
}

export default NavigationMobile;
