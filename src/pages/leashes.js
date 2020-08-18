import React from "react"
import { graphql, Link } from "gatsby"
import { Image } from "cloudinary-react"

export default function ProductsPage({ data }) {
  const products = data.allMarkdownRemark.edges
  return (
    <div className="main-grid">
      {products.map(({ node }) => {
        return (
          <Link key={node.fields.slug} to={node.fields.slug}>
            <div class="main-item">
              <h2 class=" category-tag">{node.frontmatter.title}</h2>
              <div className="card__image">
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
              <div className="content-description">
                {node.frontmatter.description}
              </div>
              <button class="card-button">View this item</button>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { tags: { eq: "leashes" } } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            price
            size
            image
            tags
          }
        }
      }
    }
  }
`
