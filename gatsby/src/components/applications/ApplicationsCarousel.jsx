import React, {
  useEffect,
  useRef,
  useState
} from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

// Components
import ApplicationsImage from './ApplicationsImage';
import ApplicationsCarouselIndicators from './ApplicationsCarouselIndicators';
import ApplicationsCarouselButtons from './ApplicationsCarouselButtons';
import ApplicationsCarouselDescription from './ApplicationsCarouselDescription';

const ApplicationsCarouselStyles = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 3rem;
  align-items: center;

  .carousel-image-section {
    display: grid;
    grid-gap: 1rem;

    .slides-wrapper {
      overflow: auto;
    }

    .applications-slides {
      display: grid;
      grid-template-columns: repeat(6, 100%);
      grid-gap: 3rem;
      transition: .5s all;

      a[data-deployed="false"] {
        opacity: .5;
      }

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

    .controls-wrapper {
      display: grid;
      grid-template-columns: 1fr auto;
      grid-gap: 1rem;
      align-items: center;
    }
  }

  .carousel-content-section {
    .descriptions-wrapper {
      overflow: auto;
    }

    .applications-descriptions {
      display: grid;
      grid-template-columns: repeat(6, 100%);
      grid-gap: 3rem;
      transition: .5s all;
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

  const applicationsDescriptions = projects.map((project, index) => (
    <ApplicationsCarouselDescription
      key={project.id}
      projectName={project.projectName}
      mainDescription={project.mainDescription}
    />
  ))

  const nextSlide = () => setSlide((currentSlide) =>
    currentSlide < projects.length - 1 ? currentSlide + 1 : 0);

  const previousSlide = () => setSlide((currentSlide) =>
    currentSlide > 0 ? currentSlide - 1 : projects.length - 1);

  // TODO:
  //   1. Timer start and stop
  //   2. Infinite forward and backward sliding
  //   3. If you are past the halfway mark, move forward to go to the first slide, etc.

  // useEffect(() => {
  //   const interval = setInterval(nextSlide, 5000);
  //   return () => clearInterval(interval);
  // }, [slide]);

  return (
    <ApplicationsCarouselStyles>
      <div className="carousel-image-section">
        <div className="slides-wrapper">
          <div
            className="applications-slides"
            style={{
              transform: `translateX(calc(-${slide * 100}% - ${slide * 3}rem))`
            }}
          >
            { applicationImages }
          </div>
        </div>
        <div className="controls-wrapper">
          <ApplicationsCarouselIndicators
            numberOfApplications={projects.length}
            setSlide={setSlide}
            slide={slide}
          />
          <ApplicationsCarouselButtons
            previousSlide={previousSlide}
            nextSlide={nextSlide}
          />
        </div>
      </div>
      <div className="carousel-content-section">
        <div className="descriptions-wrapper">
          <div
            className="applications-descriptions"
            style={{
              transform: `translateX(calc(-${slide * 100}% - ${slide * 3}rem))`
            }}
          >
            { applicationsDescriptions }
          </div>
        </div>
      </div>
    </ApplicationsCarouselStyles>
  )
}

export default ApplicationsCarousel;
