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
    padding: 0;

    &:not(:hover) {
      color: var(--link-inactive-grey);
      border: 1px solid var(--link-inactive-grey);
    }

    &:hover {
      color: var(--link-inactive-hover-grey);
      border: 1px solid var(--link-inactive-hover-grey);
    }

    &:focus:not(:hover) {
      box-shadow: 0rem 0rem 0rem .125rem var(--link-inactive-grey);
    }

    &:focus:hover {
      box-shadow: 0rem 0rem 0rem .125rem var(--link-inactive-hover-grey);
    }

    .chevron {
      width: 1.25rem;
      height: auto;
    }
  }
`;

const ApplicationsCarouselButtons = ({ previousSlide, nextSlide }) => (
  <ApplicationsCarouselButtonsStyles>
    <button
      aria-label="previous-slide"
      className="previous"
      name="previous-slide"
      onClick={previousSlide}
      role="button"
    >
      <Previous className="chevron" />
    </button>
    <button
      aria-label="next-slide"
      className="next"
      name="next-slide"
      onClick={nextSlide}
      role="button"
    >
      <Next className="chevron" />
    </button>
  </ApplicationsCarouselButtonsStyles>
);

export default ApplicationsCarouselButtons;
