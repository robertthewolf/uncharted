import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Image from 'gatsby-image'
import styled from 'styled-components'

import Header from '../components/Header'
import Container from '../components/Container'
import Content from '../components/Content'

const BlogPost = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <section className="section">
      <Helmet title={`${frontmatter.title} | Blog`} />
      <Header background={frontmatter.image.childImageSharp.sizes} tagline={frontmatter.title}/>
      
      <Container>
            <Content><div dangerouslySetInnerHTML={{ __html: html }}  /></Content>
          </Container>
    </section>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
        tags
        image {
          childImageSharp {
            sizes(maxWidth: 1000) {
              ...GatsbyImageSharpSizes
              aspectRatio
            }
          }
        }
      }
    }
  }
`