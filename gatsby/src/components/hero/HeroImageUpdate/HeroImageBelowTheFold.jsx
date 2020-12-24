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
  .row-1,
  .row-2 {
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
`;

const HeroImageBelowTheFold = () => {
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
        <div className="row-1" />
        <div className="row-2" />
      </div>
    </HeroImageBelowTheFoldStyles>
  )
};

export default HeroImageBelowTheFold;
