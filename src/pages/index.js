import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Image from 'gatsby-image'
import Script from 'react-load-script'
import Overdrive from 'react-overdrive'

import Header from '../components/Header'
import Wrapper from '../components/Wrapper'
import Container from '../components/Container'
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

  handleScriptLoad() {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', user => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/';
          });
        }
      });
    }
    window.netlifyIdentity.init();
  }

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const { frontmatter } = data.markdownRemark

    const activities = posts.filter(post => post.node.frontmatter.templateKey === 'activity')

    return (
      <Wrapper>
          <Script
            url="https://identity.netlify.com/v1/netlify-identity-widget.js"
            onLoad={this.handleScriptLoad.bind(this)}
          />
         <Header background={frontmatter.image.childImageSharp.sizes} tagline={frontmatter.tagline}/>
          <Welcome>{frontmatter.welcome}</Welcome>
          <h2>Choose a themed trip</h2>
          <Trips>
          {posts
            .filter(post => post.node.frontmatter.templateKey === 'package')
            .map(({ node: post }) => (
                  <Link to={post.fields.slug} key={post.id}>
                    <Trip>
                      <Thumbnail>
                        <Overdrive id={post.id} duration={0} >
                        <Image
                          sizes={post.frontmatter.image.childImageSharp.sizes}
                          alt={post.frontmatter.title}
                          style={{height: '100%'}}
                        />
                        </Overdrive>
                      </Thumbnail>
                      <Caption>{post.frontmatter.title}</Caption>
                    </Trip>
                  </Link>
            ))}
          </Trips>
          <h2>Make your own</h2>
          <Form activities={posts.filter(post => post.node.frontmatter.templateKey === 'activity')}/>
      </Wrapper>
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
