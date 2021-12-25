// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Viki',
  tagline:
    '📖 The wiki site of @v3ce, contains collections of useful notes, tips, and tricks we found in our daily works with programming.',
  url: 'https://v3ce.githu.io/',
  baseUrl: '/viki/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'v3ce',
  projectName: 'viki',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/v3ce/viki/edit/docs/docs/environment/index.md',
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          editUrl: 'https://github.com/v3ce/viki/docs/blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Viki',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'environment/index',
            position: 'left',
            label: '裝機指南',
          },
          { to: '/blog', label: '關於我們', position: 'left' },
          {
            href: 'https://github.com/v3ce/viki',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Viki, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
