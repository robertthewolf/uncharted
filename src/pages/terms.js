import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Image from 'gatsby-image'

import Header from '../components/Header'
import Wrapper from '../components/Wrapper'

export default class TermsPage extends React.Component {
  render() {
    const { data } = this.props
    const { frontmatter, html } = data.markdownRemark

    return (
      <Wrapper>
          <Header white>
            <Image sizes={frontmatter.image.childImageSharp.sizes} alt="Transylvania Uncharted" />
            <Tagline>{frontmatter.tagline}</Tagline>
            <Welcome>{frontmatter.welcome}</Welcome>
          </Header>
          <Content dangerouslySetInnerHTML={{ __html: html }} />
      </Wrapper>
    )
  }
}

TermsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query TermsQuery {
    markdownRemark(frontmatter: {templateKey: { eq: "terms" }}) {
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
  }
`

const Tagline = styled.h1`
`

const Welcome = styled.p`
max-width: 700px
margin: 0 auto 5rem`

const Content = styled.div`
max-width: 700px
margin: 0 auto 5rem`
