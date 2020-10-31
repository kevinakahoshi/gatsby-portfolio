import React, {
  useEffect,
  useRef,
  useState
} from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

// Components
import ApplicationsImage from './ApplicationsImage';
import { useCallback } from 'react';
import ApplicationsCarouselIndicators from './ApplicationsCarouselIndicators';

const ApplicationsCarouselStyles = styled.div`
  overflow: auto;

  .applications-slides {
    display: grid;
    grid-template-columns: repeat(6, 100%);
    grid-gap: 3rem;
    transition: .5s all;

    a.active,
    a.inactive {


      &:hover {
        cursor: grab;
      }

      &:active {
        cursor: grabbing;
      }
    }
  }
`;

const ApplicationsCarousel = ({ projects }) => {
  const [slide, setSlide] = useState(0);
  const [slideInterval, setSlideInterval] = useState(() => setInterval(nextSlide, 5000));

  const applicationImages = projects.map((project, index) => (
    <a
      key={project.id}
      href={project.liveLink}
      target="_blank"
      rel="noopener noreferrer"
      data-deployed={!!project.liveLink}
      className={index === slide ? 'active' : 'inactive'}
    >
      <ApplicationsImage
        altText={project.altText}
        projectName={project.projectName}
        thumbnail={project.thumbnail}
        view="carousel"
      />
    </a>
  ));

  const nextSlide = () => setSlide((currentSlide) =>
    currentSlide < projects.length - 1 ? currentSlide + 1 : 0);

  const previousSlide = () => setSlide((currentSlide) =>
    currentSlide > 0 ? currentSlide - 1 : projects.length - 1);

  const stopTimer = () => setSlideInterval(0);

  const startTimer = () => setSlideInterval(5000);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [slide]);

  return (
    <div>
      <ApplicationsCarouselStyles>
        <div
          className="applications-slides"
          style={{
            transform: `translateX(calc(-${slide * 100}% - ${slide * 3}rem))`
          }}
        >
          { applicationImages }
        </div>
      </ApplicationsCarouselStyles>
      <ApplicationsCarouselIndicators
        numberOfApplications={projects.length}
        setSlide={setSlide}
        slide={slide}
      />
      <button
        onClick={previousSlide}>
        Previous
      </button>
      <button
        onClick={nextSlide}>
        Next
      </button>
    </div>
  )
}

export default ApplicationsCarousel;
