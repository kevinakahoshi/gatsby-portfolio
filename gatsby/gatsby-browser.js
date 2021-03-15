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

// TODO: Figure out what's going on with loading the page
export const onClientEntry = () => {
  // window.addEventListener('load', () => {
  //   document.body.className = document.body.className.replace(/\bno-js\b/, '');
  // });

  const removeClass = () =>
    document.body.className = document.body.className.replace(/\bno-js\b/, '');

  const documentReady = (callback) => {
    document.readyState === 'complete'
      ? callback()
      : document.addEventListener('DOMContentLoaded', callback);
  }

  documentReady(removeClass);
}

export const wrapPageElement = ({ element }) => (
  <>
    <GlobalStyles />
    <Typography />
    { element }
  </>
);
