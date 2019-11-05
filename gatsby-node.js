const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allNodeBlog {
        edges {
          node {
            id
            path {
              alias
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allNodeBlog.edges.forEach(({ node }) => {
      createPage({
        path: node.path.alias,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          id: node.id,
        },
      })
    })
  })
}
