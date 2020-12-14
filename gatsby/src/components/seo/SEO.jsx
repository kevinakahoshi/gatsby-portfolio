import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import useMenu from '../hooks/useMenu';


const SEO = ({ location, children }) => {
  const {
    site: {
      siteMetadata: {
        description,
        title
      }
    }
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
          title
        }
      }
    }
  `);

  const { openMobileNav } = useMenu();
  const bodyClass = openMobileNav ? 'no-scroll' : '';

  // TODO: Replace og:image URL so that it is not the favicon
  return (
    <Helmet>
      <html lang="en-us" />
      <title>
        { title }
      </title>
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charset="UTF-8" />
      <meta name="description" content={description} />
      <meta property="og:url" content={location} />
      <meta property="og:image" content="/favicon.svg" />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta
        property="og:site_name"
        content={title}
        key="ogsitename"
      />
      <meta
        property="og:description"
        content={description}
        key="ogdescription"
      />
      <body className={bodyClass}>
        { children }
      </body>
    </Helmet>
  )
}

export default SEO;
