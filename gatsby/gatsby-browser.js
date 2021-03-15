import React from 'react';
import {
  MenuProvider
} from './src/components/context/MenuContext';
import GlobalStyles from './src/styles/GlobalStyles';
import Typography from './src/styles/Typography';
import './src/styles/fonts.css';

export const wrapRootElement = ({
  element
}) => ( <
  MenuProvider > {
    element
  } <
  /MenuProvider>
);

export const onClientEntry = () => {
  window.addEventListener('load', () => {
    document.body.className = document.body.className.replace(/\bno-js\b/, '');
  });
}

export const wrapPageElement = ({
  element
}) => ( <
  >
  <
  GlobalStyles / >
  <
  Typography / > {
    element
  } <
  />
);
