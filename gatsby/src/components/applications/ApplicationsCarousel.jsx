import React, {
  useEffect,
  useRef,
  useState
} from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

// Components
import ApplicationsImage from './ApplicationsImage';

const ApplicationsCarouselStyles = styled.div`
  overflow: auto;

  .applications-slides {
    display: grid;
    grid-template-columns: repeat(6, 100%);
    grid-gap: 3rem;
    transition: .125s all;

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

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [slide]);

  return (
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
  )
}

export default ApplicationsCarousel;
