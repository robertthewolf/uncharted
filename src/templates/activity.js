import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Image from 'gatsby-image'
import styled from 'styled-components';
import Overdrive from 'react-overdrive'

import Header from '../components/Header'
import Wrapper from '../components/Wrapper'
import Container from '../components/Container'
import Content from '../components/Content'

const Activity = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <Wrapper>
      <Helmet title={`${frontmatter.title} | Package`} />
      <Header background={frontmatter.image.childImageSharp.sizes}/>
      <Container>
      <Title>{frontmatter.title}</Title>
      <Tagline>{frontmatter.tagline}</Tagline>
      </Container>
      <Container>
        <Content><div dangerouslySetInnerHTML={{ __html: html }}  /></Content>
      </Container>
    </Wrapper>
  )
}

Activity.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Activity

export const query = graphql`
  query ActivityByID($id: String!) {
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
      }
    }
  }
`

const Feature = styled.div`
display: inline-block
@media screen and (max-width: 600px) {
  margin: 1rem 2rem 1rem 0
}
@media screen and (min-width: 600px) {
  float: right;
}
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
opacity: .7
transition: opacity 1s ease
&:hover {
  opacity: .9
}
`

