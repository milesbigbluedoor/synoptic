import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "mountains.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section className="hero">
      <Img
        fluid={data.heroImage.childImageSharp.fluid}
        style={{ maxHeight: "700px" }}
      />
      <div className="hero__text">
        <div className="hero__text-wrapper">
          <h2 className="hero__title">John Doe Photography</h2>
          <p className="hero__description">
            A freelance photographer based out of South-East England.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
