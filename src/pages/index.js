import React from "react"
import "../scss/main.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/hero"

const Index = () => (
  <Layout>
    <SEO title="Home | John Doe Photography" />
    <Hero />
  </Layout>
)

export default Index
