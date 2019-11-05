import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import "../scss/main.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Photos = ({ data }) => (
  <Layout>
    <SEO title="Photography Catalogue | John Doe Photography" />
    {data.allNodePhoto.edges.map(edge => (
      <div key={edge.node.id}>
        <h3>{edge.node.title}</h3>
        <div
          style={{ maxWidth: `300px`, marginBottom: `1.45rem`, width: `100%` }}
        >
          <Img
            fluid={
              edge.node.relationships.field_photograph.localFile.childImageSharp
                .fluid
            }
          />
        </div>
      </div>
    ))}
  </Layout>
)

export default Photos

export const query = graphql`
  query {
    allNodePhoto {
      edges {
        node {
          title
          relationships {
            field_subject {
              name
            }
            field_photograph {
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

Photos.propTypes = {
  data: PropTypes.node.isRequired,
}
