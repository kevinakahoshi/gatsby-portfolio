import React from 'react';
import styled from 'styled-components';

const HeroImageHeaderStyles = styled.div`
  display: grid;
  grid-template-columns: 25% auto;
  grid-gap: 5rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid #CCCCCC80;
  padding-bottom: .5rem;

  .icon {
    border: 2px solid var(--medium-grey);
    border-radius: .25rem;
    padding: .25rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
    grid-gap: .125rem;

    .letter {
      border-radius: .25rem;
      padding-bottom: 100%;

      &:not(:nth-child(6)):not(:nth-child(11)) {
        background: var(--medium-grey);
      }

      &:nth-child(11) {
        background: var(--red);
      }
    }
  }

  .link-list {
    display: grid;
    grid-template-columns: 1fr .75fr .65fr 1.25fr 1fr;
    grid-gap: .25rem;
    align-items: center;

    .link {
      background: var(--medium-grey);
      border-radius: .25rem;
      height: 25%;
    }
  }

  .burger {
    height: 25%;
    background: var(--medium-grey);
    grid-column: 5;
  }
`;

const HeroImageHeader = () => {
  const letters = new Array(14)
    .fill(undefined)
    .map((_, index) => (
      <div key={index} className="letter" />
    ));

  const links = new Array(5)
    .fill(undefined)
    .map((_, index) => (
      <div key={index} className="link" />
    ));

  const burger = <div className="burger" />;

  const linksOrBurger = window.innerWidth > 850
    ? links
    : burger;

  return (
    <HeroImageHeaderStyles>
      <div className="icon">
        { letters }
      </div>
      <div className="link-list">
        { linksOrBurger }
      </div>
    </HeroImageHeaderStyles>
  )
};

export default HeroImageHeader;
