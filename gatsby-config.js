require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `A11y testing - Sanna Mäkinen`,
    siteUrl: `https://testing-accessibility.sanna.ninja`,
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
        name: 'Automated tools',
        link: '/testing-automated-tools',
        id: 'menu-6'
      },
      {
        name: 'Resources',
        link: '/resources',
        id: 'menu-7'
      },
      {
        name: 'Tasks',
        link: '/tasks',
        id: 'menu-8'
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Testing for accessibility",
        short_name: "A11y testing",
        start_url: "/",
        background_color: "#FFFFFF",
        theme_color: "#BBC9F7",
        display: "standalone",
        icons: [
          {
            "src": "/favicons/android-chrome-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "/favicons/android-chrome-384x384.png",
            "sizes": "384x384",
            "type": "image/png"
          },
          {
            "src": "/favicons/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
          },
          {
            "src": "/favicons/apple-touch-icon.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "/favicon/icon-16x16.png",
            "sizes": "16x16",
            "type": "image/png"
          },
          {
            "src": "/favicon/icon-32x32.png",
            "sizes": "32x32",
            "type": "image/png"
          },
          {
            "src": "/favicon/icon-48x48.png",
            "sizes": "48x48",
            "type": "image/png"
          },
          {
            "src": "/favicon/icon-78x78.png",
            "sizes": "78x78",
            "type": "image/png"
          },
          {
            "src": "/favicon/icon-96x96.png",
            "sizes": "96x96",
            "type": "image/png"
          },
          {
            "src": "/favicon/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "/favicon/icon-256x256.png",
            "sizes": "256x256",
            "type": "image/png"
          },
          {
            "src": "/favicon/maskable.png",
            "sizes": "196x196",
            "type": "image/png",
            "purpose": "any maskable"
          }
        ],
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://testing-accessibility.sanna.ninja',
        policy: [{userAgent: '*', disallow: ['/']}]
      }
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/*`],
      },
    }
  ]
};
