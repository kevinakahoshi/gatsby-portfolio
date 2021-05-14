import { createGlobalStyle } from 'styled-components';

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
    --border-radius: 0.25rem;
  }

  * {
    font-size: 1rem;
    box-sizing: border-box;
  }

  *:focus {
    outline-color: var(--red);
  }

  a, button {
    cursor: pointer;
    touch-action: manipulation;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  .section {
    @media (min-width: 768px) {
      padding: 5rem 1rem;
    }

    @media (max-width: 767px) {
      padding: 3.5rem 1rem;
    }
  }

  .no-scroll {
    overflow: hidden;
  }

  .no-js,
  &[data-opacity="0"] {
    opacity: 0;
  }

  &[data-opacity="1"] {
    opacity: 1;
    transition: opacity .3s;
  }
`;

export default GlobalStyles;
