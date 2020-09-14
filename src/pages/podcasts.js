import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import DataList from "../components/datalist"

export const query = graphql`
  query PodcastsQuery {
    allPodcastsCsv {
      edges {
        node {
          long_description
          short_description
          Thumbnail
          Name
          External_Link
        }
      }
    }
  }
`

const Podcasts = ({ data }) => {
  function getPodcastsData(data) {
    const podcastsArray = []

    data.allPodcastsCsv.edges.forEach(item =>
      podcastsArray.push(
        <DataList
          title={item.node.Name}
          shortDesc={item.node.short_description}
          imgSrc={item.node.Thumbnail}
          longDesc={item.node.long_description}
          extLink={item.node.External_Link}
          key={item.node.Name}
        />
      )
    )
    return podcastsArray
  }

  return (
    <Layout>
      <div className="category-header">
        <h2>Listen</h2>
        <h4>
          If you enjoy the long-form structure of podcasts for self-educating
          and learning more about the issues surrounding discrimination
          throughout the world, we recommend these:
        </h4>
      </div>
      <div id="data-container">{getPodcastsData(data)}</div>
    </Layout>
  )
}

export default Podcasts
