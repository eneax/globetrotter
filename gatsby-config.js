module.exports = {
  siteMetadata: {
    title: `Globetrotter`,
    description: `Travel Agency`,
    author: `Enea Xharja`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/covers`,
      },
    },
    {
      // makes top's files available
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `top`,
        path: `${__dirname}/src/data/top`,
      },
    },
    {
      // makes group's files available
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `group`,
        path: `${__dirname}/src/data/group`,
      },
    },
    {
      // makes promo's files available
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `promo`,
        path: `${__dirname}/src/data/promo`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // parses Markdown files using Remark
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            // processes images in markdown so they can be used in the production build.
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Globetrotter | Travel Agency`,
        short_name: `Globetrotter`,
        start_url: `/`,
        background_color: `#7D160F`,
        theme_color: `#7D160F`,
        display: `minimal-ui`,
        icon: `src/images/logo.jpg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
    `gatsby-plugin-styled-components`,
  ],
}
