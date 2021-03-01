import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react';
import {
  animateScroll as scroll
} from 'react-scroll';
import styled from 'styled-components';

// Components
import Logo from '../shared/Logo';
import NavigationHamburger from './NavigationHamburger';
import NavigationMobileDrawer from './NavigationMobileDrawer';
import NavigationDesktop from './NavigationDesktop';
import Overlay from './Overlay';
import useMenu from '../hooks/useMenu';
import { useRef } from 'react';

const HeaderStyles = styled.header`
  background: var(--white);
  position: sticky;
  top: 0;
  z-index: 20;

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

// const offset = -81;

const Header = () => {
  const [width, setWidth] = useState(851);
  const [isDesktop, setIsDesktop] = useState(false);
  const [offset, setOffset] = useState(-81);
  const headerRef = useRef();

  const handleResize = useCallback(() => setWidth(window.innerWidth), [width]);
  const handleScrollTop = () => scroll.scrollToTop();
  const {
    openMobileNav,
    showOverlay,
    handleShowOverlay,
    handleHideOverlay,
    handleClose,
    handleOpen
  } = useMenu();

  const handleLogoClick = () => {
    if (!isDesktop && openMobileNav) {
      handleClose();
      handleHideOverlay();
    }
    handleScrollTop();
  }

  const memoBurger = useMemo(() => (
    <NavigationHamburger
      handleOpen={handleOpen}
      handleClose={handleClose}
      handleHideOverlay={handleHideOverlay}
      openMobileNav={openMobileNav}
    />
  ), [openMobileNav]);

  const desktopOrMobile = isDesktop
    ? <NavigationDesktop
        offset={offset}
        navigationItems={navigationItems}
      />
    : memoBurger;

  const includeNavDrawer = !isDesktop
    ? <NavigationMobileDrawer
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

  const memoLogo = useMemo(() => <Logo />, []);

  // TODO: Research ways to make the resize more performant.  Can this be done
  //       strictly with CSS?
  useEffect(() => {
    if (width > 850) {
      setIsDesktop(() => true);
      handleClose();
      handleHideOverlay();
    } else {
      setIsDesktop(() => false);
      if (width > 335 && offset === -73) {
        setOffset(() => -81);
      } else if (width < 336 && offset === -81) {
        setOffset(() => -73);
      }
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [width, openMobileNav]);

  useEffect(() => {
    setWidth(() => window.innerWidth);
  }, []);

  return (
    <>
      <HeaderStyles id="header" ref={headerRef}>
        <div className="header-content-wrapper">
          <div
            className="logo-wrapper"
            onClick={handleLogoClick}
          >
            { memoLogo }
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

export default Header;
