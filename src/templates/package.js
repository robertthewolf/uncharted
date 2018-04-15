import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Image from 'gatsby-image'

import styled from 'styled-components';

const Package = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <section className="section">
      <Helmet title={`${post.frontmatter.title} | Package`} />
      <Header>
            <Image sizes={post.frontmatter.image.childImageSharp.sizes} alt="Transylvania Uncharted" />
            <Tagline>{post.frontmatter.title}</Tagline>

      </Header>
    </section>
  )
}

Package.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Package

export const pageQuery = graphql`
  query PackageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        image {
          childImageSharp {
            sizes(maxWidth: 1000) {
              ...GatsbyImageSharpSizes
              aspectRatio
            }
          }
        }
        title
      }
    }
  }
`

const Header =  styled.header`
text-align: center
width: 100%
div.gatsby-image-outer-wrapper {
  max-height: 60vh
  overflow: hidden;
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(to bottom, #EBD5D5 0%, transparent 50%, black 100%);
  }
}
`

const Tagline = styled.h1`
`

const Welcome = styled.p`
max-width: 700px
margin: 0 auto 5rem`