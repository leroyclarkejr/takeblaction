import React from "react"
import { useState, useRef } from "react"
import { useOnClickOutside } from "./hooks"

import arrow from "../images/arrow.svg"

const DataList = ({
  title,
  shortDesc,
  imgSrc,
  longDesc,
  extLink,
  category,
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
        ></div>
      </div>

      <div
        className="more-content"
        style={{
          maxHeight: morecontent ? "100%" : "0",
          opacity: morecontent ? "1" : "0",
        }}
      >
        <h5>Brief</h5>
        <p>{longDescP}</p>

        <a href={extLink} className="tbutton">
          Take Blaction
          <img src={arrow} alt="Arrow icon" />
        </a>
      </div>
    </div>
  )
}

export default DataList
