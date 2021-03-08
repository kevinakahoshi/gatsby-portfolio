import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const NavigationHamburgerStyles = styled.button`
  padding: 0;
  outline: 0;
  height: 2rem;
  width: 2rem;
  border: none;
  background: none;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &[data-nav-open="false"] {
    .hamburger-bar {
      &#bar-1 {
        transform: translateY(-8px) rotate(0deg);
      }

      &#bar-2 {
        opacity: 1;
      }

      &#bar-3 {
        transform: translateY(8px) rotate(0deg);
      }
    }
  }

  &[data-nav-open="true"] {
    .hamburger-bar {
      &#bar-1 {
        transform: translateY(0px) rotate(45deg);
      }

      &#bar-2 {
        opacity: 0;
      }

      &#bar-3 {
        transform: translateY(0px) rotate(-45deg);
      }
    }
  }

  .hamburger-bar {
    width: 100%;
    height: 2px;
    background: var(--black);
    position: absolute;
    transition: .3s all;
  }
`;

const NavigationHamburger = ({ handleOpen, handleClose, handleHideOverlay, openMobileNav }) => {
  const handleClick = () => {
    openMobileNav ? handleClose() : handleOpen();
  }

  return (
    <NavigationHamburgerStyles
      aria-label="hamburger-nav"
      data-nav-open={openMobileNav}
      name="hamburger-nav"
      onClick={handleClick}
      role="button"
    >
      <div className="hamburger-bar" id="bar-1" />
      <div className="hamburger-bar" id="bar-2" />
      <div className="hamburger-bar" id="bar-3" />
    </NavigationHamburgerStyles>
  )
};

export default NavigationHamburger;
