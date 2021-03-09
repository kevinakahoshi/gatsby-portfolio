import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const ApplicationsImageStyles = styled.div`
  position: relative;

  &[data-disabled="true"] {
    opacity: .5;
    pointer-events: none;
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
    pointer-events: none;

    &[data-view="grid"] {
      font-size: clamp(1.75rem, 1.75vw, 2rem)
    }

    &[data-view="carousel"] {
      font-size: clamp(2rem, 3.25vw, 3rem)
    }
  }
`;

const ApplicationsImage = ({
  altText,
  projectName,
  thumbnail,
  view,
  disabled = false
}) => (
  <ApplicationsImageStyles data-disabled={disabled}>
    <Img
      fluid={thumbnail.asset.fluid}
      alt={altText}
      className="application-image"
    />
    <h4
      className="application-name"
      data-view={view}
    >
      { projectName }
    </h4>
  </ApplicationsImageStyles>
);

export default ApplicationsImage;
