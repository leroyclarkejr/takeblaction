import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import DataList from "../components/datalist"

export const query = graphql`
  query HealthQuery {
    allHealthcareResourcesCsv {
      edges {
        node {
          Description
          Name
          Thumbnail
          External_Link
          Type
        }
      }
    }
  }
`

const HealthcareResources = ({ data }) => {
  function getHealthcareResourcesData(data) {
    const healthcareArray = []

    data.allHealthcareResourcesCsv.edges.forEach(item =>
      healthcareArray.push(
        <DataList
          title={item.node.Name}
          shortDesc={item.node.Type}
          imgSrc={item.node.Thumbnail}
          longDesc={item.node.Description}
          extLink={item.node.External_Link}
          key={item.node.Name}
        />
      )
    )
    return healthcareArray
  }

  return (
    <Layout>
      <div className="category-header">
        <h2>Healthcare Resources</h2>
        <h4>
          A collection of healthcare resources created by and for Black people.
        </h4>
      </div>
      <div id="data-container">{getHealthcareResourcesData(data)}</div>
    </Layout>
  )
}

export default HealthcareResources
