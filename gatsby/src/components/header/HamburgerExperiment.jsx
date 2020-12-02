import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const HamburgerExperimentStyles = styled.button`
  padding: 0;
  outline: 0;
  height: 2rem;
  width: 2rem;
  border: none;
  background: none;
  position: relative;

  &[data-nav-open="false"] {
    .hamburger-bar {
      &#bar-1 {
        transform: translateY(-8px);
      }

      &#bar-2 {
        transform: translateY(0px);
      }

      &#bar-3 {
        transform: translateY(8px);
      }
    }
  }

  &[data-nav-open="true"] {
    .hamburger-bar {
      &#bar-1 {
        transform: translateY(0px) rotate(135deg);
      }

      &#bar-2 {
        transform: translateY(0px);
        opacity: 0;
      }

      &#bar-3 {
        transform: translateY(0px) rotate(-135deg);
      }
    }
  }

  .hamburger-bar {
    width: 100%;
    height: 2px;
    background: var(--black);
    position: absolute;
    transition: .2s transform;
  }

  @keyframes outer-open {
    0% {

    }

    100% {

    }
  }

  @keyframes outer-close {
    0% {

    }

    100% {

    }
  }

  @keyframes middle-open {
    0% {

    }

    100% {

    }
  }

  @keyframes middle-close {
    0% {

    }

    100% {

    }
  }
`;

const HamburgerExperiment = ({ handleOpen, handleClose, handleHideOverlay }) => {
  const [navOpen, setNavOpen] = useState(false);

  const handleClick = () => {
    setNavOpen((bool) => !bool)
    navOpen ? handleClose() : handleOpen();
  }

  return (
    <HamburgerExperimentStyles
      data-nav-open={navOpen}
      onClick={handleClick}
    >
      <div className="hamburger-bar" id="bar-1" />
      <div className="hamburger-bar" id="bar-2" />
      <div className="hamburger-bar" id="bar-3" />
    </HamburgerExperimentStyles>
  )
}

export default HamburgerExperiment;
