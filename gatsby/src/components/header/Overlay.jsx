import React from 'react';
import styled from 'styled-components';

const OverlayStyles = styled.div`
  background: var(--black);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  z-index: 0;

  // TODO: Make these more DRY
  &.fade-in {
    animation: fade-in .3s;
    animation-fill-mode: both;
  }

  &.fade-out {
    animation: fade-out .3s;
    animation-fill-mode: both;
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }

    100% {
      opacity: .5;
    }
  }

  @keyframes fade-out {
    0% {
      opacity: .5;
    }

    100% {
      opacity: 0;
    }
  }
`;

const Overlay = ({ handleClose, openMobileNav }) => {
  const fadeClass = openMobileNav ? 'fade-in' : 'fade-out';

  return (
    <OverlayStyles
      className={fadeClass}
      onClick={handleClose}
    />
  );
}

export default Overlay;
