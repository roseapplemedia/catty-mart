import React from "react"
import { graphql, Link } from "gatsby"

export default function ProductsPage({ data }) {
  const products = data.allMarkdownRemark.edges
  return (
    <div className="product-list">
      {products.map(({ node }) => {
        return (
          <Link key={node.fields.slug} to={node.fields.slug}>
            <div>
              <p>...IMAGE</p>
            </div>
            <div>${node.frontmatter.price}</div>
            <div>{node.frontmatter.category}</div>

            <div>{node.frontmatter.size}</div>
          </Link>
        )
      })}
    </div>
  )
}

export const pageQuery = graphql`
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            category
            price
            size
          }
        }
      }
    }
  }
`
