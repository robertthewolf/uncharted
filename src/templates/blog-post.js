import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Header from '../components/Header'

const BlogPost = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <section className="section">
      <Helmet title={`${frontmatter.title} | Blog`} />
      <Header>
            <Image sizes={frontmatter.image.childImageSharp.sizes} alt="Transylvania Uncharted" />
            <Title>{frontmatter.title}</Title>
      </Header>
      <Content dangerouslySetInnerHTML={{ __html: html }} />
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
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`

const Title = styled.h1`
text-align: left
`

const Content = styled.div`
max-width: 700px
margin: 0 auto 5rem`