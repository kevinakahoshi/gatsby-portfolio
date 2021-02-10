import React from 'react';
import 'normalize.css';

// Components
import SEO from './seo/SEO';

const Layout = ({ children }) => {
return (
  <>
    <SEO location={window.location.href} />
    { children }
  </>
  )
};


export default Layout;
