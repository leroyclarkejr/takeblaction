import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import DataList from "../components/datalist"

export const query = graphql`
  query MyDonationsQuery {
    allDonateCsv {
      edges {
        node {
          Name
          Short_Description
          Long_Description
          Thumbnail
          External_Link
        }
      }
    }
  }
`

const Donations = ({ data }) => {
  function getDonationsData(data) {
    const donationsArray = []
    data.allDonateCsv.edges.forEach(item =>
      donationsArray.push(
        <DataList
          title={item.node.Name}
          shortDesc={item.node.Short_Description}
          imgSrc={item.node.Thumbnail}
          longDesc={item.node.Long_Description}
          extLink={item.node.External_Link}
        />
      )
    )
    return donationsArray
  }

  return (
    <Layout>
      <div className="category-header">
        <h2>Donate</h2>
        <h4>Support organizations fighting for change.</h4>
      </div>
      <div id="data-container">{getDonationsData(data)}</div>
    </Layout>
  )
}

export default Donations
