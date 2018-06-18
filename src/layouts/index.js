import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Grid from 'react-bootstrap/lib/Grid'

import {BlogHeader} from '../components/header'

const Layout = ({ children, data }) => (
  <div>
    <Helmet defaultTitle="Tyler Roesler: Software Engineer">
      {/* META DESCRIPTIONS */}
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
      <meta name="description" content="Check out my personal website and blogging space for my latest antics!"/>
      <meta name="keywords" content="Software, Developer, Engineer, Portfolio, Programming"/>
      <meta name="author" content="Tyler Roesler"/>
      {/* FACEBOOK FORMATTING */}
      <meta property="og:title" content="Tyler Roesler - Software Developer"/>>
      <meta property="og:description" content="Software developer, technology enthusiast, coffee lover"/>
      <meta property="og:image" content="http://tylerroesler.com/media/metaIcons/title-screenshot.jpg"/>
      <meta property="og:url" content="http://tylerroesler.com"/>
      <meta property="og:site_name" content="Tyler Roesler's Personal Site"/>

      {/* TWITTER FORMATTING */}
      <meta name="twitter:title" content="Tyler Roesler - Software Developer"/>
      <meta name="twitter:description" content="Software developer, technology enthusiast, coffee lover"/>
      <meta name="twitter:image" content=" http://tylerroesler.com/media/metaIcons/title-screenshot.jpg"/>
      <meta name="twitter:card" content="title page"/>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" 
              integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
      </link>
    </Helmet>
    
    {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
    <Grid fluid={true}>
      <BlogHeader />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
        }}
      >
        {children()}
      </div>
    </Grid>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
