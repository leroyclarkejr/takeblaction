import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import takeblaction from "../images/takeblaction.png"

const Header = ({ siteTitle }) => (
  <header id="header">
    <h1>
      <Link to="/">
        <img src={takeblaction}></img>
      </Link>
    </h1>

    <nav>
      <a href="#about-us">About us</a>
      <a>How to help</a>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
