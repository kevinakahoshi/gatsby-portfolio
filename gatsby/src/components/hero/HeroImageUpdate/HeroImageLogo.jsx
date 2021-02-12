import React from 'react';
import styled from 'styled-components';

const HeroImageLogoStyles = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: .5rem;
  padding: .25rem;
  border: 2px solid var(--medium-grey);

  .first-name,
  .last-name {
    display: grid;
    grid-gap: .125rem;

    .letter {
      padding: .125rem;
    }
  }

  .first-name {
    grid-template-columns: repeat(5, 1fr);

    .letter {
      background: var(--medium-grey);
    }
  }

  .last-name {
    grid-template-columns: repeat(8, 1fr);

    .letter:not(:nth-child(5)) {
      background: var(--medium-grey);
    }

    .letter:nth-child(5) {
      background: var(--red);
    }
  }
`;

const HeroImageLogo = () => (
  <HeroImageLogoStyles>
    <div className="first-name">
      <span className="letter" />
      <span className="letter" />
      <span className="letter" />
      <span className="letter" />
      <span className="letter" />
    </div>
    <div className="last-name">
      <span className="letter" />
      <span className="letter" />
      <span className="letter" />
      <span className="letter" />
      <span className="letter" />
      <span className="letter" />
      <span className="letter" />
      <span className="letter" />
    </div>
  </HeroImageLogoStyles>
);

export default HeroImageLogo;
