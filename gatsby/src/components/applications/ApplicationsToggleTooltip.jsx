import React from 'react';
import styled from 'styled-components';

const ApplicationsToggleTooltipStyles = styled.div`
  position: relative;

  .message-wrapper {
    display: flex;
    align-items: center;

    @media (min-width: 768px) {
      .message {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &:not(:hover) {
        .message {
          visibility: hidden;
          opacity: 0;
        }
      }

      &:hover {
        .message {
          visibility: visible;
          opacity: 1;
        }
      }
    }

    @media (max-width: 767px) {
      .message {
        display: none;
      }
    }
  }

  .message {
    background: var(--dark-grey);
    color: var(--white);
    padding: 0.5rem;
    position: absolute;
    width: auto;
    border-radius: var(--border-radius);
    transition: opacity 0.3s;
    white-space: nowrap;

    &[data-direction='left'] {
      right: 1.5rem;

      &::after {
        content: '';
        height: 0.8rem;
        width: 0.8rem;
        background: var(--dark-grey);
        position: absolute;
        right: -0.25rem;
        transform: rotate(45deg);
      }
    }

    &[data-direction='right'] {
      left: 1.5rem;

      &::before {
        content: '';
        height: 0.8rem;
        width: 0.8rem;
        background: var(--dark-grey);
        position: absolute;
        left: -0.25rem;
        transform: rotate(45deg);
      }
    }

    span {
      font-size: 0.75rem;
      z-index: 1;
      height: 0.6rem;
      display: flex;
      align-items: center;
      position: relative;
      top: -1px;
    }
  }
`;

const ApplicationsToggleTooltip = ({ children, direction, text }) => (
  <ApplicationsToggleTooltipStyles>
    <div className="message-wrapper">
      <div className="message" data-direction={direction}>
        <span>{text}</span>
      </div>
      {children}
    </div>
  </ApplicationsToggleTooltipStyles>
);

export default ApplicationsToggleTooltip;
