import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import DataList from "../components/datalist"

export const query = graphql`
  query MyVoteQuery {
    allVoteCsv {
      edges {
        node {
          Name
          Short_description
          Long_description
          Thumbnail
          External_Link
        }
      }
    }
  }
`

const Vote = ({ data }) => {
  function getVoteData(data) {
    const voteArray = []
    data.allVoteCsv.edges.forEach(item =>
      voteArray.push(
        <DataList
          title={item.node.Name}
          shortDesc={item.node.Short_description}
          imgSrc={item.node.Thumbnail}
          longDesc={item.node.Long_description}
          extLink={item.node.External_Link}
        />
      )
    )
    return voteArray
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
      <div id="data-container">{getVoteData(data)}</div>
    </Layout>
  )
}

export default Vote
