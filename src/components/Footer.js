import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import * as styles from "./Footer.module.scss"
const Footer = () => {
  const author = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer className={styles.footer}>
      <p>created by {author.site.siteMetadata.author}, ©2022</p>
      <a href="https://www.flaticon.com/free-icons/sun" title="sun icons">
        Sun icons created by Freepik - Flaticon
      </a>
    </footer>
  )
}

export default Footer
