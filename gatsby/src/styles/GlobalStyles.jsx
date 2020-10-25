import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
  :root {
    --white: #FFFFFF;
    --red: #E64242;
    --dark-grey: #212529;
    --medium-grey: #CCCCCC;
    --light-grey: #f8f9fA;
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

  @keyframes skelly-swipe {
    0% {
      background-position: 200%;
    }

    100% {
      background-position: -100%;
    }
  }
`;

export default GlobalStyles;
