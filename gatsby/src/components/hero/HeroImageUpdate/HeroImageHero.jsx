import React from 'react';
import styled from 'styled-components';
import { Float } from '../../../styles/Keyframes';

const HeroImageHeroStyles = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  background: var(--white);
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, .175);
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-gap: .5rem;
  align-items: center;
  animation: ${Float} 5s infinite ease-in-out;
  animation-delay: 0.2s;

  .hero-text-wrapper {
    display: grid;
    grid-gap: .5rem;
    position: relative;
    z-index: 3;
    padding: .5rem;

    .hero-text-heading {
      padding: .35rem;
      background: var(--dark-grey);
      width: 60%;
    }

    .hero-text-subheading {
      padding: .25rem;
      background: var(--medium-grey);
      width: 45%;
    }
  }

  .hero-image-wrapper {
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;

    .floating-page {
      padding: 40%;
      position: absolute;
      z-index: 1;

      .floating-shadow-dom,
      .floating-dom,
      .floating-elements {
        position: absolute;
        height: 100%;
        width: 100%;
        box-shadow: 0 1rem 3rem rgb(0 0 0 / 18%);
        border: 1px solid var(--medium-grey);
      }

      .floating-shadow-dom {
        top: -5%;
        left: 5%;
        background: var(--white);
        opacity: .5;
      }

      .floating-dom {
        top: 0%;
        left: 0%;
        background: var(--light-grey);
      }

      .floating-elements {
        top: 5%;
        left: -5%;
        background: var(--white);
      }
    }

    .transition-backround {
      height: 100%;
      width: 100%;
      background: linear-gradient(-45deg, #e64242, #e67442);
      clip-path: polygon(0% 100%,100% -100%,100% 100%,0 100%);
    }
  }
`;

const HeroImageHero = () => {
  return (
    <HeroImageHeroStyles>
      <div className="hero-text-wrapper">
        <div className="hero-text-heading" />
        <div className="hero-text-subheading" />
      </div>
      <div className="hero-image-wrapper">
        <div className="floating-page">
          <div className="floating-shadow-dom" />
          <div className="floating-dom" />
          <div className="floating-elements" />
        </div>
        <div className="transition-backround" />
      </div>
    </HeroImageHeroStyles>
  )
};

export default HeroImageHero;
