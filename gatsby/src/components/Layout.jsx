import React from 'react';
import Typography from '../styles/Typography';
import GlobalStyles from '../styles/GlobalStyles';
import styled from 'styled-components';
import 'normalize.css';
import '../styles/fonts.css';

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
