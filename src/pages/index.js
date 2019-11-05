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
  </Layout>
)

export default Index
