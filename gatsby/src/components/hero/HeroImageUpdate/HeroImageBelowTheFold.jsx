import React from 'react';
import styled from 'styled-components';

const HeroImageBelowTheFoldStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  z-index: 3;

  .btf-right {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-gap: 1rem;
  }

  .image,
  .row {
    background: var(--white);
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, .175);
    /* animation: float 5s infinite ease-in-out; */
  }

  .image {
    height: 100%;
    width: 100%;
    position: relative;
    overflow: hidden;
  }

  .circle {
    &__inner {
      box-shadow: 0 1rem 2rem inset rgba(0, 0, 0, .25);
      padding: 5vh;
      border-radius: 5vh;
      background: var(--white);
    }

    &__outer {
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, .25);
      padding: 3.5vh;
      border-radius: 100vh;
      position: absolute;
      top: 50%;
      left: -25%;
      background: var(--red);
    }
  }

  .row {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: .5rem;
    align-items: center;
    padding: .5rem;

    &-image {
      background: var(--medium-grey);
      padding: 1rem;
      border-radius: 5rem;
      height: min-content;
      width: min-content;
    }

    &-text {
      display: grid;
      grid-gap: .125rem;
      grid-template-rows: repeat(auto-fit, minmax(0, 1fr));
      height: 100%;

      .text-line {
        width: 100%;
        background: var(--medium-grey);
      }
    }
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
        </div>
      </div>
      <div className="btf-right">
        <div className="row">
          <div className="row-image" />
          <div className="row-text">
            { textLines }
          </div>
        </div>
        <div className="row">
          <div className="row-image" />
          <div className="row-text">
            { textLines }
          </div>
        </div>
      </div>
    </HeroImageBelowTheFoldStyles>
  )
};

export default HeroImageBelowTheFold;
