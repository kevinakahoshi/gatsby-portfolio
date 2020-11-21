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
  transition: .3s all;
`;

const Overlay = ({ handleClose }) => (
  <OverlayStyles className="overlay" onClick={handleClose} />
)

export default Overlay;
