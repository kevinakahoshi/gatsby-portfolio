import React from 'react';
import styled from 'styled-components';

const ApplicationsStyles = styled.section`
  background: #ffffff;
`;

const Applications = ({ projects }) => {
  console.log(projects);

  return (
    <ApplicationsStyles id="applications" className="section">
      <h1>APPLICATIONS SECTION</h1>
      { projects.map((project) => project.projectName) }
    </ApplicationsStyles>
  )
}

export default Applications;
