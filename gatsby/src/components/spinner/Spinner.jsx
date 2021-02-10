import React, { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';

const SpinnerStyles = styled.div`
  background: #ffffff;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;

  &[data-hide="true"] {
    display: none;
  }

  .spinner-wrapper {
    position: relative;
    padding: 3rem;

    .top-spinner,
    .bottom-spinner {
      top: 0;
      left: 0;
      padding: 3rem;
      border-width: .5rem;
      border-style: solid;
      border-radius: 6rem;
      position: absolute;
    }

    .top-spinner {
      border-color: var(--red) transparent transparent transparent;
      animation: spin 1s infinite linear;
    }

    .bottom-spinner {
      border-color: transparent var(--medium-grey) var(--medium-grey) var(--medium-grey);
      animation: spin 1.5s infinite linear;
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

const Spinner = () => {
  const [hide, setHide] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setHide(() => true);
    }, 3000);
  }, []);

  return (
    <>
      {!hide &&
        <SpinnerStyles data-hide={hide}>
        <div className="spinner-wrapper">
          <div className="bottom-spinner" />
          <div className="top-spinner" />
        </div>
      </SpinnerStyles>}
    </>
  )
}

export default Spinner;
