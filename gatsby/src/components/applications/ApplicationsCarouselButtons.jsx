import React from 'react';
import styled from 'styled-components';
import {
  FiChevronLeft as Previous,
  FiChevronRight as Next
} from 'react-icons/fi';

const ApplicationsCarouselButtonsStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;

  .previous,
  .next {
    height: 3.125rem;
    width: 3.125rem;
    border-radius: .25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background: var(--white);
    outline: none;
    transition: .3s all;

    &:not(:hover) {
      color: var(--medium-grey);
      border: 1px solid var(--medium-grey);
    }

    &:hover {
      color: var(--dark-grey);
      border: 1px solid var(--dark-grey);
    }

    &:focus:not(:hover) {
      box-shadow: 0rem 0rem 0rem .125rem var(--medium-grey);
    }

    &:focus:hover {
      box-shadow: 0rem 0rem 0rem .125rem var(--dark-grey);
    }

    .chevron {
      width: 1.25rem;
      height: auto;
    }
  }
`;

const ApplicationsCarouselButtons = ({ previousSlide, nextSlide }) => {
  return (
    <ApplicationsCarouselButtonsStyles>
      <button
        className="previous"
        onClick={previousSlide}
        role="button"
      >
        <Previous className="chevron" />
      </button>
      <button
        className="next"
        onClick={nextSlide}
        role="button"
      >
        <Next className="chevron" />
      </button>
    </ApplicationsCarouselButtonsStyles>
  )
};

export default ApplicationsCarouselButtons;
