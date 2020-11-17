import React from 'react';
import styled from 'styled-components';
import hero from '../../assets/images/hero.svg';

const HeroStyles = styled.section`
  background: #ffffff;
  min-height: 75vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
  padding: 0;

  .hero-text {
    display: flex;
    flex-direction: column;
    justify-self: center;
    align-self: center;

    h2 {
      color: var(--link-inactive-grey);
    }
  }

  .hero-image {
    background-image: url(${hero});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: right;
  }
`;

const Hero = () => {
  return (
    <HeroStyles id="hero" className="section">
      <div className="hero-text">
        <h1>Kevin Akahoshi</h1>
        <h2>Software Engineer</h2>
      </div>
      <div className="hero-image"></div>
    </HeroStyles>
  )
}

export default Hero;
