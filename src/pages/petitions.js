// import React from "react"
// import Layout from "../components/layout"
// import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight"
// import { graphql } from "gatsby"

// // import ControlledExpansionPanels from "../components/expansionpanel"
// function getPetitionsData(data) {
//   const petitionsArray = []
//   data.allPetitions.edges.forEach(
//     item =>
//       petitionsArray.push(
//         <div className="data">
//           <a href={item.node.link}>{item.node.name}</a>
//           <KeyboardArrowRightIcon width="10px"></KeyboardArrowRightIcon>
//         </div>
//       )``
//   )
//   return petitionsArray
// }

// const Petitions = ({ data }) => {
//   return (
//     <Layout>
//       <div id="data-container">
//         <h2>
//           Take #Blaction now<span> ✊🏾</span>
//         </h2>
//         <h4>Petitions</h4>

//         {getPetitionsData}
//       </div>
//     </Layout>
//   )
// }

// export const query = graphql`
//   query MyQuery {
//     takeBlactionPetitionsCsv {
//       Name
//       Short_description
//       Long_Description
//       Source
//       Thumbnail
//     }
//   }
// `

// export default Petitions
