import React from 'react';
import styled from 'styled-components';
import ApplicationTechnologyBadge from './ApplicationTechnologyBadge';

const ApplicationsCardTechnologiesStyles = styled.div`
  h5 {
    text-align: center;
    margin-bottom: 1rem;
  }

  .technologies-wrapper {
    display: flex;
    flex-wrap: wrap;
  }
`;

const ApplicationsCardTechnologies = ({ technologiesUsed }) => {
  const allBadges = technologiesUsed.map((technology, index) => (
    <ApplicationTechnologyBadge
      key={`${technology.toLowerCase().replace(/\s/g, '-')}--${index}`}
      technologyName={technology}
    />
  ));

  return (
    <ApplicationsCardTechnologiesStyles>
      <h5>Developed Using</h5>
      <div className="technologies-wrapper">
        { allBadges }
      </div>
    </ApplicationsCardTechnologiesStyles>
  )
};

export default ApplicationsCardTechnologies;
