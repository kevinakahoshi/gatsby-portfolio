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
import NavigationDesktop from './NavigationDesktop';
import NavigationMobileExperiment from './NavigationMobileExperiment';

const HeaderStyles = styled.header`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: auto 1fr;
  padding: 1rem;
  /* box-shadow: 0 1rem 3rem rgba(0, 0, 0, .175); */
  z-index: 1;
  border-bottom: 1px solid var(--medium-grey);
  position: sticky;
  background: #FFFFFF;
  top: 0;

  .logo-wrapper {
    cursor: pointer;
  }

  .link-wrapper {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    align-content: center;
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

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const handleResize = useCallback(() => setWidth(window.innerWidth), [width]);
  const offset = -81;

  const desktopOrMobile = width > 850
    ? <NavigationDesktop
      offset={offset}
      navigationItems={navigationItems}
    />
    : <NavigationMobileExperiment
      offset={offset}
      navigationItems={navigationItems}
    />;

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleScrollTop = () => scroll.scrollToTop();

  return (
    <HeaderStyles id="header">
      <div
        className="logo-wrapper"
        onClick={handleScrollTop}
      >
        <Logo />
      </div>
      <div className="link-wrapper">
        { desktopOrMobile }
      </div>
    </HeaderStyles>
  )
}

export default Header;
