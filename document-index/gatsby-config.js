require(`dotenv`).config()

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

// 一个gatsby模板：gatsby-starter-portfolio-cara
module.exports = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-cara/gatsby-config.js
    siteTitle: `Cara`,
    siteTitleAlt: `吹口琴的喵~ - 技术小栈`,
    siteHeadline: `********************************************`,
    siteUrl: `https://www.readers.fun`,
    siteDescription: `在这里记录、分享我的想法`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `王东斌`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `吹口琴的喵~ - 技术小栈`,
        short_name: `吹口琴的喵~`,
        description: `在这里记录、分享我的想法`,
        start_url: `/`,
        background_color: `#141821`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
