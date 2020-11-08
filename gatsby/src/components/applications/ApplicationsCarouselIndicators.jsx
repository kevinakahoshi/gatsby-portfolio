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
      border-width: 1px;
      border-style: solid;
      border-radius: 1rem;
      transition: .3s all;
      cursor: pointer;

      &:not(.active) {
        background: var(--white);
      }

      &:not(:hover) {
        border-color: var(--link-inactive-grey);
      }

      &:hover {
        border-color: var(--link-inactive-hover-grey);
      }

      &.active {
        &:not(:hover) {
          background: var(--link-inactive-grey);
        }

        &:hover {
          background: var(--link-inactive-hover-grey);
        }
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
