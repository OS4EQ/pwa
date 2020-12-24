module.exports = {
  siteMetadata: {
    title: `Audiopedia`,
    description: `The world's most vital audiobook.`,
    author: `@techforsocialgood`,
    track: `How does cleanliness prevent sickness?`,
    playlist: `Cleanliness`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-react-helmet`
    },
    {
      resolve: `gatsby-plugin-apollo`,
      options: {
        // uri: `http://127.0.0.1:8000/graphql/`
        uri: `https://21jk0xralk.execute-api.us-east-2.amazonaws.com/dev/graphql/`
        // uri: `https://ng6cf1taq8.execute-api.us-east-2.amazonaws.com/prod/graphql/`
      }
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: `Audiopedia`,
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: `audiopedia`,
        // Url to query from
        // url: `http://127.0.0.1:8000/graphql/`
        url: `https://21jk0xralk.execute-api.us-east-2.amazonaws.com/dev`
        // url: `https://ng6cf1taq8.execute-api.us-east-2.amazonaws.com/prod`
      }
    },
    {
      resolve: `gatsby-transformer-sharp`
    },
    {
      resolve: `gatsby-plugin-sharp`
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png` // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    {
      resolve: `gatsby-plugin-offline`
    }
  ],
}