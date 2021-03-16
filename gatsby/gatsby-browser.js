import React from 'react';
import { MenuProvider } from './src/components/context/MenuContext';
import GlobalStyles from './src/styles/GlobalStyles';
import Typography from './src/styles/Typography';
import './src/styles/fonts.css';
import 'normalize.css';

export const wrapRootElement = ({ element }) => (
  <MenuProvider>
    { element }
  </MenuProvider>
);

export const onClientEntry = () => {
  // window.addEventListener('load', () => {
  //   document.body.className = document.body.className.replace(/\bno-js\b/, '');
  // });

  const removeAttribute = () => {
    document.body.setAttribute('data-opacity', 1);
  }

  const documentReady = (callback) => {
    document.readyState === 'complete'
      ? callback()
      : setTimeout(() => {
        documentReady(callback);
      }, 50);
  }

  documentReady(removeAttribute);
}

export const wrapPageElement = ({ element }) => (
  <>
    <Typography />
    <GlobalStyles />
    { element }
  </>
);
