import React from 'react';
import styled from 'styled-components';
import topographic from '../../assets/images/topographic.svg';
import HeroImage from './HeroImage';
import HeroText from './HeroText';

const HeroStyles = styled.section`
  background: #ffffff;
  min-height: 75vh;
  display: grid;
  grid-gap: 3rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    background-image: linear-gradient(-45deg, #e64242ef, #e67342ef),
      url(${topographic});
    background-size: 150%;
    right: 0;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;

    &::before {
      clip-path: polygon(0% 100%, 100% -100%, 100% 100%, 0% 100%);
      height: 100%;
      width: 35%;
    }
  }

  @media (max-width: 767px) {
    &::before {
      clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 50%);
      height: 50%;
      width: 100%;
    }
  }

  .hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transform: translate3d(0, 0, 0);

    @media (max-width: 767px) {
      grid-row: 1;
    }
  }
`;

const Hero = () => (
  <HeroStyles id="hero" className="section">
    <HeroText />
    <HeroImage />
  </HeroStyles>
);

export default Hero;
