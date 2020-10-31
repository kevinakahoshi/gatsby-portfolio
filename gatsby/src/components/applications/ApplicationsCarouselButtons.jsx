import React from 'react';
import styled from 'styled-components';

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
    border: 1px solid var(--medium-grey);

    &::before,
    &::after {
      content: '';
      height: .75rem;
      width: .125rem;
      background: var(--medium-grey);
      position: absolute;
    }

    &::after {
      transform: rotate(90deg);
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
      />
      <button
        className="next"
        onClick={nextSlide}
        role="button"
      />
    </ApplicationsCarouselButtonsStyles>
  )
};

export default ApplicationsCarouselButtons;
