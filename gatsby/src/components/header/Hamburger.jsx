import React from 'react';
import styled from 'styled-components';
import useMenu from '../hooks/useMenu';

const HamburgerStyles = styled.button`
  padding: 0;
  background: none;
  outline: none;
  border: none;

  .top-line,
  .middle-line,
  .bottom-line {
    width: 2rem;
    height: 2px;
    background: var(--dark-grey);
    margin: 6px 0;
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
