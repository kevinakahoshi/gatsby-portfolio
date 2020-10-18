import React from 'react';
import 'normalize.css';
import Typography from '../styles/Typography';

const Layout = ({ children }) => (
  <>
    <Typography />
    { children }
  </>
)

export default Layout;
