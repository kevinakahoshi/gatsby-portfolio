import React, { createRef, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { OutboundLink } from 'gatsby-plugin-google-gtag';

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
      border-radius: var(--border-radius);
      touch-action: pan-y;
      transform: translate3d(0, 0, 0);

      div[data-deployed='false'] {
        opacity: 0.5;
        pointer-events: none;
      }

      .applications-slick-carousel {
        .slick-track {
          display: flex;

          .slick-slide > div {
            font-size: 0;
          }
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
      width: 100%;
    }
  }
`;

const ApplicationsCarousel = ({ applications }) => {
  const [slide, setSlide] = useState(0);
  const slider = createRef();

  const applicationImages = applications.map((project, index) => {
    if (!project.liveLink) {
      return (
        <div
          className={`carousel-image-slide${
            index === slide ? ' active' : ' inactive'
          }`}
          data-deployed={!!project.liveLink}
          key={`${project.id}--${index}`}
        >
          <ApplicationsImage
            altText={project.altText}
            projectName={project.projectName}
            thumbnail={project.thumbnail}
            view="carousel"
          />
        </div>
      );
    } else {
      return (
        <OutboundLink
          className={`carousel-image-slide${
            index === slide ? ' active' : ' inactive'
          }`}
          data-deployed={!!project.liveLink}
          href={project.liveLink}
          key={`${project.id}--${index}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <ApplicationsImage
            altText={project.altText}
            projectName={project.projectName}
            thumbnail={project.thumbnail}
            view="carousel"
          />
        </OutboundLink>
      );
    }
  });

  const applicationsDescriptions = applications.map((project, index) => (
    <ApplicationsCarouselDescription
      key={`${project.id}--${index}`}
      gitHubLink={project.gitHubLink}
      liveLink={project.liveLink}
      projectName={project.projectName}
      mainDescription={project.mainDescription?.replace(/\\/g, '')}
      technologiesUsed={project.technologiesUsed}
    />
  ));

  const pauseSlides = () => slider.current.slickPause();
  const startSlides = () => slider.current.slickPlay();
  const previousSlide = () => slider.current.slickPrev();
  const nextSlide = () => slider.current.slickNext();
  const skipToSlide = (index) => slider.current.slickGoTo(index, false);

  const settings = {
    infinite: true,
    speed: 350,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'applications-slick-carousel',
    arrows: false,
    beforeChange: (oldIndex, newIndex) => setSlide(() => newIndex),
    autoplay: true,
    autoplaySpeed: 8000,
  };

  return (
    <ApplicationsCarouselStyles numberOfSlides={applications.length}>
      <div
        className="carousel-image-section"
        onMouseOver={pauseSlides}
        onMouseLeave={startSlides}
      >
        <div
          className="slides-wrapper"
          onTouchStart={pauseSlides}
          onMouseDown={pauseSlides}
          onTouchEnd={startSlides}
          onMouseUp={startSlides}
        >
          <Slider ref={slider} {...settings}>
            {applicationImages}
          </Slider>
        </div>
        <div className="controls-wrapper">
          <ApplicationsCarouselIndicators
            numberOfApplications={applications.length}
            skipToSlide={skipToSlide}
            slide={slide}
          />
          <ApplicationsCarouselButtons
            previousSlide={previousSlide}
            nextSlide={nextSlide}
          />
        </div>
      </div>
      <div
        className="carousel-content-section"
        onMouseOver={pauseSlides}
        onMouseLeave={startSlides}
      >
        <div className="descriptions-wrapper">
          <div className="applications-descriptions">
            {applicationsDescriptions[slide]}
          </div>
        </div>
      </div>
    </ApplicationsCarouselStyles>
  );
};

export default ApplicationsCarousel;
