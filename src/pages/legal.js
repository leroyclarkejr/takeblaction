import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import DataList from "../components/datalistlegal"

export const query = graphql`
  query MyLegalQuery {
    allLegalCsv {
      edges {
        node {
          Name
          Short_description
          external_link
        }
      }
    }
  }
`

const Legal = ({ data }) => {
  function getLegalData(data) {
    const legalArray = []
    data.allLegalCsv.edges.forEach(item =>
      legalArray.push(
        <DataList
          title={item.node.Name}
          shortDesc={item.node.Short_description}
          extLink={item.node.external_link}
        />
      )
    )
    return legalArray
  }

  return (
    <Layout>
      <div className="category-header">
        <h2>Legal </h2>
        <h4>Legal Resources to help lead change.</h4>
      </div>
      <div id="data-container">{getLegalData(data)}</div>
    </Layout>
  )
}

export default Legal
