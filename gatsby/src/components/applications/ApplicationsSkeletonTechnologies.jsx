import React from 'react';
import styled from 'styled-components';

const generateWidth = () => {
  return Math.floor(Math.random() * 4 + 3);
};

const ApplicationsSkeletonTechnologiesStyles = styled.div`
  h5 {
    text-align: center;
    margin-bottom: 1rem;
    opacity: .5;
  }

  .skeleton-badge-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: .25rem;

    .skeleton-badge {
      border-radius: .25rem;
      height: 1.125rem;
      background: #f1f1f1;
      /* background-image: linear-gradient(45deg, var(--light-grey) 10%, #f1f1f1 30%, var(--light-grey) 50%); */
      /* background-size: 200%; */
      animation: pulse 1.25s linear infinite;
      /* animation: skelly-swipe 1.25s linear infinite; */
    }
  }
`;

const ApplicationsSkeletonTechnologies = ({ technologiesUsed }) => {
  const numberOfBadges = 7;
  let maxDelay = 0.1 * numberOfBadges ;

  const allSkeletonTech = new Array(numberOfBadges)
    .fill(undefined)
    .map((element, index) => {
      const width = generateWidth();
      const delay = maxDelay;
      maxDelay -= 0.1;

      return (
        <div className="skeleton-badge"
          key={`${width}--${index}`}
          style={{
            width: `${width}rem`
          }}
        />
      )
    });

  return (
    <ApplicationsSkeletonTechnologiesStyles>
      <h5>
        Coming Soon
      </h5>
      <div className="skeleton-badge-wrapper">
        { allSkeletonTech }
      </div>
    </ApplicationsSkeletonTechnologiesStyles>
  )
}

export default ApplicationsSkeletonTechnologies;
