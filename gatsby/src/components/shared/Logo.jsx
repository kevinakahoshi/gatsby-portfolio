import React from 'react';
import styled from 'styled-components';

const mobileWidth = 335;

const LogoStyles = styled.div`
  display: grid;
  grid-gap: var(--logo-gap);
  padding: var(--logo-padding);
  grid-template-columns: auto auto;
  border: 2px solid #222222;
  font-weight: bold;
  pointer-events: none;
  width: max-content;
  background: var(--white);

  &:focus,
  &:active {
    outline: none;
  }

  span {
    font-size: var(--logo-font-size);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

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
    color: transparent;

    &::after {
      content: '';
      height: var(--after-size);
      width: var(--after-size);
      position: absolute;
      background: var(--red);
      border-radius: 100%;

      @media (min-width: ${mobileWidth + 1}px) {
        --after-size: 10px;
      }

      @media (max-width: ${mobileWidth}px) {
        --after-size: 9px;
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

const Logo = () => (
  <LogoStyles>
    <div className="first-name">
      <span className="letter-k">K</span>
      <span className="letter-e">E</span>
      <span className="letter-v">V</span>
      <span className="letter-i">I</span>
      <span className="letter-n">N</span>
    </div>
    <div className="last-name">
      <span className="letter-a">A</span>
      <span className="letter-k">K</span>
      <span className="letter-a">A</span>
      <span className="letter-h">H</span>
      <span className="letter-o">O</span>
      <span className="letter-s">S</span>
      <span className="letter-h">H</span>
      <span className="letter-i">I</span>
    </div>
  </LogoStyles>
);

export default Logo;
