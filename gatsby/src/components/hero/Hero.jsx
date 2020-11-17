import React from 'react';
import styled from 'styled-components';
import topographicHero from '../../assets/images/topographic-hero.svg';

const HeroStyles = styled.section`
  background: #ffffff;
  min-height: 75vh;
  display: grid;
  grid-gap: 3rem;
  padding: 0;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

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
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${topographicHero});
    background-repeat: no-repeat;
    background-size: contain;

    @media (min-width: 768px) {
      background-position: 100% 50%;
    }

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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nihil non minus molestiae quidem culpa cumque maiores odio exercitationem iure optio quasi suscipit voluptatibus expedita ipsa, qui tenetur. Autem, itaque?
      </div>
    </HeroStyles>
  )
}

export default Hero;
