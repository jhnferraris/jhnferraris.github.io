module.exports = {
  siteMetadata: {
    title: `codes, books, & adventures`,
    author: `John Michael Ferraris`,
    description: `Codes for a living and for fun. Reads fiction and self-help on the side. Runs fast enough to survive a zombie apocalypse`,
    siteUrl: `https://jhnferraris.dev`,
    social: {
      twitter: `jhnferraris`,
      mail: 'contact@jhnferraris.dev',
      github: 'jhnferraris',
      cv: 'https://jhnferraris.dev/cv'
    }
  },
  plugins: [
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: 'https://jhnferraris-cms.herokuapp.com',
        contentTypes: [
          // List of the Content Types you want to be able to request from Gatsby.
          'article',
          'user'
        ],
        queryLimit: 1000
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-127060662-1'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Codes, books, and adventure`,
        short_name: `codes-books-adv`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/profile-pic.jpg`
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    }
  ]
};
