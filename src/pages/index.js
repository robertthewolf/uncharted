import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Image from 'gatsby-image'

import Form from '../components/Form'

export default class IndexPage extends React.Component {

  componentDidMount () {
    const script = document.createElement("script");

    script.src = "https://yam.li/widget/script/tooltip.js";
    script.id = "fastoryWidgetContainerScript"
    script.async = true;
    script.dataset.offset = 20;
    script.dataset.id = "jcBBmnlz";

    document.body.appendChild(script);
  }

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const { frontmatter: frontpage } = data.markdownRemark

    const activities = posts.filter(post => post.node.frontmatter.templateKey === 'activity')
    console.log(activities)

    return (
      <article>
          <Header>
            <Image sizes={frontpage.image.childImageSharp.sizes} alt="Transylvania Uncharted" />
            <Tagline>{frontpage.tagline}</Tagline>
            <Welcome>{frontpage.welcome}</Welcome>

          </Header>
          <h2>Choose a themed trip</h2>
          <Trips>
          {posts
            .filter(post => post.node.frontmatter.templateKey === 'package')
            .map(({ node: post }) => (
                  <Link to={post.fields.slug} key={post.id}>
                    <Trip>
                      <Thumbnail>
                        <Image
                          sizes={post.frontmatter.image.childImageSharp.sizes}
                          alt={post.frontmatter.title}
                          style={{height: '100%'}}
                        />
                      </Thumbnail>
                      <Caption>{post.frontmatter.title}</Caption>
                    </Trip>
                  </Link>
            ))}
          </Trips>
          <h2>Make your own</h2>
          <Form activities={posts.filter(post => post.node.frontmatter.templateKey === 'activity')}/>
      </article>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    markdownRemark(frontmatter: {templateKey: { eq: "frontpage" }}) {
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
            title
            templateKey
            name
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
margin: 0 auto 5rem
padding: 1rem`

const Trips = styled.section`
width: 100%
max-width: 1024px
margin: 0 auto
overflow-x: hidden
display: grid
grid-template-columns: 1fr 1fr 1fr
align-content: stretch
@media screen and (max-width: 700px) {
  grid-template-columns: 1fr 1fr
}
@media screen and (max-width: 380px) {
  grid-template-columns: 1fr
}
`

const Trip = styled.figure`
padding: 1em
position: relative`

const Thumbnail = styled.div`
width: 100%
border-radius: 50%
overflow: hidden
position: relative
&:after {
  content: "";
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  background: radial-gradient( circle,transparent 0%,black 65%);
  transform: scale(110%);
  height: 100%;
  display: block;
  transition: opacity 1s ease;
}
&:hover:after {
  opacity: .5
}
div {
  position: absolute !important;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
`

const Caption = styled.figcaption`
position: absolute
bottom: 1em
width: calc(100% - 2em);
text-align: center
font-weight: 600
text-transform: uppercase
`
