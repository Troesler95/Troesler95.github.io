module.exports = {
  siteMetadata: {
    title: 'Tyler Roesler\'s Personal Site',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
    'gatsby-plugin-react-helmet',
  ],
}
