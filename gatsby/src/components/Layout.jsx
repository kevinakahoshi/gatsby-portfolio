import React, { useEffect, useState } from 'react';

// Components
import SEO from './seo/SEO';

const Layout = ({ children }) => {
  const [browserWindow, setBrowserWindow] = useState(null);

  useEffect(() => {
    setBrowserWindow(window.location.href);
  }, []);

  return (
    <>
      <SEO location={browserWindow} />
      { children }
    </>
  );
};


export default Layout;
