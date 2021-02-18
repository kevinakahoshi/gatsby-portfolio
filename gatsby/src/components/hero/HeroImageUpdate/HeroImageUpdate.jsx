import React from 'react';
import styled from 'styled-components';

// Components
import HeroImageBackground from './HeroImageBackground';
import HeroImageBelowTheFold from './HeroImageBelowTheFold';
import HeroImageElementsLayout from './HeroImageElementsLayout';
import HeroImageHeader from './HeroImageHeader';
import HeroImageHero from './HeroImageHero';
import HeroImageShadowDOM from './HeroImageShadowDOM';

const HeroImageUpdateStyles = styled.div`
  position: relative;
  transform: perspective(1250px) rotateY(-30deg) rotateX(15deg);

  *:not(.transition-backround) {
    border-radius: .25rem;
  }

  @media (min-width: 851px) {
    height: clamp(300px, 50vmin, 50vmin);
    width: clamp(300px, 50vmin, 50vmin);
  }

  @media (max-width: 850px) {
    width: 80%;
    padding-top: 80%;
  }
`;

const HeroImageUpdate = () => {
  return (
    <HeroImageUpdateStyles>
      <HeroImageElementsLayout>
        <HeroImageHeader />
        <HeroImageHero />
        <HeroImageBelowTheFold />
      </HeroImageElementsLayout>
      <HeroImageBackground />
      <HeroImageShadowDOM />
    </HeroImageUpdateStyles>
  )
};

export default HeroImageUpdate;
