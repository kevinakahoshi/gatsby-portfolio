import React, {
  useMemo
} from 'react';
import styled from 'styled-components';

const ApplicationsSkeletonTechnologiesStyles = styled.div`
  h5 {
    text-align: center;
    margin-bottom: 1rem;
    opacity: .5;
  }

  .skeleton-badge-wrapper {
    display: flex;
    flex-wrap: wrap;
    /* margin: -.125rem; */

    .skeleton-badge {
      border-radius: .25rem;
      height: 1.125rem;
      background: #f1f1f1;
      margin: .125rem;
      /* background-image: linear-gradient(45deg, var(--light-grey) 10%, #f1f1f1 30%, var(--light-grey) 50%); */
      /* background-size: 200%; */
      animation: pulse 1.25s linear infinite;
      /* animation: skelly-swipe 1.25s linear infinite; */
    }
  }
`;

const ApplicationsSkeletonTechnologies = ({ technologiesUsed }) => {
  const badgeWidths = useMemo(() => [6, 5, 3, 5, 3, 6, 3]);
  const allSkeletonTech = useMemo(() => new Array(badgeWidths.length)
    .fill(undefined)
    .map((element, index) => (
        <div className="skeleton-badge"
          key={`${badgeWidths[index]}--${index}`}
          style={{
            width: `${badgeWidths[index]}rem`
          }}
        />
      )), [badgeWidths]);

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
