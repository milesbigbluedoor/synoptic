import React from "react"
import "../scss/main.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/hero"
import RecentPhotos from "../components/recent-photos"

const Index = () => (
  <Layout>
    <SEO title="Home | John Doe Photography" />
    <Hero />
    <RecentPhotos />
    <section className="home-about">
      <div className="home-about__inner-wrapper">
        <h2 className="home-about__title">About Me</h2>
        <p className="home-about__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p className="home-about__description">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </div>
    </section>
  </Layout>
)

export default Index
