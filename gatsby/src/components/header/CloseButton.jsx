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
  border: 2px solid var(--dark-grey);
  border-radius: 100%;

  &::before,
  &::after {
    content: '';
    height: 80%;
    width: 2px;
    background: var(--dark-grey);
    position: absolute;
  }

  &::after {
    transform: rotate(90deg);
  }
`;

const CloseButton = () => {
  return (
    <CloseButtonStyles
      role="button"
      name="close-button"
    />
  )
}

export default CloseButton;
