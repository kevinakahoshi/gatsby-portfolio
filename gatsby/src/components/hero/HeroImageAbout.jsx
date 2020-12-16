import React from 'react';
import styled from 'styled-components';

// Components
import HeroImageTextLine from './HeroImageTextLine';

const HeroImageAboutStyles = styled.div`
  height: 100%;
  display: grid;
  grid-gap: 1rem;
  padding: 2.5rem 1rem;
  margin: 0rem -1rem;
  background: var(--light-grey);

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
`;

const HeroImageAbout = () => {
  const heroImageTextLines = new Array(7)
    .fill(undefined)
    .map((_, index) => <HeroImageTextLine index={index + 1} key={index} />);

  return (
    <HeroImageAboutStyles>
      <div className="about-image" />
      <div className="about-text">
        { heroImageTextLines }
      </div>
    </HeroImageAboutStyles>
  )
};

export default HeroImageAbout;
