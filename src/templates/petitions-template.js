import React from "react"
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight"

export default function PetitionTemplate({ pageContext: { petition } }) {
  return (
    <div id="data-container">
      <h2>
        Take #Blaction now<span> ✊🏾</span>
      </h2>
      <h4>Petitions</h4>
      {petition.forEach(() => {
        return (
          <div className="data">
            <a href={petition.link}>{petition.name}</a>
            <KeyboardArrowRightIcon width="10px"></KeyboardArrowRightIcon>
          </div>
        )
      })}
    </div>
  )
}
