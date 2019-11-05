import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import "../scss/main.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  const post = data.nodeBlog
  console.log(post);

  return (
    <Layout>
      <SEO title="Photography Catalogue | John Doe Photography" />
      <h1>{ post.title }</h1>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    nodeBlog(id: { eq: $id }) {
      title
      body {
        value
      }
      created
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
