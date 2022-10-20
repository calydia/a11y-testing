require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `A11y testing - Sanna Mäkinen`,
    siteUrl: `https://www.yourdomain.tld`,
    menuLinks: [
      {
        name: 'Home',
        link: '/',
        id: 'menu-1'
      },
      {
        name: 'Keyboard',
        link: '/testing-keyboard-accessibility',
        id: 'menu-2'
      },
      {
        name: 'Screen reader',
        link: '/testing-screen-readers',
        id: 'menu-3'
      },      {
        name: 'Visuals',
        link: '/testing-visuals',
        id: 'menu-4'
      },
      {
        name: 'Zooming',
        link: '/testing-zooming',
        id: 'menu-5'
      },
      {
        name: 'Resources',
        link: '/resources',
        id: 'menu-6'
      }
    ]
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `grmu7gmzjx8f`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ]
};
