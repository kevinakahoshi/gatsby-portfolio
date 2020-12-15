import React from 'react';
import styled from 'styled-components';
import topographicHero from '../../assets/images/topographic-hero.svg';
import HeroImage from './HeroImage';

const HeroStyles = styled.section`
  background: #ffffff;
  min-height: 75vh;
  display: grid;
  grid-gap: 3rem;

  @media (min-width: 768px) {
    background-image: url(${topographicHero});
    background-repeat: no-repeat;
    background-position: right -25vh bottom 0vh;
    background-size: contain;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 767px) {
    // TODO: Figure out what you want here
  }

  .hero-text {
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
      align-self: center;
      justify-self: center;
    }

    @media (max-width: 767px) {
      align-self: flex-start;
      justify-self: flex-start;
    }

    h2 {
      color: var(--link-inactive-grey);
    }
  }

  .hero-image {
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 767px) {
      grid-row: 1;
    }
  }
`;

const Hero = () => {
  return (
    <HeroStyles id="hero" className="section">
      <div className="hero-text">
        <h1>Kevin Akahoshi</h1>
        <h2>Software Engineer</h2>
      </div>
      <div className="hero-image">
        <HeroImage />
      </div>
    </HeroStyles>
  )
}

export default Hero;
