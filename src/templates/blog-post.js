import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import "../scss/main.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPost = ({ data }) => {
  const post = data.nodeBlog

  return (
    <Layout>
      <SEO title="Photography Catalogue | John Doe Photography" />
      <h1>{post.title}</h1>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query($id: String!) {
    nodeBlog(id: { eq: $id }) {
      title
      body {
        value
      }
      created(formatString: "Do MMMM YYYY")
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
`

BlogPost.propTypes = {
  data: PropTypes.node.isRequired,
}
