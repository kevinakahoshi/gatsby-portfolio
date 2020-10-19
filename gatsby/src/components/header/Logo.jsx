import React from 'react';
import styled from 'styled-components';
import {
  animateScroll as scroll
} from 'react-scroll';

const mobileWidth = 335;

const LogoStyles = styled.div`
  display: grid;
  grid-gap: var(--logo-gap);
  padding: var(--logo-padding);
  font-size: var(--logo-font-size);
  grid-template-columns: auto auto;
  border: 2px solid #222222;
  font-weight: bold;
  cursor: pointer;

@media (min-width: ${mobileWidth + 1}px) {
    --logo-gap: 1.5rem;
    --logo-padding: 1rem;
    --logo-font-size: .75rem;
  }

  @media (max-width: ${mobileWidth}px) {
    --logo-gap: 1.25rem;
    --logo-padding: .75rem;
    --logo-font-size: .75rem;
  }

  .first-name,
  .last-name {
    display: grid;
    justify-content: center;
    align-items: center;

    @media (min-width: ${mobileWidth + 1}px) {
      grid-gap: .5rem;
    }

    @media (max-width: ${mobileWidth}px) {
      grid-gap: .4rem;
    }
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
      height: var(--after-size);
      width: var(--after-size);
      top: var(--after-top);
      position: absolute;
      background: var(--red);
      border-radius: 100%;

      @media (min-width: ${mobileWidth + 1}px) {
        --after-size: 10px;
        --after-top: 3px;
      }

      @media (max-width: ${mobileWidth}px) {
        --after-size: 9px;
        --after-top: 3px;
      }
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
