import React from "react"
import { useState, useRef } from "react"
import { useOnClickOutside } from "./hooks"

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
      key={title}
      ref={node}
    >
      <div className="content">
        <div className="content-text">
          <h3>{title}</h3>

          <p>
            {category}
            <br /> {shortDesc}
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
        <h4>Brief</h4>
        <p>{longDescP}</p>

        <a href={extLink} className="tbutton">
          Take Blaction ↪
        </a>
      </div>
    </div>
  )
}

export default DataList
