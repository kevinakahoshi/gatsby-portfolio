import React from 'react';
import styled from 'styled-components';

// Components
import CloseButton from './CloseButton';
import Hamburger from './Hamburger';
import NavigationLink from './NavigationLink';

const NavDrawerStyles = styled.div`
  height: calc(100% - 81px);
  width: 80%;
  max-width: 400px;
  position: fixed;
  bottom: 0;
  right: 0;
  transition: .3s all;

  &:not(.open) {
    transform: translateX(100%);

    .drawer {
      box-shadow: none;
    }
  }

  &.open {
    transform: translateX(0%);

    .drawer {
      box-shadow: 0 1rem 3rem rgba(0, 0, 0, .175);
    }
  }

  .drawer {
    grid-column: 2;
    padding: 1rem;
    background: #ffffff;
    display: grid;
    align-items: center;
    grid-gap: 2rem;
    grid-template-rows: repeat(auto-fill, minmax(3rem, 1fr));
    background: #ffffff;
    transition: .3s all;
    height: 100%;
    overflow-y: scroll;

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

const NavDrawerExperiment = ({
  offset,
  navigationItems,
  openMobileNav,
  sliding,
  handleClose,
  handleHideOverlay,
  showOverlay
}) => {
  const navClass = openMobileNav ? 'open' : '';
  const navDrawerLinks = navigationItems.map((navItem) => (
    <NavigationLink
      key={navItem.to}
      to={navItem.to}
      offset={offset}
      text={navItem.text}
      handleClose={handleClose}
    />
  ));

  const handleTransition = () => {
    if (openMobileNav || !showOverlay) return;
    handleHideOverlay();
  }

  return (
    <NavDrawerStyles
      className={navClass}
      onTransitionEnd={handleTransition}>
      <div className="drawer" >
        { navDrawerLinks }
      </div>
    </NavDrawerStyles>
  );
}

export default NavDrawerExperiment;
