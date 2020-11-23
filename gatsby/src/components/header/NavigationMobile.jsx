import React, {
  useState
} from 'react';
import { useEffect } from 'react';

// Components
import Hamburger from './Hamburger';
import NavDrawer from './NavDrawer';
import Overlay from './Overlay';

const NavigationMobile = ({ offset, navigationItems }) => {
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
      <Hamburger handleOpen={handleOpen} />
      { hideOrShowOverlay }
      <NavDrawer
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

export default NavigationMobile;
