import React from 'react';
import styled from 'styled-components';

const ApplicationsCarouselIndicatorsStyles = styled.div`
  display: flex;
  justify-content: flex-start;

  .indicators-wrapper {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(6, 1fr);

    .indicator {
      height: 1rem;
      width: 1rem;
      border: 1px solid var(--medium-grey);
      border-radius: 1rem;
      transition: .3s all;
      cursor: pointer;

      &:not(.active) {
        background: var(--white);
      }

      &.active {
        background: var(--medium-grey);
      }
    }
  }
`;

const ApplicationsCarouselIndicators = ({ numberOfApplications, setSlide, slide }) => {
  const indicators = new Array(numberOfApplications)
    .fill(undefined)
    .map((element, index) =>
      <div
        key={index}
        className={`indicator${index === slide ? ' active' : ''}`}
        onClick={() => setSlide((currentSlide) => index)}
      />);

  return (
    <ApplicationsCarouselIndicatorsStyles>
      <div className="indicators-wrapper">
        { indicators }
      </div>
    </ApplicationsCarouselIndicatorsStyles>
  );
};

export default ApplicationsCarouselIndicators;
