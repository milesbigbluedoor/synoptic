import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import "../scss/main.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog | John Doe Photography" />
      <h1>Blog</h1>
      {data.allNodeBlog.edges.map(edge => (
        <div key={edge.node.id}>
          <h3>
            <Link to={edge.node.path.alias}>{edge.node.title}</Link>
          </h3>
          <div
            style={{
              maxWidth: `300px`,
              marginBottom: `1.45rem`,
              width: `100%`,
            }}
          >
            <Img
              fluid={
                edge.node.relationships.field_image.localFile.childImageSharp
                  .fluid
              }
            />
          </div>
        </div>
      ))}
    </Layout>
  )
}

export default Blog

export const query = graphql`
  query {
    allNodeBlog {
      edges {
        node {
          title
          path {
            alias
          }
          relationships {
            field_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 400, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

Blog.propTypes = {
  data: PropTypes.node.isRequired,
}
