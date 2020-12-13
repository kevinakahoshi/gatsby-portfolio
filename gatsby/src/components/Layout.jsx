import React from 'react';
import Typography from '../styles/Typography';
import GlobalStyles from '../styles/GlobalStyles';
import styled from 'styled-components';
import 'normalize.css';
import '../styles/fonts.css';

// Components
import SEO from './seo/SEO';

const Layout = ({ children }) => {
return (
  <>
    <SEO location={window.location.href} />
    <GlobalStyles />
    <Typography />
    { children }
  </>
  )
};


export default Layout;
