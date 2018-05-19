import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Image from 'gatsby-image'


import Header from '../components/Header'
import Wrapper from '../components/Wrapper'
import Container from '../components/Container'
import Content from '../components/Content'

export default class TermsPage extends React.Component {
  render() {
    const { frontmatter, html } = this.props.data.markdownRemark

    return (
      <Wrapper>
          <Header white>
            <Image sizes={frontmatter.image.childImageSharp.sizes} alt="Transylvania Uncharted" />
            <Tagline>{frontmatter.tagline}</Tagline>
          </Header>
          <Content>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </Content>
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
      }
    }
  }
`

const Tagline = styled.h1`
`
