require("dotenv").config({
  path: `.env`,
})

const getDeliveryClientConfig = () => {
  let config = {
    projectId: process.env.KONTENT_PROJECT_ID,
    includeTypes: true,
    languageCodenames: [`default`],
  }

  if (process.env.KONTENT_PREVIEW_API_KEY) {
    config.usePreviewUrl = true
    config.authorizationKey = process.env.KONTENT_PREVIEW_API_KEY
  }

  return config
}

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
        ...getDeliveryClientConfig(),
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`lato`],
        display: "swap",
      },
    },
  ],
}
