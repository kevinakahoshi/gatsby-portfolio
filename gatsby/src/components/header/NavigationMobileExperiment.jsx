import React, {
  useState
} from 'react';
import { useEffect } from 'react';

// Components
import Hamburger from './Hamburger';
import HamburgerExperiment from './HamburgerExperiment';
import NavDrawer from './NavDrawer';
import NavDrawerExperiment from './NavDrawerExperiment';
import Overlay from './Overlay';

const NavigationMobileExperiment = ({ offset, navigationItems }) => {
  const [openMobileNav, setOpenMobileNav] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const body = document.querySelector('body');

  const handleShowOverlay = () => setShowOverlay(true);
  const handleHideOverlay = () => setShowOverlay(false);
  const handleOpen = () => {
    setOpenMobileNav(true);
    handleShowOverlay();
  };
  const handleClose = () => setOpenMobileNav(false);

  // TODO: Find out how to do this the Gatsby way and not this unsophisticated way
  useEffect(() => {
    openMobileNav ? body.classList.add('no-scroll') : body.classList.remove('no-scroll');
  }, [openMobileNav])

  const navClass = openMobileNav ? 'open' : '';

  const hideOrShowOverlay = showOverlay
    ? <Overlay
        handleClose={handleClose}
        openMobileNav={openMobileNav}
      />
    : null;

  return (
    <nav className={navClass}>
      <HamburgerExperiment
        handleOpen={handleOpen}
        handleClose={handleClose}
        handleHideOverlay={handleHideOverlay}
        openMobileNav={openMobileNav}
      />
      { hideOrShowOverlay }
      <NavDrawerExperiment
        offset={offset}
        navigationItems={navigationItems}
        openMobileNav={openMobileNav}
        handleClose={handleClose}
        handleHideOverlay={handleHideOverlay}
        showOverlay={showOverlay}
      />
    </nav>
  )
}

export default NavigationMobileExperiment;
