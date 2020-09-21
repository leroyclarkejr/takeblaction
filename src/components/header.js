import { Link } from "gatsby"

import React, { useState, useRef } from "react"
import { useOnClickOutside } from "./hooks"

import { OutboundLink } from "gatsby-plugin-google-analytics"

import takeblaction from "../images/TB-Wordmark.svg"

import FB from "../images/FB2.svg"
import IG from "../images/IG2.svg"
import TW from "../images/TWTR2.svg"

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
            style={{
              transform: open ? "translateX(0)" : "translateX(100%)",
              boxShadow: open ? "-5px 0px 10px #16181c" : "none",
            }}
          >
            <div className="links">
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
                <h3>Blact Now!</h3>
              </Link>
            </div>

            <div className="below-links">
              <p>Connect with us</p>
              <div className="our-social">
                <OutboundLink href="https://www.facebook.com/takeblaction">
                  <img src={FB} />
                </OutboundLink>
                <OutboundLink href="https://www.instagram.com/takeblaction/">
                  <img src={IG} />
                </OutboundLink>
                <OutboundLink href="https://twitter.com/takeblaction">
                  <img src={TW} />
                </OutboundLink>
              </div>
              <p>
                Contact us by email{" "}
                <span>
                  <OutboundLink
                    href="mailto:takeblaction@gmail.com"
                    className="email"
                  >
                    takeblaction@gmail.com
                  </OutboundLink>
                </span>
              </p>
            </div>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Header
