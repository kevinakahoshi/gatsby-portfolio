import React from 'react';
import styled from 'styled-components';

const HamburgerStyles = styled.button`
  padding: 0;
  background: none;
  outline: none;
  border: none;

  .top-line,
  .middle-line,
  .bottom-line {
    width: 2rem;
    height: .25rem;
    background: var(--dark-grey);
    margin: .25rem 0;
  }
`;

const Hamburger = () => {
  return (
    <HamburgerStyles
      role="button"
      name="hamburger"
    >
      <div className="top-line" />
      <div className="middle-line" />
      <div className="bottom-line" />
    </HamburgerStyles>
  )
}

export default Hamburger;
