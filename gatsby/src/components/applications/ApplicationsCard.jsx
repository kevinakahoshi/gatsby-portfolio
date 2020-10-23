import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const ApplicationsCardStyles = styled.div`
  background: var(--white);
  border-radius: .25rem;
  box-shadow: 0 1rem 3rem rgba(0,0,0,.175);
  padding: 1rem;
  display: grid;
  grid-gap: 1rem;
  grid-template-rows: auto 1fr 1fr;

  .application-image-wrapper {
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
      padding: 1rem;
    }
  }

  p {
    margin-bottom: 0;
  }
`;

const ApplicationsCard = ({ application }) => {
  const {
    altText,
    gitHubLink,
    liveLink,
    projectName,
    shortDescription,
    technologiesUsed,
    thumbnail
  } = application;

  return (
    <ApplicationsCardStyles>
      <div className="application-image-wrapper">
        <Img
          fluid={thumbnail.asset.fluid}
          alt={altText}
          className="application-image"
        />
        <h4 className="application-name">
          { projectName }
        </h4>
      </div>
      <div className="short-description-wrapper">
        <p>
          { shortDescription }
        </p>
      </div>
      <div className="technologies-used">
        <h5>
          Developed Using
        </h5>
      </div>
    </ApplicationsCardStyles>
  )
};

export default ApplicationsCard;
