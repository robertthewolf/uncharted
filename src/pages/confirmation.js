import React from 'react'
import PropTypes from 'prop-types'
import Image from 'gatsby-image'
import styled from 'styled-components'

import Header from '../components/Header'
import Wrapper from '../components/Wrapper'
import Container from '../components/Container'
import Content from '../components/Content'

export default class ConfirmationPage extends React.Component {
  render() {
    const { frontmatter, html } = this.props.data.markdownRemark
      return (
      <Wrapper>
        <Header>
          <Image sizes={frontmatter.image.childImageSharp.sizes} alt="Transylvania Uncharted" />
          <Container>
            <Tagline>{frontmatter.tagline}</Tagline>
          </Container>
        </Header>
        <Container>
          <Content><div dangerouslySetInnerHTML={{ __html: html }}  /></Content>
        </Container>
      </Wrapper>
    )
  }
}

ConfirmationPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const ConfirmationPageQuery = graphql`
  query ConfirmationQuery {
    markdownRemark(frontmatter: {templateKey: { eq: "confirmation" }}) {
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