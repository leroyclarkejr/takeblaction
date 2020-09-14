import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import DataList from "../components/datalist"

export const query = graphql`
  query MyOrganizationsQuery {
    allOrganizationsCsv {
      edges {
        node {
          Name
          Short_Description
          Long_Description
          Thumbnail
          Website
        }
      }
    }
  }
`

const Organizations = ({ data }) => {
  function getOrganizationsData(data) {
    const organizationArray = []
    data.allOrganizationsCsv.edges.forEach(item =>
      organizationArray.push(
        <DataList
          title={item.node.Name}
          shortDesc={item.node.Short_Description}
          imgSrc={item.node.Thumbnail}
          longDesc={item.node.Long_Description}
          extLink={item.node.Website}
        />
      )
    )
    return organizationArray
  }

  return (
    <Layout>
      <div className="category-header">
        <h2>Listen to Podcasts</h2>
        <h4>
          If you enjoy the long-form structure of podcasts for self-educating
          and learning more about the issues surrounding discrimination
          throughout the world, we recommend these:
        </h4>
      </div>
      <div id="data-container">{getOrganizationsData(data)}</div>
    </Layout>
  )
}

export default Organizations
