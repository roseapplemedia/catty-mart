import React from "react"
import { graphql } from "gatsby"
// import { Image } from "cloudinary-react"
// import { render } from "react-dom"

class Item extends React.Component {
  state = {
    selected: this.props.data.markdownRemark.frontmatter.customField.values[0]
      .name,
  }
  setSelected = value => {
    this.setState({ selected: value })
  }

  createString = values => {
    return values
      .map(option => {
        const price =
          option.priceChange >= 0
            ? `[+${option.priceChange}]`
            : `[${option.priceChange}]`
        return `${option.name}${price}`
      })
      .join("|")
  }

  updatePrice = (basePrice, values) => {
    const selectedOption = values.find(
      option => option.name === this.state.selected
    )
    return (basePrice + selectedOption.priceChange).toFixed(2)
  }

  render() {
    const item = this.props.data.markdownRemark

    return (
      <div className="products-layout">
        {/* <div>
        <Image
          cloudName="roseapplemedia"
          publicId={data.markdownRemark.frontmatter.image}
          width="600"
          crop="scale"
          fetchFormat="auto"
          quality="auto"
          secure="true"
        ></Image>
      </div> */}
        <div>
          <p>
            {this.updatePrice(
              item.frontmatter.price,
              item.frontmatter.customField.values
            )}
          </p>
          <p>{item.frontmatter.title}</p>
          <p>{item.frontmatter.size}</p>
          <p>{item.frontmatter.tags}</p>

          <p>{item.frontmatter.customField.name}</p>

          {/* <label for="size">Sizes</label> */}
          <select
            name="size"
            id={item.frontmatter.customField.name}
            onChange={e => this.setSelected(e.target.value)}
            value={this.state.selected}
          >
            {item.frontmatter.customField.values.map(option => (
              <option key={option.name}>{option.name}</option>
            ))}
          </select>

          <button
            className="snipcart-add-item"
            data-item-description="High-quality"
            data-item-id={item.frontmatter.size}
            data-item-image={item.frontmatter.image}
            data-item-price={item.frontmatter.price}
            data-item-url={
              "https://agitated-goldberg-1f087a.netlify.app" + item.fields.slug
            }
            data-item-name={item.frontmatter.title}
            data-item-custom1-name={
              item.frontmatter.customField
                ? item.frontmatter.customField.name
                : null
            }
            data-item-custom1-options={this.createString(
              item.frontmatter.customField.values
            )}
            data-item-custom1-value={this.state.selected}
          >
            ADD TO BASKET
          </button>
        </div>
      </div>
    )
  }
}

export default Item

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        customField {
          name
          values {
            name
            priceChange
          }
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
