import React from 'react';
import styled from 'styled-components';
import { SlideIn, SlideOut } from '../../styles/Keyframes';

// Components
import NavigationLink from './NavigationLink';

const NavigationMobileDrawerStyles = styled.aside`
  height: calc(100% - var(--offset));
  width: 80%;
  max-width: 400px;
  position: fixed;
  top: var(--offset);
  right: 0;
  transition: transform 0.3s, box-shadow 0.3s;
  z-index: 1;

  @media (min-width: 336px) {
    --offset: ${({ offset }) => offset}px;
  }

  @media (max-width: 335px) {
    --offset: ${({ offset }) => offset}px;
  }

  &[data-open='false'] {
    transform: translateX(100%);
    box-shadow: none;
  }

  &[data-open='true'] {
    transform: translateX(0%);
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);
  }

  .drawer {
    grid-column: 2;
    padding: 2rem 1rem 1rem;
    background: var(--white);
    display: grid;
    align-items: center;
    grid-gap: 2rem;
    grid-template-rows: repeat(auto-fill, minmax(3rem, 1fr));
    background: var(--white);
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;

    &::after {
      content: '';
      height: 1rem;
    }
  }

  a {
    position: relative;
    padding: 0.5rem 0;
    transition: color 0.3s;
    text-align: center;
    font-size: 1.25rem;
    width: fit-content;
    margin: auto;

    &:not(.active) {
      color: var(--link-inactive-grey);
    }

    &::after {
      background: linear-gradient(-45deg, #e64242, #e67442);
    }

    &:not(:hover) {
      &::after {
        width: 0%;
      }
    }

    &:hover {
      color: var(--link-inactive-hover-grey);

      &::after {
        width: 100%;
      }
    }

    &.active {
      color: var(--link-active-grey);
    }

    &::before,
    &::after {
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
      transition: width 0.3s;
    }
  }

  .slide-in {
    animation: ${SlideIn} 0.75s forwards;
    animation-fill-mode: both;
  }

  .slide-out {
    animation: ${SlideOut} 0.75s forwards;
    animation-fill-mode: both;
  }
`;

const NavigationMobileDrawer = ({
  offset,
  navigationItems,
  openMobileNav,
  sliding,
  handleClose,
  handleHideOverlay,
  showOverlay,
}) => {
  const navDrawerLinks = navigationItems.map((navItem, index) => (
    <NavigationLink
      key={navItem.to}
      to={navItem.to}
      offset={offset}
      text={navItem.text}
      handleClose={handleClose}
      customClass={openMobileNav ? 'slide-in' : 'slide-out'}
      customInlineStyles={{
        animationDelay: `${index * 0.1}s`,
      }}
    />
  ));

  const handleTransition = () => {
    if (openMobileNav || !showOverlay) return;
    handleHideOverlay();
  };

  return (
    <NavigationMobileDrawerStyles
      data-open={openMobileNav}
      onTransitionEnd={handleTransition}
      offset={offset}
    >
      <div className="drawer">{navDrawerLinks}</div>
    </NavigationMobileDrawerStyles>
  );
};

export default NavigationMobileDrawer;
