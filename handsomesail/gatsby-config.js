module.exports = {
  siteMetadata: {
    siteUrl: "http://www.handsomesail.com",
  },
  plugins: [
    "gatsby-plugin-cname",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/favicon.svg`,
      },
    },
  ],
}
