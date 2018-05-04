import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Image from 'gatsby-image'

import Header from '../components/Header'
import Wrapper from '../components/Wrapper'
import Container from '../components/Container'
import Content from '../components/Content'
import Map from '../components/Map'

export default class ConceptPage extends React.Component {
  render() {
    const { frontmatter, html } = this.props.data.markdownRemark

    return (
      <Wrapper>
          <Header>
            <Image sizes={frontmatter.image.childImageSharp.sizes} alt="Transylvania Uncharted" />
            <Tagline>{frontmatter.tagline}</Tagline>

          </Header>
          <Container>
            <Content><div dangerouslySetInnerHTML={{ __html: html }}  /></Content>
          </Container>
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
      templateKey
      image {
        childImageSharp {
          sizes(maxWidth: 1000) {
            ...GatsbyImageSharpSizes
            aspectRatio
          }
        }
      }
      tagline
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
