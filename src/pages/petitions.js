import React from "react"
import Layout from "../components/layout"
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight"
import { graphql } from "gatsby"

// import ControlledExpansionPanels from "../components/expansionpanel"

const Petitions = ({ data }) => {
  return (
    <Layout>
      <div id="data-container">
        <h2>
          Take #Blaction now<span> ✊🏾</span>
        </h2>
        <h4>Petitions</h4>

        {getPetitionsData(data)}
      </div>
    </Layout>
  )
}

function getPetitionsData(data) {
  const petitionsArray = []
  data.allPetitions.edges.forEach(
    item =>
      petitionsArray.push(
        <div className="data">
          <a href={item.node.link}>{item.node.name}</a>
          <KeyboardArrowRightIcon width="10px"></KeyboardArrowRightIcon>
        </div>
      )``
  )
  return petitionsArray
}

export const query = graphql`
  query PetitionsPageQuery {
    allPetitions {
      edges {
        node {
          name
          link
        }
      }
    }
  }
`

export default Petitions
