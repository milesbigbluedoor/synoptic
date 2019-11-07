module.exports = {
  pathPrefix: "/synoptic",
  siteMetadata: {
    title: "Photography Portfolio",
    description: "Welcome to the photography portfolio of John Doe.",
    author: "@johndoe",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "John Doe Photography Portfolio",
        short_name: "JD Photography",
        start_url: "/",
        icon: "src/images/logo.png",
      },
    },
    {
      resolve: "gatsby-source-drupal",
      options: {
        baseUrl: "https://dev-photography-portfolio.pantheonsite.io/",
      },
    },
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public|-config.js)/,
        stages: ["develop"],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Nunito`,
            variants: [`400`, `400i`, `500`, `700`],
          },
        ],
      },
    },
  ],
}
