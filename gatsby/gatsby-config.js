const dotenv = require('dotenv');

dotenv.config({
  path: '.env'
});

module.exports = {
  siteMetadata: {
    title: 'Kevin Akahoshi // Software Engineer in OC',
    url: 'https://kevinakahoshi.com/',
    description: 'Experienced with React.js, JavaScript (ES5 + ES6), Shopify, and more',
  },
  plugins: [{
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '4l2zpa34',
        dataset: 'production',
        watchmode: true,
        token: process.env.SANITY_TOKEN
      }
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp'
  ],
}
