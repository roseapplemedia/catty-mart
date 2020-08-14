import React from "react"
import { graphql } from "gatsby"
import { Image } from "cloudinary-react"

export default function ProductPageLayout({ data }) {
  return (
    <div className="products-layout">
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
      </div>
      <div>
        <h1>${data.markdownRemark.frontmatter.price}</h1>
        <p>{data.markdownRemark.frontmatter.size}</p>
        <p>{data.markdownRemark.frontmatter.category}</p>
        <button
          className="snipcart-add-item"
          data-item-id={data.markdownRemark.frontmatter.id}
          data-item-price={data.markdownRemark.frontmatter.price}
          data-item-url={data.markdownRemark.frontmatter.slug}
          data-item-name={data.markdownRemark.frontmatter.category}
          data-item-custom1-name="Sizes"
          data-item-custom1-options="Small[+18.00]|Medium[+23.00]|Large[+25.00]"
        >
          ADD TO CART
        </button>
      </div>
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
