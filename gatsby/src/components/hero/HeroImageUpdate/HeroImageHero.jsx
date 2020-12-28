import React from 'react';
import styled from 'styled-components';

const HeroImageHeroStyles = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  background: linear-gradient(-45deg, #e64242, #e67442);
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, .175);
  padding: 1.5rem;
  display: flex;
  align-items: center;
  /* animation: float 5s infinite ease-in-out; */

  .hero-text-wrapper {
    display: grid;
    grid-gap: .5rem;
    position: relative;
    z-index: 3;
    /* animation: element-float 7.5s infinite ease-in-out; */

    .hero-text-element {
      background: var(--white);
      padding: 1vmin;
      width: 12.5vmin;
      box-shadow: 0 .5rem 2rem rgba(0, 0, 0, .5);
    }

    .hero-text-button {
      border: .25vmin solid var(--white);
      padding: .5vmin;
      width: 50%;
      box-shadow: 0 .5rem 2rem rgba(0, 0, 0, .5);
      transition: .3s all;
      cursor: pointer;

      &:not(:hover) {
        background: transparent;

        .hero-text-button-text {
          background: var(--white);
        }
      }

      &:hover {
        background: var(--white);

        .hero-text-button-text {
          background: var(--medium-grey);
        }
      }

      .hero-text-button-text {
        display: block;
        padding: .25vmin;
        width: 100%;
      }
    }
  }

  .front-mountain {
    width: 50%;
    padding-top: 50%;
    top: 50%;
    position: absolute;
    left: 10%;
    background: linear-gradient(45deg, #f5afa3, #f4a7a2);
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, .175);
    transform: rotate(45deg);
    opacity: 1;
    z-index: 1;
  }

  .back-mountain {
    width: 50%;
    padding-top: 50%;
    top: 75%;
    position: absolute;
    left: 50%;
    background: var(--white);
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, .175);
    transform: rotate(45deg);
    opacity: .25;
  }

  .overlay {
    background: var(--black);
    opacity: .125;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
  }
`;

const HeroImageHero = () => {
  return (
    <HeroImageHeroStyles>
      <div className="hero-text-wrapper">
        <div className="hero-text-element" />
        <div className="hero-text-button">
          <span className="hero-text-button-text" />
        </div>
      </div>
      <div className="front-mountain" />
      <div className="back-mountain" />
      <div className="overlay" />
    </HeroImageHeroStyles>
  )
};

export default HeroImageHero;
