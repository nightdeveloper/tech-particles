const config = {
  gatsby: {
    pathPrefix: '/tech-particles',
    siteUrl: 'https://nightdeveloper.github.io/tech-particles/',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: '/tech-particles/images/logo.png',
    logoLink: '',
    title: "",
    githubUrl: '',
    helpUrl: '',
    tweetText: '',
    social: ``,
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
      '/specifications',
      '/system-on-usb',
      '/init',
      '/diagnostic',
      '/useful-commands',
      '/wifi',
      '/camera',
      '/i2c',
      '/python',
      '/create-service',
      '/ssh-keys',
    ],
    collapsedNav: [
    ],
    links: [{ text: 'Raspberry Official', link: 'https://www.raspberrypi.org/' }],
    frontline: false,
    ignoreIndex: true,
    title: "",
  },
  siteMetadata: {
    title: 'Tech Particles: Raspberry',
    description: 'Cheat sheets, hints, guides, tutorials, docs for raspberry',
    ogImage: null,
    favicon: '',
    docsLocation: '',
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
