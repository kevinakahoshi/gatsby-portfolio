import { createGlobalStyle } from 'styled-components';
import './fonts.css';

const GlobalStyles = createGlobalStyle`
  :root {
    --black: #000000;
    --white: #FFFFFF;
    --red: #E64242;
    --dark-grey: #212529;
    --medium-grey: #CCCCCC;
    --light-grey: #F8F9FA;
    --link-inactive-grey: #7F7F7F;
    --link-inactive-hover-grey: #4C4C4C;
    --link-active-grey: #191919;
  }

  * {
    font-size: 1rem;
    box-sizing: border-box;
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

  .fade-up {
    animation: fade-up 1s forwards;
    animation-fill-mode: both;
  }

  .slide-in {
    animation: slide-in .75s forwards;
    animation-fill-mode: both;
  }

  .slide-out {
    animation: slide-out .75s forwards;
    animation-fill-mode: both;
  }

  .no-scroll {
    overflow: hidden;
  }

  .no-js {
    opacity: 0;
  }

  @keyframes fade-up {
    0% {
      opacity: 0;
      transform: translateY(10%);
    }

    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }

  @keyframes skelly-swipe {
    0% {
      background-position: 100%;
    }

    100% {
      background-position: -100%;
    }
  }

  @keyframes pulse {
    0% {
      opacity: .5;
    }

    50% {
      opacity: 1;
    }

    100% {
      opacity: .5;
    }
  }

  @keyframes slide-in {
    0% {
      opacity: 0;
      transform: translateY(25%);
    }

    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }

  @keyframes slide-out {
    0% {
      opacity: 1;
      transform: translateY(0%);
    }

    100% {
      opacity: 0;
      transform: translateY(25%);
    }
  }


  @keyframes float {
    0% {
      transform: translateY(0%) translateX(0%);
    }

    50% {
      transform: translateY(-1.5%) translateX(-0.5%);
    }

    100% {
      transform: translateY(0%) translateX(0%);
    }
  }

  @keyframes element-float {
    0% {
      transform: translateY(0%) translateX(0%);
    }

    50% {
      transform: translateY(-7.5%) translateX(-2.5%);
    }

    100% {
      transform: translateY(0%) translateX(0%);
    }
  }
`;

export default GlobalStyles;
