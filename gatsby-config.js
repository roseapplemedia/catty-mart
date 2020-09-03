require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` })

module.exports = {
  siteMetadata: {
    title: `Catty-Mart`,
    description: `Dog and Cat Collars`,
    author: `Michael`,
    company: `RoseApple Media`,
    website: `https://roseapplemedia.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/logo-images/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-snipcartv3`,
      options: {
        apiKey:
          "YWFiYjZiYWMtZGE0Zi00ZDlkLTlkNjAtNzg1NWJhODQxMTAzNjM3MDM4OTcyNDY2NTY5MzA1",
        // js: `https://cdn.snipcart.com/themes/v3.0.3/default/snipcart.js`,
        // styles: `https://cdn.snipcart.com/themes/v3.0.3/default/snipcart.css`,
        autopop: true,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },

    // {
    //   resolve: `gatsby-transformer-cloudinary`,
    //   options: {
    //     cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    //     apiKey: process.env.CLOUDINARY_API_KEY,
    //     apiSecret: process.env.CLOUDINARY_API_SECRET,
    //     uploadFolder: "catty",
    //   },
    // },
  ],
}
