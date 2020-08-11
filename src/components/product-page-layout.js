import React from "react"
import { graphql } from "gatsby"

export default function ProductPageLayout({ data }) {
  return (
    <div>
      <h1>${data.markdownRemark.frontmatter.price}</h1>
      <p>{data.markdownRemark.frontmatter.size}</p>
      <p>{data.markdownRemark.frontmatter.category}</p>
    </div>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        category
        price
        size
      }
      fields {
        slug
      }
    }
  }
`
