module.exports = {
  siteMetadata: {
    title: `Gatsby + Civic Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // Prefer contentful for images instead
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-emotion`,
    // {
    //   resolve: "gatsby-plugin-webpack-bundle-analyzer",
    //   options: {
    //     analyzerPort: 3000,
    //     production: true
    //   }
    // },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `3j4jpxgb52st`,
        accessToken: `xiK4OR-Zu0SkKqqZGvCnej4wkJB3vMB5Yn6ptGWcTts`
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Rubik`, `Roboto`, `Roboto Condensed`],
        display: "swap"
      }
    },
    `gatsby-plugin-extract-schema`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
