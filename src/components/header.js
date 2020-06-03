import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import takeblaction from "../images/takeblaction.png"

const Header = ({ siteTitle }) => (
  <header>
    <h1>
      <img src={takeblaction}></img>
    </h1>
    <nav>
      <a>Home</a>
      <a>Contact Us</a>
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
