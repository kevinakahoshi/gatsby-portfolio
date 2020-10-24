import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const ApplicationsCardImageStyles = styled.div`
  position: relative;

  .application-image {
    border-radius: .25rem;
  }

  .application-name {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--white);
    text-align: center;
    margin-bottom: 0;
    font-weight: 400;
    width: 100%;
    padding: 1rem 1.5rem;
    font-size: clamp(1.75rem, 1.75vw, 2rem)
  }
`;

const ApplicationsCardImage = ({ altText, projectName, thumbnail }) => {
  return (
    <ApplicationsCardImageStyles>
      <Img
        fluid={thumbnail.asset.fluid}
        alt={altText}
        className="application-image"
      />
      <h4 className="application-name">
        { projectName }
      </h4>
    </ApplicationsCardImageStyles>
  )
};

export default ApplicationsCardImage;