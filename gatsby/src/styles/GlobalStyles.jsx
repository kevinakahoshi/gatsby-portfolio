import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
  :root {
    --red: #E64242;
    --dark-grey: #212529;
  }

  a:hover {
    cursor: pointer;
  }
`;

export default GlobalStyles;
