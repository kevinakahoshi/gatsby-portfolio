import React from 'react';
import { MenuProvider } from './src/components/context/MenuContext';

export const wrapRootElement = ({ element }) => (
  <MenuProvider>
    { element }
  </MenuProvider>
);

export const onClientEntry = () => {
  window.addEventListener('load', () => {
    document.body.className = document.body.className.replace(/\bno-js\b/, '');
  });
}
