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
        <p>{data.markdownRemark.frontmatter.title}</p>
        <p>{data.markdownRemark.frontmatter.size}</p>
        <p>{data.markdownRemark.frontmatter.tags}</p>
        <p>{data.markdownRemark.frontmatter.customField.name}</p>
        <p>{data.markdownRemark.frontmatter.customField.values}</p>
        <button
          className="snipcart-add-item"
          data-item-description="High-quality"
          data-item-id={data.markdownRemark.frontmatter.size}
          data-item-image={data.markdownRemark.frontmatter.image}
          data-item-price={data.markdownRemark.frontmatter.price}
          data-item-url={
            `https://agitated-goldberg-1f087a.netlify.app/` +
            data.markdownRemark.fields.slug
          }
          data-item-name={data.markdownRemark.frontmatter.title}

          // data-item-custom1-name={
          //   data.markdownRemark.frontmatter.customField.name
          // }
          // data-item-custom1-options={
          //   data.markdownRemark.frontmatter.customField.values
          // }
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
        customField {
          name
          values
        }
        tags
        price
        size
        image
        title
      }
      fields {
        slug
      }
      id
    }
  }
`
