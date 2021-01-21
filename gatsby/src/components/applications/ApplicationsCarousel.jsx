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
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;
  }

  @media (max-width: 767px) {
    grid-template-rows: 1fr auto;
    grid-gap: 1rem;
  }

  .carousel-image-section {
    display: grid;
    grid-gap: 1rem;
    align-self: self-start;

    .slides-wrapper {
      overflow: hidden;
      border-radius: .25rem;
    }

    .applications-slides {
      display: grid;
      grid-template-columns: repeat(${({numberOfSlides}) => numberOfSlides}, 100%);
      grid-gap: 3rem;

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
    /* overflow: hidden; */
    height: 100%;
    display: flex;

    @media (min-width: 768px) {
      justify-content: center;
      align-items: center;
    }

    @media (max-width: 767px) {
      justify-content: flex-start;
    }

    .descriptions-wrapper {
      /* overflow: auto; */
      width: 100%;

    }

    .applications-descriptions {
      /* display: grid;
      grid-template-columns: repeat(6, 100%);
      grid-gap: 3rem;
      transition: .5s all; */
    }
  }
`;

const ApplicationsCarousel = ({ projects }) => {
  const [slide, setSlide] = useState(1);
  const [isActive, setIsActive] = useState(true);
  const [slideState, setSlideState] = useState({
    previous: 0,
    current: 1,
    next: 2,
    transform: `translateX(calc(-${1 * 100}% - ${1 * 3}rem))`,
    transition: '0.3s all'
  });
  const [onLastSlide, setOnLastSlide] = useState(false);

  const firstProjectLastElement = projects[0];
  const lastProjectFirstElement = projects[projects.length - 1];

  const carouselProjectsList = [
    lastProjectFirstElement,
    ...projects,
    firstProjectLastElement
  ];

  const updatedNextSlide = () => {
    setSlideState((previousState) => ({
      previous: previousState.current,
      current: previousState.next,
      next: previousState.next + 1,
      transform: `translateX(calc(-${previousState.next * 100}% - ${previousState.next * 3}rem))`,
      transition: '0.3s all'
    }));

    if (slideState.next < carouselProjectsList.length - 1) return;

    setTimeout(() => setOnLastSlide(() => true), 300);
  }

  const applicationImages = carouselProjectsList.map((project, index) => (
    <a
      key={`${project.id}--${index}`}
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

  const applicationsDescriptions = carouselProjectsList.map((project, index) => (
    <ApplicationsCarouselDescription
      key={`${project.id}--${index}`}
      gitHubLink={project.gitHubLink}
      liveLink={project.liveLink}
      projectName={project.projectName}
      mainDescription={project.mainDescription?.replace(/\\/g, '')}
      technologiesUsed={project.technologiesUsed}
    />
  ))

  const nextSlide = () => setSlide((currentSlide) =>
    currentSlide < carouselProjectsList.length - 1 ? currentSlide + 1 : 0);

  const previousSlide = () => setSlide((currentSlide) =>
    currentSlide > 0 ? currentSlide - 1 : carouselProjectsList.length - 1);

  const pauseSlides = () => setIsActive(() => false);

  const startSlides = () => setIsActive(() => true);

  // TODO:
  //   1. Timer start and stop
  //   2. Infinite forward and backward sliding
  //   3. If you are past the halfway mark, move forward to go to the first slide, etc.

  useEffect(() => {
    if (onLastSlide) {
      setSlideState(() => ({
        previous: 0,
        current: 1,
        next: 2,
        transform: `translateX(calc(-${1 * 100}% - ${1 * 3}rem))`,
        transition: ''
      }));
      setOnLastSlide(() => false);
    }

    return () => setSlideState(({ previous, current, next, transform }) => ({
      previous: previous,
      current: current,
      next: next,
      transform: transform,
      transition: '0.3s all'
    }));
    // let interval = null;
    // if (isActive) {
    //   interval = setInterval(nextSlide, 10000);
    // } else {
    //   clearInterval(interval);
    // }
    // return () => clearInterval(interval);
  }, [slide, isActive, onLastSlide]);

  console.table(slideState);

  return (
    <ApplicationsCarouselStyles numberOfSlides={carouselProjectsList.length}>
      <div
        className="carousel-image-section"
        // onMouseOver={pauseSlides}
        // onMouseLeave={startSlides}
      >
        <div className="slides-wrapper">
          <div
            className="applications-slides"
            style={{
              transform: slideState.transform,
              transition: slideState.transition
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
            nextSlide={updatedNextSlide}
          />
        </div>
      </div>
      <div
        className="carousel-content-section"
        // onMouseOver={pauseSlides}
        // onMouseLeave={startSlides}
      >
        <div className="descriptions-wrapper">
          <div className="applications-descriptions"
            // style={{
            //   transform: `translateX(calc(-${slide * 100}% - ${slide * 3}rem))`
            // }}
          >
            { applicationsDescriptions[slide] }
          </div>
        </div>
      </div>
    </ApplicationsCarouselStyles>
  )
}

export default ApplicationsCarousel;
