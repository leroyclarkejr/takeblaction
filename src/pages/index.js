import React from "react"

import Header from "../components/header"
import Jumplinks from "../components/jumplinks"

import SEO from "../components/seo"
import Hero from "../components/hero"

import "../styles/base.css"
import "../styles/styles.scss"
import "../styles/styles.css"

const IndexPage = ({ children }) => (
  <>
    <div className="header-wrapper">
      <Header />
      <SEO />
      <Jumplinks />
    </div>
    <Hero />

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

export default IndexPage
