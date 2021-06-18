require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `@kentico/gatsby-source-kontent`,
      options: {
        projectId: process.env.KONTENT_PROJECT_ID,
        includeTypes: true,
        languageCodenames: [`default`],
        usePreviewUrl: true,
        authorizationKey: process.env.KONTENT_PREVIEW_KEY,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`lato`, `source code pro`],
        display: "swap",
      },
    },
  ],
}
