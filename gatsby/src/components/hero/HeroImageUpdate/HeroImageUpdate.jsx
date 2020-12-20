import React from 'react';
import styled from 'styled-components';

// Components
import HeroImageBackground from './HeroImageBackground';
import HeroImageElementsLayout from './HeroImageElementsLayout';
import HeroImageHeader from './HeroImageHeader';
import HeroImageHero from './HeroImageHero';
import HeroImageSHadowDOM from './HeroImageShadowDOM';

const HeroImageUpdateStyles = styled.div`
  position: relative;
  transform: perspective(1250px) rotateY(-30deg) rotateX(15deg);

  * {
    border-radius: .25rem;
    animation-delay: .3s;
  }

  @media (min-width: 851px) {
    height: 50vmin;
    width: 50vmin;
  }

  @media (max-width: 850px) {
    height: 35vh;
    width: 100%;
    max-width: 350px;
  }
`;

const HeroImageUpdate = () => {
  return (
    <HeroImageUpdateStyles>
      <HeroImageElementsLayout>
        <HeroImageHeader />
        <HeroImageHero />
        <div></div>
      </HeroImageElementsLayout>
      <HeroImageBackground />
      <HeroImageSHadowDOM />
    </HeroImageUpdateStyles>
  )
};

export default HeroImageUpdate;
