import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import Image from "../olderimages/alittlecattywampus.png"
import { NavHeader, NavLinks, LogoImage, BasketButton } from "../Styled/Header"

export default function Header({ siteTitle }) {
  return (
    <header>
      <Helmet>
        <title>{siteTitle}</title>
      </Helmet>
      <NavHeader>
        <div>
          <Link to="/">
            <LogoImage src={Image} alt="logo" className="logo-image" />
          </Link>
        </div>
        <NavLinks>
          <BasketButton className="snipcart-checkout">
            <span className="basket">BASKET</span>
            <span className="snipcart-items-count basket"></span>
            <span className="snipcart-total-price basket"></span>
          </BasketButton>
          <Link to="/">Home</Link>
          <Link to="../about">About</Link>
          <Link to="../contact/">Contact</Link>
        </NavLinks>
      </NavHeader>
    </header>
  )
}
