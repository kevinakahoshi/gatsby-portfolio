import {
  createGlobalStyle
} from 'styled-components';
import {
  CorsaWoff2,
  CorsaWoff
} from '../assets/fonts/index';

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Corsa Grotesk';
    src: url(${CorsaWoff2}) format('woff2'),
      url(${CorsaWoff}) format('woff');
  }

  html {
    font-family: 'Corsa Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--dark-grey)
  }

  .center {
    text-align: center;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: .5rem;
    line-height: 1.2;
  }

  h1 {

  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 2.5rem;
  }

  h4 {
    font-size: 1.5rem;
  }

  h5 {
    font-size: 1.25rem;
  }

  h6 {

  }

  p {
    margin-top: 0;
    line-height: 1.5rem;
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  a {
    transition: .3s all;

    &:not(.active) {
      color: var(--link-inactive-grey);
    }

    &:hover {
      color: var(--link-inactive-hover-grey);
    }

    &.active {
      color: var(--link-active-grey);
    }

    &[data-deployed="false"] {
      opacity: .5;
      pointer-events: none;
    }

    &.animated-underline {
      position: relative;
      padding: .5rem 0;
      transition: .3s all;
      text-align: center;
      font-size: 1.25rem;
      width: fit-content;
      margin: auto;
      text-decoration: none;

      &:not(.active) {
        color: var(--link-inactive-grey);
      }

      &:hover {
        color: var(--link-inactive-hover-grey);

        &::after {
          width: 100%;
          transition: .3s all;
        }
      }

      &.active {
        color: var(--link-active-grey);
      }

      &::before,
      &::after  {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        height: 3px;
        width: 100%;
        background-color: transparent;
        z-index: 1;
        display: inline-block;
        transition: .3s all;
      }

      &::after {
        width: 0%;
        background: linear-gradient(-45deg, #e64242, #e67442);
      }
    }
  }
`;

export default Typography;
