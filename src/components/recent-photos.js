import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import LinkButton from "./link-button"

const RecentPhotos = () => {
  const data = useStaticQuery(graphql`
    query {
      allNodePhoto(limit: 3, sort: { fields: created, order: ASC }) {
        edges {
          node {
            id
            title
            relationships {
              field_photograph {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 600, quality: 100) {
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
  `)

  return (
    <section className="recent-photos">
      <h2 className="recent-photos__title">Recent Photos</h2>
      <div className="recent-photos__wrapper">
        {data.allNodePhoto.edges.map(edge => (
          <div className="recent-photos__card" key={edge.node.id}>
            <Img
              fluid={
                edge.node.relationships.field_photograph.localFile
                  .childImageSharp.fluid
              }
            />
            <div className="recent-photos__card-title">
              <h3>{edge.node.title}</h3>
            </div>
          </div>
        ))}
      </div>
      <LinkButton url="/photos" text="View all" />
    </section>
  )
}

export default RecentPhotos
