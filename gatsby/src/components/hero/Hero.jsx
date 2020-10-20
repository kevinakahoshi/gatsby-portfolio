import React from 'react';
import styled from 'styled-components';

const HeroStyles = styled.section`
  background: #ffffff;
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
