import React from 'react';
import styled from 'styled-components';

const ApplicationsToggleTooltipStyles = styled.div`
  position: relative;

  .message-wrapper {
    @media (min-width: 768px) {
      .message {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &:not(:hover) {
        .message {
          opacity: 0;
        }
      }

      &:hover {
        .message {
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
    padding: .5rem;
    position: absolute;
    width: auto;
    border-radius: .25rem;
    top: -.25rem;
    transition: .3s all;
    white-space: nowrap;

    &[data-direction="left"] {
      right: 1.5rem;

      &::after {
        content: '';
        height: .8rem;
        width: .8rem;
        background: var(--dark-grey);
        position: absolute;
        right: -.25rem;
        transform: rotate(45deg);
      }
    }

    &[data-direction="right"] {
      left: 1.5rem;

      &::before {
        content: '';
        height: .8rem;
        width: .8rem;
        background: var(--dark-grey);
        position: absolute;
        left: -.25rem;
        transform: rotate(45deg);
      }
    }

    span {
      font-size: .75rem;
      line-height: .75;
      z-index: 1;
    }
  }
`;

const ApplicationsToggleTooltip = ({ children, direction, text }) => {
  return (
    <ApplicationsToggleTooltipStyles>
      <div className="message-wrapper">
        <div
          className="message"
          data-direction={direction}
        >
          <span>
            {text}
          </span>
        </div>
        { children }
      </div>
    </ApplicationsToggleTooltipStyles>
  )
}

export default ApplicationsToggleTooltip;
