import React from 'react';
import styled from 'styled-components';

const LogoStyles = styled.div`
  display: grid;
  grid-gap: 2vw;
  grid-template-columns: 1fr auto;
  font-size: clamp(2rem, 6vw, 3rem);
  font-weight: bold;
  width: fit-content;

  .first-name,
  .last-name {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1vw;
  }

  .letter-o {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    &::after {
      content: '';
      position: absolute;
      width: 90%;
      padding-bottom: 90%;
      background: red;
      border-radius: 100%;
    }
  }
`;

const Logo = () => {
  return (
    <LogoStyles>
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
