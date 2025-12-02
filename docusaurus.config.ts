import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'AR Developers Foundation Series',
  tagline: 'AR Developers Foundation Series',
  favicon: 'img/logo.webp',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://ar-developers-foundation-series.vercel.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ar-developers-foundation-series', // Usually your GitHub org/user name.
  projectName: 'ar-developers-foundation-series', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ar-developers-foundation-series/ar-developers-foundation-series/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ar-developers-foundation-series/ar-developers-foundation-series/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'AR Developers Foundation Series',
      logo: {
        alt: 'AR Developers Foundation Series Logo',
        src: 'img/logo.webp',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Books',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/syedabdullahzaidi786/AR-Developers-Foundation-Series',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learning Resources',
          items: [
            {
              label: 'Start Your Journey',
              to: '/docs/intro',
            },
            {
              label: 'Full Curriculum',
              to: '/docs/intro',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
        {
          title: 'Social Media',
          items: [
            {
              label: 'YouTube',
              href: 'https://youtube.com/@ardevelopers',
            },
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com/company/ar-developers',
            },
            {
              label: 'Instagram',
              href: 'https://instagram.com/ar.developers',
            },
            {
              label: 'Facebook',
              href: 'https://facebook.com/ardevelopers',
            },
          ],
        },
        {
          title: 'GitHub Resources',
          items: [
            {
              label: 'GitHub Repository',
              href: 'https://github.com/syedabdullahzaidi786/AR-Developers-Foundation-Series',
            },
            {
              label: 'Example Projects',
              href: 'https://github.com/syedabdullahzaidi786',
            },
          ],
        },
        {
          title: 'About',
          items: [
            {
              label: 'AR Developers',
              href: 'https://ar-developers-foundation-series.vercel.app/',
            },
            {
              label: 'Our Mission',
              to: '/docs/intro',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AR Developers Foundation Series. Built with ❤️ and AI.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
