import React from 'react';
import styled from 'styled-components';
import HeroImageBackground from './HeroImageBackground';
import HeroImageBelowTheFold from './HeroImageBelowTheFold';
import HeroImageElementsLayout from './HeroImageElementsLayout';
import HeroImageHeader from './HeroImageHeader';
import HeroImageHero from './HeroImageHero';
import HeroImageShadowDOM from './HeroImageShadowDOM';

const HeroImageStyles = styled.div`
  position: relative;
  transform: perspective(1250px) rotateY(-30deg) rotateX(15deg);
  display: grid;

  *:not(.transition-backround) {
    border-radius: var(--border-radius);
  }

  @media (min-width: 768px) {
    height: clamp(350px, 50vmin, 50vmin);
    width: clamp(350px, 50vmin, 50vmin);
  }

  @media (min-width: 381px) and (max-width: 767px) {
    height: 45vmax;
    width: 45vmax;
  }

  @media (max-width: 380px) {
    width: 95%;
    padding-top: 95%;
  }
`;

const HeroImageContents = () => (
  <HeroImageStyles>
    <HeroImageElementsLayout>
      <HeroImageHeader />
      <HeroImageHero />
      <HeroImageBelowTheFold />
    </HeroImageElementsLayout>
    <HeroImageBackground />
    <HeroImageShadowDOM />
  </HeroImageStyles>
);

export default HeroImageContents;
