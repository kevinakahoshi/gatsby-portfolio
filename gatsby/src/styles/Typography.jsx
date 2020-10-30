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
      color: rgba(0,0,0,.5);
    }

    &:hover {
      color: rgba(0,0,0,.7);
    }

    &.active {
      color: rgba(0,0,0,.9);
    }
  }
`;

export default Typography;
