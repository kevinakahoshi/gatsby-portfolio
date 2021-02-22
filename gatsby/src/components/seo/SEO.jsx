import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import useMenu from '../hooks/useMenu';


const SEO = ({ location, children }) => {
  const {
    metadata: {
      siteDescription,
      siteFavicon,
      siteOGImage,
      siteTitle,
      siteUrl
    }
  } = useStaticQuery(graphql`
    query {
      metadata: sanitySiteMetadata {
        siteUrl
        siteTitle
        siteOGImage {
          asset {
            url
          }
        }
        siteFavicon {
          asset {
            url
          }
        }
        siteDescription
      }
    }
  `);

  const { openMobileNav } = useMenu();
  const bodyClass = openMobileNav ? 'no-scroll' : '';

  return (
    <Helmet>
      <html lang='en-us' />
      <title>
        { siteTitle }
      </title>
      <link rel='icon' href={siteFavicon.asset.url} type='image/svg+xml' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta charset='UTF-8' />
      <meta name='description' content={siteDescription} />
      <meta property='og:url' content={siteUrl} />
      <meta property='og:image' content={siteOGImage.asset.url} />
      <meta property='og:title' content={siteTitle} key='ogtitle' />
      <meta
        property='og:site_name'
        content={siteTitle}
        key='ogsitename'
      />
      <meta
        property='og:description'
        content={siteDescription}
        key='ogdescription'
      />
      <body className={bodyClass}>
        { children }
      </body>
    </Helmet>
  )
}

export default SEO;
