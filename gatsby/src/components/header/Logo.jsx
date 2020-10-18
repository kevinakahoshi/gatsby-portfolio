import React from 'react';
import styled from 'styled-components';
import {
  animateScroll as scroll
} from 'react-scroll';

const LogoStyles = styled.div`
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: auto auto;
  padding: 1rem;
  border: 2px solid #222222;
  font-size: .75rem;
  font-weight: bold;
  width: fit-content
  position: relative;
  text-align: center;
  cursor: pointer;

  .first-name,
  .last-name {
    display: grid;
    justify-content: center;
    align-items: center;
    gap: .5rem;
  }

  .first-name {
    grid-template-columns: repeat(5, auto);
  }

  .last-name {
    grid-template-columns: repeat(8, auto);
  }

  .letter-o {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: transparent;

    &::after {
      content: '';
      position: absolute;
      width: 10px;
      padding-bottom: 100%;
      background: var(--red);
      border-radius: 100%;
      top: 3px;
    }
  }

  span {
    ::-moz-selection {
      background: none;
    }

    ::selection {
      background: none;
    }
  }
`;

const Logo = () => {
  return (
    <LogoStyles
      onClick={() => scroll.scrollToTop()}
    >
      <div className="first-name">
        <span>K</span>
        <span>E</span>
        <span>V</span>
        <span>I</span>
        <span>N</span>
      </div>
      <div className="last-name">
        <span>A</span>
        <span>K</span>
        <span>A</span>
        <span>H</span>
        <span className="letter-o">O</span>
        <span>S</span>
        <span>H</span>
        <span>I</span>
      </div>
    </LogoStyles>
  )
}

export default Logo;
