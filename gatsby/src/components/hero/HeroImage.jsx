import React from 'react';
import styled from 'styled-components';
import HeroImageShadowDOM from './HeroImageShadowDOM';
import HeroImageTextLine from './HeroImageTextLine';
import HeroImageValueProp from './HeroImageValueProp';

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
    display: grid;
    grid-template-rows: var(--inner-grid-rows);
    grid-gap: var(--inner-gap);
    overflow: scroll;

    @media (min-width: 851px) {
      --wrapper-height: 50vh;
      --wrapper-max-height: 450px;
      --inner-grid-rows: 4fr 5fr;
      --inner-gap: 2rem;
    }

    @media (max-width: 850px) {
      --wrapper-height: 35vh;
      --wrapper-max-height: 300px;
      --inner-grid-rows: 1fr 1fr;
      --inner-gap: 1.25rem;
    }

    .above-the-fold {
      background: var(--medium-grey);
      border-radius: .25rem;
      min-height: 100px;
    }

    .below-the-fold {
      @media (min-width: 851px) {
        display: grid;
        grid-template-rows: auto 1fr;
        grid-gap: 2.5rem;
      }

      @media (max-width: 850px) {
        display: block;
      }

      .mock-about-section {
        height: 100%;
        display: grid;
        grid-gap: 1rem;

        @media (min-width: 851px) {
          grid-template-columns: 4fr 8fr;
        }

        .about-image {
          padding-bottom: 100%;
          background: #ccc;
          border-radius: .25rem;

          @media (max-width: 850px) {
            display: none;
          }
        }

        .about-text {
          display: grid;
          grid-template-rows: repeat(auto-fit, minmax(0, 1fr));
          grid-gap: .5rem;
          height: 100%auto;
        }
      }

      .mock-value-props {
        @media (min-width: 851px) {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-gap: 1rem;
        }

        @media (max-width: 850px) {
          display: none;
        }
      }
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
`;

const HeroImage = () => {
  const heroImageTextLines = new Array(5)
    .fill(undefined)
    .map((_, index) => <HeroImageTextLine index={index} key={index} />);

  const heroImageValueProps = new Array(12)
    .fill(undefined)
    .map((_, index) => <HeroImageValueProp key={index} />);

  return(
    <HeroImageStyles>
      <div className="inner-wrapper">
        <div className="above-the-fold" />
        <div className="below-the-fold">
          <div className="mock-about-section">
            <div className="about-image" />
            <div className="about-text">
              { heroImageTextLines }
            </div>
          </div>
          <div className="mock-value-props">
            { heroImageValueProps }
          </div>
        </div>
      </div>
      <HeroImageShadowDOM />
    </HeroImageStyles>
  )
};

export default HeroImage;
