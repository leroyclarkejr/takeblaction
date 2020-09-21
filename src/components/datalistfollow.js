import React from "react"
import { useState, useRef } from "react"
import { useOnClickOutside } from "./hooks"

import FB from "../images/FB2.svg"
import IG from "../images/IG2.svg"
import TW from "../images/TWTR2.svg"

import { OutboundLink } from "gatsby-plugin-google-analytics"

const DataListFollow = ({
  title,
  shortDesc,
  imgSrc,
  longDesc,
  extLink,
  category,
  facebook,
  instagram,
  twitter,
}) => {
  const [morecontent, setMoreContent] = useState(false)
  const node = useRef()
  useOnClickOutside(node, () => setMoreContent(false))

  let str = longDesc
  const longDescP = str.replace(/(<([^>]+)>)/gi, "")

  return (
    <div
      className="data-list-item"
      onClick={() => setMoreContent(!morecontent)}
      onKeyPress={() => setMoreContent(!morecontent)}
      key={title}
      ref={node}
      aria-label="List item"
      role="menuitem"
      tabIndex={0}
    >
      <div className="content">
        <div className="content-text">
          <h3>{title}</h3>

          <p>
            {category}
            {shortDesc}
          </p>
        </div>
        <div
          className="content-image"
          style={{ backgroundImage: "url(" + imgSrc + ")" }}
          alt={imgSrc}
        ></div>
      </div>

      <div
        className="more-content"
        style={{
          maxHeight: morecontent ? "100%" : "0",
          opacity: morecontent ? "1" : "0",
          paddingTop: morecontent ? "20px" : "0",
        }}
      >
        <h5>Brief</h5>
        <p style={{ marginBottom: "24px" }}>{longDescP}</p>

        <h5>Follow on social</h5>
        <div className="data-social-links">
          {facebook === "" ? null : (
            <OutboundLink href={facebook}>
              <img src={FB} alt={`${title} link to Facebook`} />
            </OutboundLink>
          )}
          {instagram === "" ? null : (
            <OutboundLink href={instagram}>
              <img src={IG} alt={`${title} link to Instagram`} />
            </OutboundLink>
          )}

          {twitter === "" ? null : (
            <OutboundLink href={twitter}>
              <img src={TW} alt={`${title} link to Twitter`} />
            </OutboundLink>
          )}
        </div>
      </div>
    </div>
  )
}

export default DataListFollow
