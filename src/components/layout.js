import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Jumplinks from "./jumplinks"

import SEO from "./seo"
import "../styles/base.css"
import "../styles/styles.scss"
import "../styles/styles.css"

const Layout = ({ children }) => {
  return (
    <>
      <div className="header-wrapper">
        <Header />
        <SEO />
        <Jumplinks />
      </div>

      <div id="main-content">{children}</div>

      <footer id="footer">
        <p>
          Take Blaction © {new Date().getFullYear()}, Made with
          {` `}
          <span role="img" aria-label="Heart Icon">
            ❤️
          </span>
        </p>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
