import { Link } from "gatsby"

import React, { useState, useRef } from "react"
import { useOnClickOutside } from "./hooks"
import takeblaction from "../images/TB-Wordmark.svg"

const Header = () => {
  const [open, setOpen] = useState(false)
  const node = useRef()
  useOnClickOutside(node, () => setOpen(false))

  return (
    <div>
      <header id="header">
        <Link to="/">
          <img
            src={takeblaction}
            alt="Taking action to benefit black lives."
          ></img>
        </Link>

        <div id="nav" ref={node}>
          <button
            className="nav-button"
            open={open}
            onClick={() => setOpen(!open)}
          >
            <div
              style={{
                transform: open ? "rotate(45deg)" : "rotate(0)",
              }}
            />
            <div
              style={{
                opacity: open ? "0" : "1",
                transform: open ? "translateX(-20px)" : "translateX(0)",
              }}
            />
            <div
              style={{
                transform: open ? "rotate(-45deg)" : "rotate(0)",
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
              <h3>Home</h3>
            </Link>

            <Link
              to="/vote/"
              // activeClassName="active"
            >
              <h3>Take Blaction</h3>
            </Link>
            <Link
              to="/"
              // activeClassName="active"
            >
              <h3>Contact Us</h3>
            </Link>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Header
