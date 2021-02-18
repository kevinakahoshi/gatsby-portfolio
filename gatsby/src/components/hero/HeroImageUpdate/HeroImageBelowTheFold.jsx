import React from 'react';
import styled from 'styled-components';
import { Float } from '../../../styles/Keyframes';
import HeroImageTextBlock from './HeroImageTextBlock';

// Components

// TODO: Add clamp to grid-gap
const HeroImageBelowTheFoldStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 2vmin;
  z-index: 3;
  animation: ${Float} 5s infinite ease-in-out;
  animation-delay: 0.4s;

  .image {
    background: var(--white);
    box-shadow: 0rem 1rem 3rem rgba(0, 0, 0, .175);
    height: 100%;
    width: 100%;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .5rem;
  }

  .circle {
    padding: 40%;
    background: var(--red);
    opacity: .25;
    border-radius: 10rem!important;
  }

  .text-line {
    width: 100%;
    background: var(--medium-grey);
  }
`;

const HeroImageBelowTheFold = () => {
  const textLines = new Array(5)
    .fill(undefined)
    .map((_, index) => <div key={index} className="text-line" />)

  return (
    <HeroImageBelowTheFoldStyles>
      <div className="btf-left">
        <div className="image">
          <div className="circle" />
          <div className="person" />
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
