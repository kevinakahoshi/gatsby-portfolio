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
  .col-1,
  .col-2 {
    background: var(--white);
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, .175);
    /* animation: float 5s infinite ease-in-out; */
    border: 2px solid var(--medium-grey);
  }

  .image {
    height: 100%;
    width: 100%;
  }
`;

const HeroImageBelowTheFold = () => {
  return (
    <HeroImageBelowTheFoldStyles>
      <div className="btf-left">
        <div className="image" />
      </div>
      <div className="btf-right">
        <div className="col-1" />
        <div className="col-2" />
      </div>
    </HeroImageBelowTheFoldStyles>
  )
};

export default HeroImageBelowTheFold;
