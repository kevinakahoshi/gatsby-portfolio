const dotenv = require('dotenv');

dotenv.config({
  path: '.env'
});

module.exports = {
  flags: {
    PRESERVE_WEBPACK_CACHE: true
  },
  siteMetadata: {
    title: 'Kevin Akahoshi // Software Engineer in OC',
    url: 'https://kevinakahoshi.com/',
    description: 'Experienced with React.js, JavaScript (ES5 + ES6), Shopify, and more',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '4l2zpa34',
        dataset: 'production',
        watchmode: true,
        token: process.env.SANITY_TOKEN
      }
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: ["UA-155193586-1"],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: true,
          respectDNT: true,
          exclude: [],
        },
      },
    },
  ],
}
