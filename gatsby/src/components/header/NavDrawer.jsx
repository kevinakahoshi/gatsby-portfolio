import React from 'react';
import styled from 'styled-components';
import CloseButton from './CloseButton';
import Hamburger from './Hamburger';

// Components
import NavigationLink from './NavigationLink';

const NavDrawerStyles = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: .2fr .8fr;
  position: fixed;
  top: 0;
  right: 0;
  transition: .3s all;

  .overlay {
    background: #000000;
    filter: opacity(.2);
  }

  .drawer {
    padding: 1rem;
    background: #ffffff;
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, .175);
    display: grid;
    align-items: center;
    grid-gap: 2rem;
    grid-template-rows: repeat(auto-fill, minmax(3rem, 1fr));
  }

  a {
    position: relative;
    padding: .5rem 0;
    transition: .3s all;
    text-align: center;
    font-size: 1.25rem;

    &:not(.active) {
      color: rgba(0,0,0,.5);
    }

    &:hover {
      color: rgba(0,0,0,.7);

      &::after {
        width: 100%;
        transition: .3s all;
      }
    }

    &.active {
      color: rgba(0,0,0,.9);
    }

    &::before,
    &::after  {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      margin: 0 auto;
      height: 3px;
      width: 100%;
      background-color: transparent;
      z-index: 1;
      display: inline-block;
      transition: .3s all;
    }

    &::after {
      width: 0%;
      background: linear-gradient(-45deg, #e64242, #e67442);
    }
  }
`;

const offset = -81;

const NavDrawer = ({ navigationItems }) => {
  const drawerLinks = navigationItems.map((navItem) => {
    return (
      <NavigationLink
        key={navItem.to}
        to={navItem.to}
        offset={offset}
        text={navItem.text}
      />
    )
  })

  return (
    <NavDrawerStyles>
      <div className="overlay" />
      <div className="drawer">
        <CloseButton />
        { drawerLinks }
      </div>
    </NavDrawerStyles>
  )
}

export default NavDrawer;
