import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import "../scss/main.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LinkButton from "../components/link-button"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      profile: file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 980) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="About Me | John Doe Photography" />
      <div className="about__profile-image">
        <Img
          fluid={data.profile.childImageSharp.fluid}
          style={{ maxHeight: "700px" }}
        />
      </div>

      <h2 className="about__title">About Me</h2>

      <div className="about__description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </div>

      <div className="about__cta-wrapper">
        <LinkButton url="/photos" text="View Photography" />
        <LinkButton url="/contact" text="Get in touch" modifier="cta" />
      </div>
    </Layout>
  )
}

export default About
