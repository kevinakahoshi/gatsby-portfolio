import React from 'react';
import styled from 'styled-components';
import topographic from '../../assets/images/topographic.svg';
import HeroImage from './HeroImage';
import HeroImageUpdate from './HeroImageUpdate/HeroImageUpdate';

const HeroStyles = styled.section`
  background: #ffffff;
  min-height: 75vh;
  display: grid;
  grid-gap: 3rem;
  position: relative;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;

    &::before {
      content: '';
      position: absolute;
      background-image: linear-gradient(-45deg, #e64242ef, #e67342ef), url(${topographic});
      clip-path: polygon(0% 100%,100% -100%,100% 100%,0 100%);
      height: 100%;
      width: 35%;
      right: 0;
    }
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
      align-self: center;
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
    position: relative;
    transform: translate3d(0,0,0);

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
        <HeroImageUpdate />
      </div>
    </HeroStyles>
  )
}

export default Hero;
