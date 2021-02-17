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
    /* background-image: url(${topographicHero}); */
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
    z-index: 1;
    padding: 1rem;

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
    position: relative;
    transform: translate3d(0,0,0);
    padding: 5rem 1rem;

    @media (max-width: 767px) {
      grid-row: 1;
    }

    &-background {
      position: absolute;
      height: 100%;
      width: 35%;
      right: 0%;
      background-image: linear-gradient(-45deg, #e64242ef, #e67342ef), url(${topographic});
      clip-path: polygon(0% 100%,100% -100%,100% 100%,0 100%);
    }
  }
`;

const Hero = () => {
  return (
    <HeroStyles id="hero"
    // className="section"
    >
      <div className="hero-image-background" />
      <div className="hero-text">
        <h1>Kevin Akahoshi</h1>
        <h2>Software Engineer</h2>
      </div>
      <div className="hero-image">
        {/* <HeroImage /> */}
        <HeroImageUpdate />
      </div>
    </HeroStyles>
  )
}

export default Hero;
