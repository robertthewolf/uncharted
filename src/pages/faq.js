import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Image from 'gatsby-image'

import Header from '../components/Header'
import Wrapper from '../components/Wrapper'

export default class FaqPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const { frontmatter: frontpage } = data.markdownRemark

    return (
      <Wrapper>
          <Header>
            <Image sizes={frontpage.image.childImageSharp.sizes} alt="Transylvania Uncharted" />
            <Tagline>{frontpage.tagline}</Tagline>

          </Header>
      </Wrapper>
    )
  }
}

FaqPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query FaqQuery {
    markdownRemark(frontmatter: {templateKey: { eq: "concept" }}) {
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
        tagline
        welcome
      }
    }
    allMarkdownRemark {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            heading
            text
            templateKey
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
    }
  }
`

const Tagline = styled.h1`
`