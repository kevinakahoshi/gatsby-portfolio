import { createGlobalStyle } from 'styled-components';

import corsaWoff2 from '../assets/fonts/corsa-grotesk-regular.woff2';
import corsaWoff from '../assets/fonts/corsa-grotesk-regular.woff';

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Corsa Grotesk';
    src: url(${corsaWoff2}) format('woff2')
      url(${corsaWoff}) format('woff');
  }

  html {
    font-family: 'Corsa Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--dark-grey)
  }
`;

export default Typography;
