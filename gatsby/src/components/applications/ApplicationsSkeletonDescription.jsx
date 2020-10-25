import React from 'react';
import styled from 'styled-components';

const ApplicationsSkeletonDescriptionStyles = styled.div`
  display: grid;
  grid-template-rows: repeat(3, minmax(1.25rem, 1.35rem));
  grid-gap: .25rem;

  .top-bar,
  .middle-bar,
  .bottom-bar {
    width: 100%;
    border-radius: .25rem;
    background: #f8f8f8;
    background-image: linear-gradient(45deg, var(--light-grey) 10%, #f1f1f1 30%, var(--light-grey) 50%);
    background-size: 200%;
    animation: skelly-swipe 1.25s linear infinite;
  }

  .top-bar {
    animation-delay: .2s;
  }

  .middle-bar {
    animation-delay: .1s;
  }

  .bottom-bar {
    animation-delay: .0s;
  }
`;

const ApplicationsSkeletonDescription = () => {
  return (
    <ApplicationsSkeletonDescriptionStyles>
      <div className="top-bar" />
      <div className="middle-bar" />
      <div className="bottom-bar" />
    </ApplicationsSkeletonDescriptionStyles>
  )
}

export default ApplicationsSkeletonDescription;
