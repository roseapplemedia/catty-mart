import React from "react"
import { graphql } from "gatsby"
import { Image } from "cloudinary-react"
import styled from "styled-components"
// import { render } from "react-dom"

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`

const ProductImage = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
  align-items: center;
`
const SelectButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  /* height: 15rem; */
  padding: 0.5rem 0.75rem;
  font-size: 0.75rem;
  background-color: turquoise;
  font-weight: bold;
  border: none;
  width: 135px;
  border-radius: 10px;
  text-transform: uppercase;
  margin: 0 1rem;
  align-self: flex-start;
  align-items: center;
`
const BuyButton = styled.button`
  padding: 0.5rem 0.75rem;
  font-size: 0.75rem;
  background-color: blue;
  font-weight: bold;
  color: white;
  border: none;
  width: 120px;
  border-radius: 10px;
  text-transform: uppercase;
  align-self: center;
  margin: 0 1rem;
`

const ProductDesc = styled.span`
  font-size: 1rem;
  width: 20rem;
`

class Item extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: this.props.data.markdownRemark.frontmatter.customField.values[0]
        .name,
    }
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
      <Container>
        <ProductImage>
          <div className="products-layout-info">
            <h1 className="product-title">{item.frontmatter.title}</h1>
          </div>
          <Image
            cloudName="roseapplemedia"
            publicId={item.frontmatter.image}
            width="350"
            crop="scale"
            fetchFormat="auto"
            quality="auto"
            secure="true"
          ></Image>
          <ProductDesc>{item.frontmatter.description}</ProductDesc>
        </ProductImage>
        <SelectButton>
          <h4>{item.frontmatter.customField.name}</h4>
          <h2>
            $
            {this.updatePrice(
              item.frontmatter.price,
              item.frontmatter.customField.values
            )}
          </h2>
          {/* <label for="size">Sizes</label> */}
          <select
            id={item.frontmatter.customField.name}
            onChange={e => this.setSelected(e.target.value)}
            value={this.state.selected}
          >
            {item.frontmatter.customField.values.map(option => (
              <option key={option.name}>{option.name}</option>
            ))}
          </select>

          <BuyButton
            className="snipcart-add-item"
            data-item-description={item.frontmatter.description}
            data-item-id={item.frontmatter.size}
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
          </BuyButton>
        </SelectButton>
      </Container>
    )
  }
}

export default Item

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        description
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
