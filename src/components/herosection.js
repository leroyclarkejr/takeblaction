import React from "react"
import tbblk from "../images/tb-bgwht.png"

class Hero extends React.Component {
  constructor(props) {
    super(props)
    this.state = ""
  }

  render() {
    return (
      <div id="hero">
        <div>
          <img src={tbblk} alt="Take blaction"></img>
        </div>

        <div>
          <h2>its time for change.</h2>
          <p>
            The goal of this collective is to compile{" "}
            <span className="bold">resources for black justice </span>
            into one place so that anyone can easily access and navigate all of
            the databanks, resources, and links to black justice materials.
          </p>
        </div>
      </div>
    )
  }
}

export default Hero
