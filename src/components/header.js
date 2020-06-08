import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import takeblaction from "../images/takeblaction.png"

const Header = ({ siteTitle, menuLinks }) => (
  <header id="header">
    <h1>
      <Link to="/">
        <img
          src={takeblaction}
          alt="Taking action to benefit black lives."
        ></img>
      </Link>
    </h1>

    <div id="nav">
      <nav>
        <ul style={{ display: "flex", flex: 1 }}>
          {menuLinks.map(link => (
            <li
              key={link.name}
              style={{
                listStyleType: `none`,
                padding: `1rem`,
              }}
            >
              <Link style={{ color: `black` }} to={link.link}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
