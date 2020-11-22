import { createGlobalStyle } from 'styled-components';


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
`;

export default GlobalStyles;
