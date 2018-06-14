import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import reset from 'reset-css'
import '../css/all.sass'



const TemplateWrapper = ({ children, data }) => {
  const { edges: posts } = data.allMarkdownRemark

  return(
  <div>
    <Helmet title="Uncharted | A New Way Of Travelling">
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#565656" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000000" />
    </Helmet>
    <Navbar />
    <main>{children()}</main>
    <Footer packages={posts.filter(post => post.node.frontmatter.templateKey === 'package')} />
  </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.any,
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.object,
  }),
}

export default TemplateWrapper

export const layoutQuery = graphql`
  query LayoutQuery {
    allMarkdownRemark {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
          }
        }
      }
    }
  }
`