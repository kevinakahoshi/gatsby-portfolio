import React from 'react';
import { useRef } from 'react';
import styled from 'styled-components';
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
`;

const Header = () => {
  const header = useRef(null);

  return (
    <HeaderStyles ref={header}>
      <Logo />
      <Navigation header={header} />
    </HeaderStyles>
  )
}

export default Header;
