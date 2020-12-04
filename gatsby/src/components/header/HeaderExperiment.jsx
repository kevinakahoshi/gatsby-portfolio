import React, {
  useCallback,
  useEffect,
  useState
} from 'react';
import {
  animateScroll as scroll
} from 'react-scroll';
import styled from 'styled-components';

// Components
import Logo from '../shared/Logo';
import HamburgerExperiment from './HamburgerExperiment';
import NavDrawerExperiment from './NavDrawerExperiment';
import NavigationDesktop from './NavigationDesktop';
import NavigationMobileExperiment from './NavigationMobileExperiment';
import Overlay from './Overlay';

const HeaderStyles = styled.header`
  background: var(--white);
  position: sticky;
  top: 0;
  z-index: 2;

  .header-content-wrapper {
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, .175);
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: auto 1fr;
    padding: 1rem;
    position: relative;
    z-index: 10;

    .logo-wrapper {
      cursor: pointer;
      -webkit-tap-highlight-color: rgba(0,0,0,0);
    }

    .link-wrapper {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      align-content: center;
    }
  }
`;

const navigationItems = [
  {
    to: 'about',
    text: 'About Me'
  },
  {
    to: 'skills',
    text: 'Skills'
  },
  {
    to: 'tools',
    text: 'Tools'
  },
  {
    to: 'applications',
    text: 'Applications'
  },
  {
    to: 'contact',
    text: 'Contact'
  }
];

const offset = -81;
const body = document.querySelector('body');

const HeaderExperiment = ({  }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isDesktop, setIsDesktop] = useState(false);
  const [openMobileNav, setOpenMobileNav] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleResize = useCallback(() => setWidth(window.innerWidth), [width]);
  const handleScrollTop = () => scroll.scrollToTop();
  const handleShowOverlay = () => setShowOverlay(() => true);
  const handleHideOverlay = () => setShowOverlay(() => false);
  const handleClose = () => setOpenMobileNav(() => false);
  const handleOpen = () => {
    setOpenMobileNav(() => true);
    handleShowOverlay();
  };
  const handleLogoClick = () => {
    if (!isDesktop && openMobileNav) {
      handleClose();
      handleHideOverlay();
    }
    handleScrollTop();
  }

  const desktopOrMobile = isDesktop
    ? <NavigationDesktop
        offset={offset}
        navigationItems={navigationItems}
      />
    : <HamburgerExperiment
        handleOpen={handleOpen}
        handleClose={handleClose}
        handleHideOverlay={handleHideOverlay}
        openMobileNav={openMobileNav}
      />;

  const includeNavDrawer = !isDesktop
    ? <NavDrawerExperiment
        offset={offset}
        navigationItems={navigationItems}
        openMobileNav={openMobileNav}
        handleClose={handleClose}
        handleHideOverlay={handleHideOverlay}
        showOverlay={showOverlay}
      />
    : null;

  const hideOrShowOverlay = showOverlay
    ? <Overlay
        handleClose={handleClose}
        openMobileNav={openMobileNav}
      />
    : null;

  useEffect(() => {
    if (width > 850) {
      setIsDesktop(() => true);
      handleClose();
      handleHideOverlay();
    } else {
      setIsDesktop(() => false);
    }

    // TODO: Find out how to do this the Gatsby way and not this unsophisticated way
    openMobileNav ? body.classList.add('no-scroll') : body.classList.remove('no-scroll');

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [width, openMobileNav]);


  return (
    <>
      <HeaderStyles id="header">
        <div className="header-content-wrapper">
          <div
            className="logo-wrapper"
            onClick={handleLogoClick}
          >
            <Logo />
          </div>
          <div className="link-wrapper">
            { desktopOrMobile }
          </div>
        </div>
        { includeNavDrawer }
      </HeaderStyles>
      { hideOrShowOverlay }
    </>
  )
}

export default HeaderExperiment;
