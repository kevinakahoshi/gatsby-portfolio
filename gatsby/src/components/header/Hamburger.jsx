import React from 'react';
import styled from 'styled-components';
import useMenu from '../hooks/useMenu';

const HamburgerStyles = styled.button`
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

  .top-line,
  .middle-line,
  .bottom-line {
    width: 2rem;
    height: 2px;
    background: var(--dark-grey);
    position: absolute;
  }

  .top-line {
    transform: translateY(-8px);
  }

  .bottom-line {
    transform: translateY(8px);
  }
`;

const Hamburger = ({ handleOpen }) => (
  <HamburgerStyles
    role="button"
    name="hamburger"
    onClick={handleOpen}
  >
    <div className="top-line" />
    <div className="middle-line" />
    <div className="bottom-line" />
  </HamburgerStyles>
);

export default Hamburger;
