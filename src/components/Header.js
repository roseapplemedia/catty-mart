import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import Image from "../olderimages/alittlecattywampus.png"
import { NavHeader, NavLinks } from "../Styled/Header"

export default function Header({ siteTitle }) {
  return (
    <header>
      <Helmet>
        <title>{siteTitle}</title>
      </Helmet>
      <NavHeader>
        <div>
          <Link to="/">
            <img src={Image} alt="logo" className="logo-image" />
          </Link>
        </div>
        <NavLinks>
          <Link to="/">Home</Link>
          <Link to="../about">About</Link>
          <Link to="../contact/">Contact</Link>

          <button className="snipcart-checkout card-button">
            <span className="basket">BASKET</span>
            <span className="snipcart-items-count basket"></span>
            <span className="snipcart-total-price basket"></span>
          </button>
        </NavLinks>
      </NavHeader>
    </header>
  )
}
