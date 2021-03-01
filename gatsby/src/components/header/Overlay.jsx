import React from 'react';
import styled from 'styled-components';
import { FadeIn, FadeOut } from '../../styles/Keyframes';

const OverlayStyles = styled.div`
  background: var(--black);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  z-index: 19;

  &.fade-in {
    animation: ${FadeIn} .3s;
    animation-fill-mode: both;
  }

  &.fade-out {
    animation: ${FadeOut} .3s;
    animation-fill-mode: both;
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
