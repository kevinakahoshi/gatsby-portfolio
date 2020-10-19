import React, {
  useEffect,
  useState
} from 'react';
import styled from 'styled-components';
import Hamburger from './Hamburger';
import Logo from './Logo';
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

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  }, []);

  return (
    <HeaderStyles>
      <Logo />
      <div className="link-wrapper">
        { width > 850
        ? <Navigation />
        : <Hamburger /> }
      </div>
    </HeaderStyles>
  )
}

export default Header;
