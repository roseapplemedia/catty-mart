import React from "react"

export default function Footer({ metaData }) {
  return (
    <footer>
      @ {metaData.title} {new Date().getFullYear()}. By {metaData.author} at (
      <a href={metaData.website}>{metaData.company}</a>)
    </footer>
  )
}
