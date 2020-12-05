module.exports = {
  siteMetadata: {
    title: `Audiopedia`,
    description: `The world's most vital audiobook.`,
    author: `@techforsocialgood`,
    track: `How does cleanliness prevent sickness?`,
    playlist: `Cleanliness`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `src`,
    //     path: `${__dirname}/src/`,
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `data`,
    //     path: `${__dirname}/src/data/`,
    //   },
    // },
    {
      resolve: 'gatsby-plugin-apollo',
      options: {
        uri: 'http://127.0.0.1:8000/graphql/'
      }
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "AUDIOPEDIA",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "audiopedia",
        // Url to query from
        // url: "https://swapi-graphql.netlify.app/.netlify/functions/index",
        url: "http://127.0.0.1:8000/graphql/",
      },
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
