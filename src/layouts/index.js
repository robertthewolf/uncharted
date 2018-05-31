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
    <Helmet title="Uncharted | A New Way Of Travelling" />
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