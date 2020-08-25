import { Link } from "gatsby"

import PropTypes, { bool, func } from "prop-types"
import React, { useState, useRef } from "react"
import { useOnClickOutside } from "./hooks"
import takeblaction from "../images/TB-Wordmark.svg"

const Header = ({ siteTitle, menuLinks }) => {
  const [open, setOpen] = useState(false)
  const node = useRef()
  useOnClickOutside(node, () => setOpen(false))

  return (
    <header id="header">
      <h1>
        <Link to="/">
          <img
            src={takeblaction}
            alt="Taking action to benefit black lives."
          ></img>
        </Link>
      </h1>

      <div id="nav" ref={node}>
        <button
          className="nav-button"
          open={open}
          onClick={() => setOpen(!open)}
          style={{
            backgroundColor: open ? "#fff" : "#000",
          }}
        >
          <div
            style={{
              transform: open ? "rotate(45deg)" : "rotate(0)",
              background: open ? "#000" : "#fff",
            }}
          />
          <div
            style={{
              opacity: open ? "0" : "1",
              transform: open ? "translateX(20px)" : "translateX(0)",
              background: open ? "#000" : "#fff",
            }}
          />
          <div
            style={{
              transform: open ? "rotate(-45deg)" : "rotate(0)",
              background: open ? "#000" : "#fff",
            }}
          />
        </button>
        <nav
          className="nav-menu"
          open={open}
          style={{ transform: open ? "translateX(0)" : "translateX(100%)" }}
        >
          <Link
            to="/"
            // activeClassName="active"
          >
            Home
          </Link>
          <Link
            to="/"
            // activeClassName="active"
          >
            Vote!
          </Link>
          <Link
            to="/"
            // activeClassName="active"
          >
            Take Blaction
          </Link>
          <Link
            to="/"
            // activeClassName="active"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

// button.propTypes = {
//   open: bool.isRequired,
//   setOpen: func.isRequired,
// }

export default Header
