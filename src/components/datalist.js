import React from "react"
import { useState } from "react"
const DataList = ({ title, shortDesc, imgSrc, longDesc, extLink }) => {
  const [morecontent, setMoreContent] = useState(false)

  return (
    <div
      className="data-list-item"
      onClick={() => setMoreContent(!morecontent)}
    >
      <div className="content">
        <div className="content-text">
          <h3>{title}</h3>
          <p>{shortDesc}</p>
        </div>
        <div className="content-image">
          <img src={imgSrc} />
        </div>
      </div>

      <div
        className="more-content"
        style={{
          maxHeight: morecontent ? "100%" : "0",
          opacity: morecontent ? "1" : "0",
        }}
      >
        <h4>Brief</h4>
        <p>{longDesc}</p>

        <a href={extLink} className="tbutton">
          Take Blaction ↪
        </a>
      </div>
    </div>
  )
}

export default DataList
