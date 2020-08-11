const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")
const { graphql } = require("gatsby")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query MyQuery {
      allMarkdownRemark {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`ERROR: Loading "createPages" query`)
  }

  const products = result.data.allMarkdownRemark.edges
  products.forEach(({ node }, index) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(
        `./src/components/${String(node.frontmatter.templateKey)}.js`
      ),
      context: { id: node.id },
    })
  })
}
