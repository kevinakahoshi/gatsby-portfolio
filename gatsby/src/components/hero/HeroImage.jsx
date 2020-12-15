import React from 'react';
import styled from 'styled-components';

const HeroImageStyles = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  transform: perspective(1250px) rotateY(-30deg) rotateX(15deg);

  .inner-wrapper {
    background: var(--white);
    padding: 1rem;
    border-radius: .25rem;
    position: relative;
    z-index: 1;
    animation: float 7.5s infinite ease-in-out;
    height: var(--wrapper-height);
    max-height: var(--wrapper-max-height);
    box-shadow: 0px 1rem 2rem rgba(0, 0, 0, .25);
    display: grid;
    grid-template-rows: 4fr 5fr;
    grid-gap: 2.5rem;

    @media (min-width: 851px) {
      --wrapper-height: 50vh;
      --wrapper-max-height: 450px;
    }

    @media (max-width: 850px) {
      --wrapper-height: 35vh;
      --wrapper-max-height: 300px;
    }

    .above-the-fold {
      background: var(--medium-grey);
      border-radius: .25rem;
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
        display: grid;
        grid-template-columns: 4fr 8fr;
        grid-gap: 1rem;

        .about-image {
          padding-bottom: 100%;
          background: #ccc;
          border-radius: .25rem;
        }

        .about-text {
          display: grid;
          grid-template-rows: repeat(auto-fit, minmax(0, 1fr));
          grid-gap: .5rem;

          .text-line {
            background: #ccc;
            border-radius: .25rem;
          }
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

        .value-prop {
          &-icon-wrapper {
            display: grid;
            grid-template-columns: auto 1fr;
            grid-gap: 1rem;
          }

          &-image {
            background: var(--medium-grey);
            height: 2rem;
            width: 2rem;
            border-radius: 100%;
          }

          &-icon-text {
            height: 1fr;
            background: var(--medium-grey);
            border-radius: .25rem;
          }
        }
      }
    }
  }

  .background {
    background: var(--light-grey);
    position: absolute;
    height: 100%;
    width: 100%;
    top: -1rem;
    left: 1rem;
    bottom: 0;
    border-radius: .25rem;
    filter: opacity(.5);
    animation: float 7.5s infinite ease-in-out;
    animation-delay: .3s;
    box-shadow: 0px 1rem 2rem rgba(0, 0, 0, .25);
  }

  @keyframes float {
    0% {
      transform: translateY(0%) translateX(0%);
    }

    50% {
      transform: translateY(-5%) translateX(-1%);
    }

    100% {
      transform: translateY(0%) translateX(0%);
    }
  }
`;

const HeroImage = () => {
  return(
    <HeroImageStyles>
      <div className="inner-wrapper">
        <div className="above-the-fold" />
        <div className="below-the-fold">
          <div className="mock-about-section">
            <div className="about-image" />
            <div className="about-text">
              <div className="text-line" />
              <div className="text-line" />
              <div className="text-line" />
              <div className="text-line" />
              <div className="text-line" />
            </div>
          </div>
          <div className="mock-value-props">
            <div className="value-prop">
              <div className="value-prop-icon-wrapper">
                <div className="value-prop-image"></div>
                <div className="value-prop-icon-text"></div>
              </div>
            </div>
            <div className="value-prop">
              <div className="value-prop-icon-wrapper">
                <div className="value-prop-image"></div>
                <div className="value-prop-icon-text"></div>
              </div>
            </div>
            <div className="value-prop">
              <div className="value-prop-icon-wrapper">
                <div className="value-prop-image"></div>
                <div className="value-prop-icon-text"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="background" />
    </HeroImageStyles>
  )
};

export default HeroImage;
