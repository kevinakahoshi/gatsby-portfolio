import React from 'react';
import styled from 'styled-components';

const HeroImageHeaderStyles = styled.div`
  height: 100%;
  width: 100%;
  background: var(--white);
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: .5rem;
  grid-gap: 1rem;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, .175);
  animation: float 5s infinite ease-in-out;

  .logo {
    position: relative;
    display: flex;
    align-items: center;
    animation: float 5s infinite ease-in-out;
    cursor: pointer;

    .circle {
      padding: 2vmin;
      background: var(--red);
      border-radius: 100%;
      box-shadow: 0 .5rem 2rem rgba(0, 0, 0, .25);
    }

    .text {
      padding: 1vmin;
      width: 10vmin;
      background: var(--medium-grey);
      position: absolute;
      left: 1rem;
      box-shadow: 0 .5rem 2rem rgba(0, 0, 0, .25);
    }
  }

  .link-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
    grid-gap: .5rem;
    align-items: center;
    animation: float 5s infinite ease-in-out;

    .header-link {
      padding: .25rem;
      height: min-content;
      background: var(--dark-grey);
      box-shadow: 0 .5rem 2rem rgba(0, 0, 0, .5);
      cursor: pointer;
      transition: .3s all;

      &:not(:hover) {
        opacity: .25;
      }

      &:hover {
        opacity: .5;
      }
    }
  }
`;

const HeroImageHeader = () => {
  const links = new Array(5)
    .fill(undefined)
    .map((_, index) => (
      <div key={index} className="header-link" />
    ))

  return (
    <HeroImageHeaderStyles>
      <div className="logo">
        <div className="circle" />
        <div className="text" />
      </div>
      <div className="link-section">
        { links }
      </div>
    </HeroImageHeaderStyles>
  )
};

export default HeroImageHeader;
