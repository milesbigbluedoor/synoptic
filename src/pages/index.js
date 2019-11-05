import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import "../scss/main.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Index = ({ data }) => (
  <Layout>
    <SEO title="Home | John Doe Photography" />
    <Link to="/page-2/">Go to page 2</Link>
    <p>{data.allNodePhoto.edges[0].node.title}</p>
  </Layout>
)

export default Index

export const query = graphql`
  query {
    allNodePhoto {
      edges {
        node {
          title
        }
      }
    }
  }
`

Index.propTypes = {
  data: PropTypes.shape.isRequired,
}
