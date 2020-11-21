import React, {
  useCallback
} from 'react';
import styled from 'styled-components';
import CloseButton from './CloseButton';
import Hamburger from './Hamburger';

// Components
import NavigationLink from './NavigationLink';
import useMenu from '../hooks/useMenu';
import { useMemo } from 'react';
import { useState } from 'react';
import Overlay from './Overlay';

// TODO: Create the nav drawer with overlay and the drawer as part of the inside
// of the main element

const NavDrawerStyles = styled.div`
  height: 100%;
  width: 80%;
  position: fixed;
  top: 0;
  right: 0;
  transition: .3s all;
/*
  background: #00000090;

  &:not(.open) {
    display: none;
  }

  &.open {
    display: block;
  } */

  &:not(.open) {
    transform: translateX(150%);
  }

  &.open {
    transform: translateX(0%);
  }

  .drawer {
    grid-column: 2;
    padding: 1rem;
    background: #ffffff;
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, .175);
    display: grid;
    align-items: center;
    grid-gap: 2rem;
    grid-template-rows: repeat(auto-fill, minmax(3rem, 1fr));
    background: #ffffff;
    transition: .3s all;
    height: 100%;
    overflow-y: scroll;

    /* &:not(.open) {
      transform: translateX(150%);
    }

    &.open {
      transform: translateX(0%);
    } */

    &::after {
      content: '';
      height: 1rem;
    }
  }

  a {
    position: relative;
    padding: .5rem 0;
    transition: .3s all;
    text-align: center;
    font-size: 1.25rem;
    width: fit-content;
    margin: auto;

    &:not(.active) {
      color: var(--link-inactive-grey);
    }

    &:hover {
      color: var(--link-inactive-hover-grey);

      &::after {
        width: 100%;
        transition: .3s all;
      }
    }

    &.active {
      color: var(--link-active-grey);
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

const NavDrawer = ({
  offset,
  navigationItems,
  open,
  sliding,
  handleClose,
  toggleShowOverlay
}) => {
  const drawerLinks = useMemo(() => navigationItems.map((navItem) => {
      return (
        <NavigationLink
          key={navItem.to}
          to={navItem.to}
          offset={offset}
          text={navItem.text}
          handleClose={handleClose}
        />
      )
    }), [navigationItems]);

  const handleTransition = () => {
    if (open) return;
    toggleShowOverlay();
  }

  return (
    <NavDrawerStyles
      className={open ? 'open' : ''}
      onTransitionEnd={handleTransition}>
      <div className={`drawer`}>
        <CloseButton
          handleClose={handleClose}
        />
        { drawerLinks }
      </div>
    </NavDrawerStyles>
  )
}

export default NavDrawer;
