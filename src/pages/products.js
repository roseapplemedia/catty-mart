import React from "react"
import { graphql, Link } from "gatsby"
import { Image } from "cloudinary-react"

export default function ProductsPage({ data }) {
  const products = data.allMarkdownRemark.edges
  return (
    <div className="product-list">
      {products.map(({ node }) => {
        return (
          <Link key={node.fields.slug} to={node.fields.slug}>
            <div>{node.frontmatter.category} </div>
            <div>
              <Image
                cloudName="roseapplemedia"
                publicId={node.frontmatter.image}
                width="300"
                crop="scale"
                fetchFormat="auto"
                quality="auto"
                secure="true"
              ></Image>
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
            image
          }
        }
      }
    }
  }
`
