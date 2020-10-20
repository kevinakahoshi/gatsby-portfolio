import React, {
  useCallback,
  useEffect,
  useState
} from 'react';
import styled from 'styled-components';
import Hamburger from './Hamburger';
import Logo from './Logo';
import NavDrawer from './NavDrawer';
import Navigation from './Navigation';

const HeaderStyles = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: auto 1fr;
  padding: 1rem;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, .175);
  position: sticky;
  background: #FFFFFF;
  top: 0;
  z-index: 1;

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
]

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const handleResize = useCallback(() => setWidth(window.innerWidth), [width]);
  const navLinksOrHamburger = width > 850
    ? <Navigation navigationItems={navigationItems} />
    : <NavDrawer navigationItems={navigationItems} />
    // : <Hamburger navigationItems={navigationItems} />

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <HeaderStyles>
      <Logo />
      <div className="link-wrapper">
        { navLinksOrHamburger }
      </div>
    </HeaderStyles>
  )
}

export default Header;
