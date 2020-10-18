import React from 'react';
import 'normalize.css';
import Typography from '../styles/Typography';
import GlobalStyles from '../styles/GlobalStyles';

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Typography />
    { children }
  </>
)

export default Layout;
