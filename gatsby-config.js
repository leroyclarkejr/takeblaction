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
      {
        name: "Blact now",
        link: "/petitions/",
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
  ],
}
