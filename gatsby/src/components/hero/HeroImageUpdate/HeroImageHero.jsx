import React from 'react';
import styled from 'styled-components';

const HeroImageHeroStyles = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  background: var(--white);
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, .175);
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: .5rem;
  align-items: center;

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
    background: linear-gradient(-45deg, #e64242, #e67442);
    background-position: 0% 50%;
    height: 100%;
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
        <div className="floating-shadow-dom" />
        <div className="floating-dom" />
        <div className="floating-elements" />
        <div className="hero-image-background" />
      </div>
    </HeroImageHeroStyles>
  )
};

export default HeroImageHero;
