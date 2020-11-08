import React from 'react';
import styled from 'styled-components';

const CloseButtonStyles = styled.button`
  height: 2rem;
  width: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transform: rotate(45deg);
  background: #ffffff;
  border: none;
  border-radius: 100%;

  &::before,
  &::after {
    content: '';
    height: 80%;
    width: 2px;
    background: var(--link-inactive-grey);
    position: absolute;
  }

  &::after {
    transform: rotate(90deg);
  }

  &:active,
  &:focus {
    outline: none;
  }
`;

const CloseButton = ({ handleClose }) => {
  return (
    <CloseButtonStyles
      role="button"
      name="close-button"
      onClick={handleClose}
    />
  )
}

export default CloseButton;
