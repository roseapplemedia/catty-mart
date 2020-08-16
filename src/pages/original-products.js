import React from "react"
import { graphql, Link } from "gatsby"
import { Image } from "cloudinary-react"

export default function ProductsPage({ data }) {
  const products = data.allMarkdownRemark.edges
  return (
    <div className="product-list">
      {products.map(({ node }) => {
        return (
          <div className="card-content">
            <p className="content-p content-font-size">
              {node.frontmatter.category}
            </p>
            <Link
              className="content-p"
              key={node.fields.slug}
              to={node.fields.slug}
            >
              <p className="content-p">{node.frontmatter.category} </p>
              <div className="image">
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

              <span className="content-span">
                <p className="content-font-size">{node.frontmatter.category}</p>
                <p className="content-font-size">{node.frontmatter.size}</p>
              </span>
              <div className="content-span content-font-size">
                ${node.frontmatter.price}
              </div>
              <button className="content-button content-p ">
                View this item
              </button>
            </Link>
          </div>
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
