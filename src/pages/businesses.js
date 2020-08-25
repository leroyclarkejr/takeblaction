// import React from "react"
// import Layout from "../components/layout"
// import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight"
// import { graphql } from "gatsby"

// const Businesses = ({ data }) => {
//   return (
//     <Layout>
//       <div id="data-container">
//         <h2>
//           Take #Blaction now<span> ✊🏾</span>
//         </h2>
//         <h4>businesses</h4>

//         {getBusinessesData(data)}
//       </div>
//     </Layout>
//   )
// }

// function getBusinessesData(data) {
//   const businessesArray = []
//   data.allBusinesses.edges.forEach(item =>
//     businessesArray.push(
//       <div className="data">
//         <a href={item.node.website}>{item.node.name}</a>
//         <p>Category: {item.node.category}</p>

//         <KeyboardArrowRightIcon width="10px"></KeyboardArrowRightIcon>
//       </div>
//     )
//   )
//   return businessesArray
// }

// export const query = graphql`
//   query BusinessesPageQuery {
//     allBusinesses {
//       edges {
//         node {
//           name
//           category
//           website
//         }
//       }
//     }
//   }
// `

// export default Businesses
