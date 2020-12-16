import React from 'react';
import styled from 'styled-components';

const HeroImageAboveTheFoldStyles = styled.div`
  border-radius: .25rem;
  min-height: 150px;
  margin: 1rem 0rem 2.5rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 1rem;
  overflow: hidden;

  .text-left {
    display: flex;
    flex-direction: column;
    justify-self: center;
    align-self: center;
    width: 100%;
    // TODO: Figure out what to do here since Safari does not support this
    gap: .25rem;

    .name {
      background: var(--black);
      height: .5rem;
      width: 50%;
      border-radius: .25rem;
    }

    .title {
      background: var(--medium-grey);
      height: .25rem;
      width: 35%;
      border-radius: .25rem;
    }
  }

  .image-right {
    background-image: linear-gradient(-45deg, #e64242ef, #e67342ef);
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .floating-element {
      position: relative;
      width: 100%;
      left: -25%;
      transform: perspective(1250px) rotateY(-30deg) rotateX(15deg);

      .top-layer {
        background: var(--white);
        width: 75%;
        padding-bottom: 75%;
        border: 2px solid #CCCCCC80;
        border-radius: .25rem;
      }

      .shadow-dom {
        position: absolute;
        top: -.5rem;
        left: .5rem;
        background: var(--white);
        opacity: .5;
        height: 100%;
        width: 75%;
        border-radius: .25rem;
      }
    }
  }
`;

const HeroImageAboveTheFold = () => {
  return (
    <HeroImageAboveTheFoldStyles>
      <div className="text-left">
        <div className="name" />
        <div className="title" />
      </div>
      <div className="image-right">
        <div className="floating-element">
          <div className="top-layer" />
          <div className="shadow-dom" />
        </div>
      </div>
    </HeroImageAboveTheFoldStyles>
  )
}

export default HeroImageAboveTheFold;
