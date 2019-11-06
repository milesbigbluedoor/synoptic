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

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allTaxonomyTermSubjects {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  `).then(result => {
    result.data.allTaxonomyTermSubjects.edges.forEach(({ node }) => {
      createPage({
        path: `/photos/subject/${node.name.toLowerCase()}`,
        component: path.resolve(`./src/pages/photos.js`),
        context: {
          filter: {
            relationships: {
              field_subject: { elemMatch: { id: { eq: node.id } } },
            },
          },
        },
      })
    })
  })
}
