import React from 'react';
import styled from 'styled-components';
import HeroImageTextBlock from './HeroImageTextBlock';

// Components


const HeroImageBelowTheFoldStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 1rem;
  z-index: 3;

  .btf-right {
  }

  .image {
    background: var(--white);
    box-shadow: 0rem 1rem 3rem rgba(0, 0, 0, .175);
    /* animation: float 5s infinite ease-in-out; */
    height: 100%;
    width: 100%;
    position: relative;
    overflow: hidden;
  }

  .circle {
    &__inner {
      box-shadow: 0 1rem 2rem inset rgba(0, 0, 0, .25);
      padding: 5vmin;
      border-radius: 100vh;
      background: var(--white);
    }

    &__outer {
      box-shadow: 0rem 1rem 2rem rgba(0, 0, 0, .25);
      padding: 5vmin;
      border-radius: 100vh;
      position: absolute;
      top: 12vmin;
      left: -7vmin;
      background: var(--red);
    }
  }

  .square {
    &__inner {
      box-shadow: 0.5rem 0.5rem 2rem inset rgba(0, 0, 0, .25);
      padding: 4vmin;
      background: var(--white);
    }

    &__outer {
      box-shadow: 0.5rem 0.5rem 2rem rgba(0, 0, 0, .25);
      padding: 4vmin;
      position: absolute;
      top: -7.5vmin;
      left: 10vmin;
      background: var(--red);
      transform: rotate(45deg);
    }
  }

  .text-line {
    width: 100%;
    background: var(--medium-grey);
  }
`;

const HeroImageBelowTheFold = () => {
  const textLines = new Array(6)
    .fill(undefined)
    .map((_, index) => <div key={index} className="text-line" />)

  return (
    <HeroImageBelowTheFoldStyles>
      <div className="btf-left">
        <div className="image">
          <div className="circle__outer">
            <div className="circle__inner" />
          </div>
          <div className="square__outer">
            <div className="square__inner" />
          </div>
        </div>
      </div>
      <div className="btf-right">
        <HeroImageTextBlock>
          { textLines }
        </HeroImageTextBlock>
      </div>
    </HeroImageBelowTheFoldStyles>
  )
};

export default HeroImageBelowTheFold;
