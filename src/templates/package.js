import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Image from 'gatsby-image'

import styled from 'styled-components';

const Package = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <section className="section">
      <Helmet title={`${frontmatter.title} | Package`} />
      <Header>
            <Image sizes={frontmatter.image.childImageSharp.sizes} alt="Transylvania Uncharted" />
            <Container>
            <Feature>💰<br/>{frontmatter.price}</Feature>
            <Feature>🗓️<br/>{frontmatter.lenght}</Feature>
            <Title>{frontmatter.title}</Title>
            <Tagline>{frontmatter.tagline}</Tagline>
            <Description>{frontmatter.description}</Description>
            </Container>
      </Header>
      <Container>
      <IncludedList>
        {frontmatter.included.map((item) => (
          <IncludedItem>{item}</IncludedItem>
        ))}
      </IncludedList>
      </Container>
      <Content dangerouslySetInnerHTML={{ __html: html }} />
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
        tagline
        description
        price
        lenght
        included
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

const Container = styled.div`
max-width: 1024px
margin: 0 auto
text-align: left`

const Feature = styled.div`
float: right
text-align: center
margin: 1rem
&:first-letter {
  font-size: 2em
}
`

const Title = styled.h1`
text-align: left
`
const Tagline = styled.h3`
font-size: 1.5rem
margin-bottom: 3rem
font-weight: 200
`
const Description = styled.p`
opacity: .4
transition: opacity 1s ease
&:hover {
  opacity: .9
}
`

const IncludedList = styled.ul`
margin: 2rem 0
column-count: 2

`

const IncludedItem = styled.li`
padding: 2rem 4rem
`

const Content = styled.div`
max-width: 700px
margin: 0 auto 5rem`