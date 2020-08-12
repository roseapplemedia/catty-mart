import React from "react"
import { graphql } from "gatsby"
import { Image } from "cloudinary-react"

export default function ProductPageLayout({ data }) {
  return (
    <div>
      <Image
        cloudName="roseapplemedia"
        publicId={data.markdownRemark.frontmatter.image}
        width="600"
        crop="scale"
        fetchFormat="auto"
        quality="auto"
        secure="true"
      ></Image>
      <h1>${data.markdownRemark.frontmatter.price}</h1>
      <p>{data.markdownRemark.frontmatter.size}</p>
      <p>{data.markdownRemark.frontmatter.category}</p>
      <button
        className="snipcart-add-item"
        data-item-id={data.markdownRemark.frontmatter.id}
        data-item-price={data.markdownRemark.frontmatter.price}
        data-item-url="localhost:8000"
        data-item-name={data.markdownRemark.frontmatter.category}
      >
        ADD TO CART
      </button>
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
        image
      }
      fields {
        slug
      }
    }
  }
`
