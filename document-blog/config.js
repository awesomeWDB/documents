const basePath = '/'
const name = '吹口琴的喵~'
// const slogan = '千里之行，始于足下。'
const slogan = 'xxxxxxx'

const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'http://m.readers.fun/',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: `${basePath}assets/db-white.svg`,
    logoLink: 'http://m.readers.fun/',
    title:
      `<i>${name}</i>`,
    githubUrl: 'https://github.com/awesomeWDB/',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://space.bilibili.com/52225296" target="_blank" rel="noopener">
		      <div class="bilibiliBtn">
		        <img src='https://www.bilibili.com/favicon.ico?v=1' alt={'bilibili'}/>
		      </div>
		    </a>
		  </li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/codeblock',
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: 'vite', link: 'https://vitejs.cn/' }],
    frontline: false,
    ignoreIndex: true,
    title:
      `<div style='text-align: center; width: auto;'><i>${slogan}</i></div>`,
  },
  siteMetadata: {
    title: `code share with readers | ${name}`,
    description: 'a blog website to share my ideas',
    ogImage: null,
    docsLocation: 'https://github.com/hasura/gatsby-gitbook-boilerplate/tree/master/content',
    favicon: `${basePath}assets/db.svg`,
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
