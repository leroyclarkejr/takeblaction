import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Jumplinks from "./jumplinks"
import Hero from "./herosection"

import SEO from "./seo"
import "../styles/base.css"
import "../styles/styles.scss"
import "../styles/styles.css"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //         menuLinks {
  //           name
  //           link
  //         }
  //       }
  //     }
  //   }
  // `)
  console.log(window.location.href)

  return (
    <>
      <div className="header-wrapper">
        <Header />
        <SEO />
        <Jumplinks />
      </div>

      <Hero />

      <div id="main-content">{children}</div>

      <footer id="footer">
        Take Blaction © {new Date().getFullYear()}, Made with
        {` `}
        <span role="img" aria-label="Heart Icon">
          ❤️
        </span>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
