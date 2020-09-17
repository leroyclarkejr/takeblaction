require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Take Blaction`,
    description: `Taking action for black lives`,
    author: `@ldcjr`,
    menuLinks: [
      {
        name: "About us",
        link: "/",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-material-ui`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-transformer-json`,
    `gatsby-transformer-csv`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Take Blaction`,
        short_name: `Take Blaction`,
        start_url: `/`,
        background_color: `#141414`,
        theme_color: `#141414`,
        display: `minimal-ui`,
        icon: `src/images/TB-LOGO-WHITE-.svg`, // This path is relative to the root of the site.
      },
    },

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-167200825-2",
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: "AHMV2P30NC",
        apiKey: "787c5edc41e9332e3720086a973fd4eb",
        indexName: "test_TB",

        queries: require("./src/utils/algolia-queries"),
        chunksize: 10000,
        enablePartialUpdates: true,
        matchFields: ["Slug"],
      },
    },
  ],
}
