import React from 'react';
import styled from 'styled-components';
import HeroImageAboveTheFold from './HeroImageAboveTheFold';
import HeroImageAbout from './HeroImageAbout';
import HeroImageShadowDOM from './HeroImageShadowDOM';
import HeroImageTextLine from './HeroImageTextLine';
import HeroImageValueProp from './HeroImageValueProp';
import HeroImageValueProps from './HeroImageValueProps';
import HeroImageHeader from './HeroImageHeader';
import HeroImageTools from './HeroImageTools';

const HeroImageStyles = styled.div`
  position: relative;
  width: 100%;
  transform: perspective(1250px) rotateY(-30deg) rotateX(15deg);
  max-width: var(--hero-width);

  @media (min-width: 851px) {
    --hero-width: 400px;
  }

  @media (max-width: 850px) {
    --hero-width: 200px;
  }

  @media (max-width: 767px) {
    position: absolute;
    top: 25%;
    right: 1rem;
    z-index: 0;
  }

  .inner-wrapper {
    background: var(--white);
    padding: 1rem;
    border-radius: .25rem;
    position: relative;
    z-index: 1;
    animation: float 7.5s infinite ease-in-out;
    height: var(--wrapper-height);
    max-height: var(--wrapper-max-height);
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, .175);
    overflow: hidden;

    @media (min-width: 851px) {
      --wrapper-height: 50vh;
      --wrapper-max-height: 450px;
    }

    @media (max-width: 850px) {
      --wrapper-height: 35vh;
      --wrapper-max-height: 300px;
    }

    .content-wrapper {
      /* display: grid;
      grid-gap: var(--content-wrapper-gap); */
      animation: scroll 15s infinite ease-in-out;
      animation-delay: .3s;

      /* @media (min-width: 851px) {
        --content-wrapper-gap: 2.5rem;
      }

      @media (max-width: 850px) {
        --content-wrapper-gap: 1.5rem;
      } */
    }
  }

  @keyframes float {
    0% {
      transform: translateY(0%) translateX(0%);
    }

    50% {
      transform: translateY(-7.5%) translateX(-1%);
    }

    100% {
      transform: translateY(0%) translateX(0%);
    }
  }

  @keyframes scroll {
    0%, 25% {
      transform: translateY(0%);
    }

    25%, 50% {
      transform: translateY(-50%);
    }

    50%, 75% {
      transform: translateY(-50%);
    }

    75%, 100% {
      transform: translateY(0%);
    }
  }
`;

const HeroImage = () => {
  const heroImageValueProps = new Array(12)
    .fill(undefined)
    .map((_, index) => <HeroImageValueProp key={index} />);

  return(
    <HeroImageStyles>
      <div className="inner-wrapper">
        <div className="content-wrapper">
          <HeroImageHeader />
          <HeroImageAboveTheFold />
          <HeroImageAbout />
          <HeroImageValueProps />
          <HeroImageTools />
        </div>
      </div>
      <HeroImageShadowDOM />
    </HeroImageStyles>
  )
};

export default HeroImage;
