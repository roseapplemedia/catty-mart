import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import Image from "../images/alittlecattywampus.png"

export default function Header({ siteTitle }) {
  return (
    <header>
      <Helmet>
        <title>{siteTitle}</title>
      </Helmet>
      <nav className="header">
        <div>
          <Link to="/">
            <img src={Image} alt="logo" className="logo-image" />
          </Link>
        </div>
        <div className="nav-links">
          <Link className="nav-links" to="/">
            Home
          </Link>
          <Link className="nav-links" to="../about">
            About
          </Link>
          <Link className="nav-links" to="../contact/">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  )
}
