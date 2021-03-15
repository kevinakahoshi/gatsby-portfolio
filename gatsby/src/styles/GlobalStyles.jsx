import { createGlobalStyle } from 'styled-components';
import { SlideIn, SlideOut } from './Keyframes';

const GlobalStyles = createGlobalStyle`
  :root {
    --black: #000000;
    --white: #FFFFFF;
    --red: #E64242;
    --dark-grey: #212529;
    --medium-grey: #CCCCCC;
    --light-grey: #F8F9FA;
    --link-inactive-grey: #767676;
    --link-inactive-hover-grey: #4C4C4C;
    --link-active-grey: #191919;
  }

  * {
    font-size: 1rem;
    box-sizing: border-box;
  }

  *:focus {
    outline-color: var(--red);
  }

  button,
  a {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  a, button {
    cursor: pointer;
  }

  .section {
    padding: 5rem 1rem;
  }

  .slide-in {
    animation: ${SlideIn} .75s forwards;
    animation-fill-mode: both;
  }

  .slide-out {
    animation: ${SlideOut} .75s forwards;
    animation-fill-mode: both;
  }

  .no-scroll {
    overflow: hidden;
  }

  .no-js {
    opacity: 0;
  }
`;

export default GlobalStyles;
