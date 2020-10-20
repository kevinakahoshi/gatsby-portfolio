import React from 'react';
import 'normalize.css';
import Typography from '../styles/Typography';
import GlobalStyles from '../styles/GlobalStyles';
import styled from 'styled-components';

const Layout = ({ children }) => {
return (
  <>
    <GlobalStyles />
    <Typography />
    { children }
  </>
  )
};


export default Layout;
