import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Image from 'gatsby-image'


export default class TermsPage extends React.Component {
  render() {
    const { data } = this.props
    const { frontmatter, html } = data.markdownRemark

    return (
      <Wrapper>
          <Header>
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

const Wrapper = styled.article`
background-color: white
color: black
padding-bottom: 4rem
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
    background: linear-gradient(to bottom, #EBD5D5 0%, transparent 50%, white 100%);
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
