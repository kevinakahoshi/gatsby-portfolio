import React from 'react';
import GlobalStyles from './src/styles/GlobalStyles';
import Typography from './src/styles/Typography';

export const wrapPageElement = ({ element }) => (
  <>
    <Typography />
    <GlobalStyles />
    { element }
  </>
);

export const onRenderBody = ({ setBodyAttributes }, pluginOptions) => {
  setBodyAttributes({
    className: 'no-js',
    'data-opacity': 0
  });
};
