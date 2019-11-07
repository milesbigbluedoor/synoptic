import React, { useState } from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import "../scss/main.scss"

import BlogCard from "../components/blog-card"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = ({ data }) => {
  const [page, setPage] = useState(1)
  const [allPostsLoaded, setAllPostsLoaded] = useState(false)
  const postsPerPage = 5

  // renders the posts to the page based on the the current paginations "page"
  // and the amount of posts to be be displayed per "page"
  const renderPosts = () => {
    const posts = data.allNodeBlog.edges
    const currentPosts = posts.slice(0, page * postsPerPage)

    return currentPosts.map(post => (
      <BlogCard
        key={post.node.id}
        image={
          post.node.relationships.field_image.localFile.childImageSharp.fluid
        }
        title={post.node.title}
        url={post.node.path.alias}
        date={post.node.created}
        body={post.node.body.value}
      />
    ))
  }

  const loadMore = () => {
    const posts = data.allNodeBlog.edges
    // check if all fetching more posts will result in all posts being displays
    const isAllPosts = (page + 1) * postsPerPage >= posts.length
    setPage(prevState => prevState + 1)
    setAllPostsLoaded(isAllPosts)
  }

  return (
    <Layout>
      <SEO title="Blog | John Doe Photography" />
      <h1 className="blog__title">Blog Posts</h1>
      <section className="blog__posts">{renderPosts()}</section>
      {!allPostsLoaded && (
        <button
          type="button"
          className="button blog__load-more"
          onClick={() => loadMore()}
        >
          Load more
        </button>
      )}
    </Layout>
  )
}

export default Blog

export const query = graphql`
  query {
    allNodeBlog(sort: { fields: created, order: DESC }) {
      edges {
        node {
          id
          title
          path {
            alias
          }
          created(formatString: "Do MMMM YYYY")
          body {
            value
          }
          relationships {
            field_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 300, quality: 100) {
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

Blog.propTypes = {
  data: PropTypes.node.isRequired,
}
