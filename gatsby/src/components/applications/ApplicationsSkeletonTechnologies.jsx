import React, {
  useMemo
} from 'react';
import styled from 'styled-components';
import { Pulse } from '../../styles/Keyframes';

const ApplicationsSkeletonTechnologiesStyles = styled.div`
  h5 {
    margin-bottom: 1rem;
    opacity: .5;
  }

  .skeleton-badge-wrapper {
    display: flex;
    flex-wrap: wrap;

    .skeleton-badge {
      border-radius: .25rem;
      height: 1.125rem;
      background: #f1f1f1;
      margin: .125rem;
      animation: ${Pulse} 1.25s linear infinite;
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
      <h5>Coming Soon</h5>
      <div className="skeleton-badge-wrapper">
        { allSkeletonTech }
      </div>
    </ApplicationsSkeletonTechnologiesStyles>
  )
};

export default ApplicationsSkeletonTechnologies;
