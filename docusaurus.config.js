// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

//import sectionPrefix from './src/remark/section-prefix';
import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Edaran Docusaurus',
  tagline: 'Edaran Docusaurus',
  favicon: 'img/favicon.ico',
  // Set the production url of your site here
  url: 'https://edaran-docusaurus.netlify.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'fatihahmansor00', // Usually your GitHub org/user name. your organization name
  projectName: 'edaran-docusaurus', // Usually your repo name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'my'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      my: {
        label: 'Bahasa Melayu',
      },
    }
  },

  markdown: {
    mermaid: true,
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          includeCurrentVersion: true, // Include the current version
          versions: {
            current: {
              label: '0.0.0', // Label for the current version
              path: '/', // Root path for the current version
              banner: 'none', // Banner type
              badge: true, // Show the version badge
            },
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
            remarkPlugins: [remarkMath],
            rehypePlugins: [rehypeKatex],

            admonitions: {
              keywords: ['note', 'tip', 'info', 'warning', 'danger'],
              extendDefaults: true,
            },
            //beforeDefaultRemarkPlugins: [sectionPrefix],
            
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID:'G-K0RQH380FP',
          anonymizeIP: true,
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const {defaultCreateSitemapItems, ...rest} = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes('/page/'));
          },
        },

      }),
    ],
  ],
  //stylesheets math equation
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themes: [ '@docusaurus/theme-mermaid'],
  //'docusaurus-theme-search-typesense',
  
  // stylesheets: [
  //   {
  //     href: '/katex/katex.min.css',
  //     type: 'text/css',
  //   },
  // ],

//local search
// plugins: [
//   [
//     require.resolve("@easyops-cn/docusaurus-search-local"),
    
//     ({
 
//       hashed: true,
      
//     }),
//   ],
// ], 
  


  // themes: ['docusaurus-theme-search-typesense'],
  themeConfig:
    
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
       // ...
    

      // //typesense coding 
      // typesense: {
      //   // Replace this with the name of your index/collection.
      //   // It should match the "index_name" entry in the scraper's "config.json" file.
      //   typesenseCollectionName: 'netlify_ad3b8d62-36a6-4c67-8bc7-1e37418fc21f_main_all',
  
      //   typesenseServerConfig: {
      //     nodes: [
      //       {
      //         host: 'localhost',
      //         port: 8108,
      //         protocol: 'http',
      //       },
            
      //     ],
      //     apiKey: 'D0zPhZwWLtgwniJU3zVYpLzFZZBlLljy',
      //   },
  
      //   // Optional: Typesense search parameters: https://typesense.org/docs/0.24.0/api/search.html#search-parameters
      //   typesenseSearchParameters: {},
  
      //   // Optional
      //   contextualSearch: true,
      //   typesenseImportConfig: {
      //     dir: 'docs', // Directory containing your Docusaurus documentation
      //     fields: [
      //       { name: 'create-a-document', type: 'string' },
      //       { name: 'congratulations', type: 'string' },
      //       { name: 'create-a-blog-post', type: 'string' },
      //       { name: 'translate-your-site', type: 'string' },


            
      //     ],
      //   },
      // },


      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Edaran Docusaurus',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          // {
          //   type: 'dropdown',
          //   label: 'Versions',
          //   position: 'right',
          //   items: [
          //     // Add items for each version
          //     { label: '0.0.0', to: '/' }
          //     // Add more versions as needed
          //   ],
          // },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {
            type: 'docSidebar',
            sidebarId: 'apiSidebar',
            position: 'left',
            label: 'API',
          },
          {
            type: 'docSidebar',
            sidebarId: 'markdownSidebar',
            position: 'left',
            label: 'Markdown',
          },
          {
            to: '/introduction-edaran-docusaurus',
            label: 'Docs',
            position: 'left',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      algolia: {

        // Public API key: it is safe to commit it
        apiKey: '0c90be0205c32e501b71c621cdad17b3',

        indexName: 'netlify_ad3b8d62-36a6-4c67-8bc7-1e37418fc21f_main_all',

        // The application ID provided by Algolia
        appId: '1761COI4VG',
        contextualSearch: true, // Optional: Enables contextual search
        
  searchParameters: {}, // Optional: Algolia search parameters
  
      },
  
        
        //css for math equation
        //customCss: require.resolve('./src/css/custom.css'),
  
        //mermaid coding
        mermaid:{
          theme: {light: 'neutral', dark: 'forest'},
          //options: {maxTextSize:50,},
        },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/introduction-edaran-docusaurus',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      metadata: [
        { name: 'keywords', content: 'introduction, edaran, docusaurus, blog' },
        { name: 'description', content: 'introduction edaran docusaurus'}
      ],

    }),
    plugins: [
      [
        '@docusaurus/plugin-pwa',
        {
          debug: true,
          offlineModeActivationStrategies: [
            'appInstalled',
            'standalone',
            'queryString',
          ],
          pwaHead: [
            {
              tagName: 'link',
              rel: 'icon',
              href: '/img/docusaurus.png',
            },
            {
              tagName: 'link',
              rel: 'manifest',
              href: '/manifest.json', // your PWA manifest
            },
            {
              tagName: 'meta',
              name: 'theme-color',
              content: 'rgb(37, 194, 160)',
            },
          ],
        },
      ],
    ],
    
};
export default config;
