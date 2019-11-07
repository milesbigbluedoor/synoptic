import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import "../scss/main.scss"

import Banner from "../components/banner"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPost = ({ data }) => {
  const post = data.nodeBlog

  return (
    <Layout>
      <SEO title="Photography Catalogue | John Doe Photography" />
      <Banner
        image={post.relationships.field_image.localFile.childImageSharp.fluid}
      />
      <article className="blog-post">
        <h1 className="blog-post__title">{post.title}</h1>
        <p className="blog-post__date">{post.created}</p>
        <div
          className="blog-post__body"
          dangerouslySetInnerHTML={{
            __html: post.body.value,
          }}
        />
      </article>
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
              fluid(maxWidth: 1920, quality: 100) {
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
