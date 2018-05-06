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

import Info from '../components/ContactCard/Info'

export default class ContactPage extends React.Component {
  render() {
    const { frontmatter, html } = this.props.data.markdownRemark

    return (
      <Wrapper>
          <Header>
            <Image sizes={frontmatter.image.childImageSharp.sizes} alt="Transylvania Uncharted" />
            <h1>{frontmatter.tagline}</h1>
            <Contact>
            <Info/>
            </Contact>

          </Header>
          <Container>
            
            <Content><div dangerouslySetInnerHTML={{ __html: html }}  /></Content>
          </Container>
      </Wrapper>
    )
  }
}

ContactPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
query ContactQuery {
  markdownRemark(frontmatter: {templateKey: { eq: "contact" }}) {
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

const Contact = styled.div`
margin: 2rem auto 1rem;
div {
  a {
    display: block;
  }
}
`