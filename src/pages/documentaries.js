// import React from "react"
// import Layout from "../components/layout"
// import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight"
// import { graphql } from "gatsby"

// const Documentaries = ({ data }) => {
//   return (
//     <Layout>
//       <div id="data-container">
//         <h2>
//           Take #Blaction now<span> ✊🏾</span>
//         </h2>
//         <h4>documentaries</h4>

//         {getDocumentariesData(data)}
//       </div>
//     </Layout>
//   )
// }

// function getDocumentariesData(data) {
//   const documentariesArray = []
//   data.allDocumentaries.edges.forEach(item =>
//     documentariesArray.push(
//       <div className="data">
//         <a>{item.node.title}</a>

//         <KeyboardArrowRightIcon width="10px"></KeyboardArrowRightIcon>
//       </div>
//     )
//   )
//   return documentariesArray
// }

// export const query = graphql`
//   query DocumentariesPageQuery {
//     allDocumentaries {
//       edges {
//         node {
//           title
//         }
//       }
//     }
//   }
// `

// export default Documentaries
