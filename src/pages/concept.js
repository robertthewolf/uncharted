import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Image from 'gatsby-image'


export default class ConceptPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const { frontmatter: frontpage } = data.markdownRemark

    return (
      <article>
          <Header>
            <Image sizes={frontpage.image.childImageSharp.sizes} alt="Transylvania Uncharted" />
            <Tagline>{frontpage.tagline}</Tagline>
            <Welcome>{frontpage.welcome}</Welcome>

          </Header>
          <Values>
          {posts
            .filter(post => post.node.frontmatter.templateKey === 'value')
            .map(({ node: post }) => (
                  <Value key={post.id}>
                    <Heading>{post.frontmatter.heading}</Heading>
                    <Text>{post.frontmatter.text}</Text>
                  </Value>
            ))}
          </Values>
      </article>
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

const Values = styled.section`
margin: 0 2rem
padding: 3rem 0
overflow-x: hidden
display: flex`

const Value = styled.figure`
padding: 1.5rem
position: relative
background: linear-gradient(180deg, rgba(215, 202, 235, 0.9) 0%, rgba(165, 166, 133, 0.9) 104.78%);
flex:1

&:nth-of-type(even) {
transform: skewY(5deg);
}

&:nth-of-type(odd) {
transform: skewY(-5deg);
}
`

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
