module.exports = {
  siteMetadata: {
    title: `Take Blaction`,
    description: `Taking action for black lives`,
    author: `@ldcjr`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
        background_color: `#141414`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "//mc.us10.list-manage.com/signup-form/subscribe?u=1265fbb10296b33af3ae2993b&amp;id=00d69fe1f0",
        timeout: 3500,
      },
    },
  ],
}
