const { resolve } = require("path");

const { name, description, author, homepage } = require("./package.json");

module.exports = {
  siteMetadata: {
    title: name,
    description,
    author,
    language: "en",
    url: homepage,
    since: 2015,
    image: "images/exit.jpg",
    social: {
      twitter: "y015i",
      facebook: "yoriki.yamaguchi",
    },
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: resolve(__dirname, "src/images"),
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "y13i.com",
        short_name: "y13i.com",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#264a5f",
        display: "minimal-ui",
        icon: resolve(__dirname, "static/images/exit.jpg"), // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-typegen",
      options: {
        emitSchema: {
          "src/__generated__/gatsby-introspection.json": true,
        },
      },
    },
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: resolve(__dirname, "data"),
      },
    },
    {
      resolve: "gatsby-plugin-material-ui",
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Open Sans Condensed:300"],
        },
      },
    },
  ],
};
