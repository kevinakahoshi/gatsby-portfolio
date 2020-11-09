import React from 'react';
import styled from 'styled-components';
import ApplicationsCarouselLinks from './ApplicationsCarouselLinks';

// Components
import ApplicationSkeletonDescription from './ApplicationsSkeletonDescription';
import ApplicationsSkeletonTechnologies from './ApplicationsSkeletonTechnologies';
import ApplicationTechnologyBadge from './ApplicationTechnologyBadge';

const ApplicationsCarouselDescriptionStyles = styled.div`
  display: grid;
  grid-gap: 1rem;

  .project-description-wrapper {
    h4[data-deployed="false"] {
      opacity: .5;
    }

    p {
      margin-bottom: 0;
    }
  }

  .skeleton-wrapper {
    margin: 1rem 0rem;
  }

  .technologies-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    h5 {
      margin-bottom: 1rem;
    }

    .technologies-used {
      display: flex;
      flex-wrap: wrap;
      /* margin: -.125rem; */

      span {
        margin: .125rem;
      }
    }
  }
`;

const ApplicationsCarouselDescription = ({
  gitHubLink,
  liveLink,
  projectName,
  mainDescription,
  technologiesUsed
}) => {

  const descriptionBlock = liveLink
    ? <p>{ mainDescription }</p>
    : <div className="skeleton-wrapper">
        <ApplicationSkeletonDescription numberOfRows={4} />
      </div>

  const technologiesBlock = liveLink
    ? technologiesUsed.map((technology) =>
      <ApplicationTechnologyBadge key={technology} technologyName={technology} />)
    : <ApplicationsSkeletonTechnologies />;

  return (
    <ApplicationsCarouselDescriptionStyles>
      <div className="project-description-wrapper">
        <h4 data-deployed={!!liveLink}>
          { projectName }
        </h4>
        { descriptionBlock }
      </div>
      <div className="technologies-wrapper">
        { liveLink && <h5>Developed Using</h5> }
        <div className="technologies-used">
          { technologiesBlock }
        </div>
      </div>
      <ApplicationsCarouselLinks
        liveLink={liveLink}
        gitHubLink={gitHubLink}
      />
    </ApplicationsCarouselDescriptionStyles>
  )
}

export default ApplicationsCarouselDescription;
