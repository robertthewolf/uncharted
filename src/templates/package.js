import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

export const PackageTemplate = ({
  title,
  helmet
}) => {

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}

PackageTemplate.propTypes = {
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
}

const Package = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <PackageTemplate
      helmet={<Helmet title={`${post.frontmatter.title} | Blog`} />}
      title={post.frontmatter.title}
    />
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
      }
    }
  }
`
