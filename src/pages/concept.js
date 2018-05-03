import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Image from 'gatsby-image'

import Header from '../components/Header'
import Wrapper from '../components/Wrapper'
import Map from '../components/Map'

export default class ConceptPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const { frontmatter: frontpage } = data.markdownRemark

    return (
      <Wrapper>
          <Header>
            <Image sizes={frontpage.image.childImageSharp.sizes} alt="Transylvania Uncharted" />
            <Tagline>{frontpage.tagline}</Tagline>
            <Welcome>{frontpage.welcome}</Welcome>

          </Header>
          <Map>
          {posts
            .filter(post => post.node.frontmatter.templateKey === 'value')
            .map(({ node: post }) => (
                  <li key={post.id}>
                    <Heading>{post.frontmatter.heading}</Heading>
                    <Text>{post.frontmatter.text}</Text>
                  </li>
            ))}
          </Map>
      </Wrapper>
    )
  }
}

ConceptPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query ConceptQuery {
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

const Welcome = styled.p`
max-width: 700px
margin: 0 auto 5rem`

const Heading = styled.h3`
font-family: Sign
font-weight: 400
text-transform: uppercase
text-align: center
text-align: left
font-size: 1.6em
color: black
`

const Text = styled.p`
color: black
`
