import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import Image from "../logo-images/alittlecattywampus.png"
import styled from "styled-components"

const NavHeader = styled.div`
  margin-bottom: 4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  place-items: center;
`
const NavLinks = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  text-transform: uppercase;
  font-weight: bold;
  text-decoration: none;

  & a {
    margin-right: 3rem;
    font-size: 1.2rem;
  }
`
const LogoImage = styled.img`
  max-width: 350px;
`
const BasketButton = styled.button`
  display: flex;
  justify-content: space-around;
  padding: 0.5rem 0.25rem;
  font-size: 0.75rem;
  background-color: turquoise;
  font-weight: bold;
  border: none;
  width: 25ch;
  border-radius: 10px;
  text-transform: uppercase;
  align-self: center;
  margin: 3ch 12ch;
`

export default function Header({ siteTitle }) {
  return (
    <header>
      <Helmet>
        <title>{siteTitle}</title>
      </Helmet>
      <NavHeader>
        <Link to="/">
          <LogoImage src={Image} alt="logo" className="logo-image" />
        </Link>

        <BasketButton className="snipcart-checkout">
          <span className="basket">BASKET</span>
          <span className="snipcart-items-count basket"></span>
          <span className="snipcart-total-price basket"></span>
        </BasketButton>
        <NavLinks>
          <Link to="/">Home</Link>
          <Link to="../about">About</Link>
          <Link to="../contact/">Contact</Link>
        </NavLinks>
      </NavHeader>
    </header>
  )
}
