import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import { useStaticQuery, graphql } from "gatsby"

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
          company
          website
        }
      }
    }
  `)

  return (
    <div className="site-color">
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer metaData={data.site.siteMetadata} />
    </div>
  )
}
